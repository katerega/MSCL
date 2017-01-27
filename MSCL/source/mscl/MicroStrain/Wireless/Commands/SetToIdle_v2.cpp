/*******************************************************************************
Copyright(c) 2015-2017 LORD Corporation. All rights reserved.

MIT Licensed. See the included LICENSE.txt for a copy of the full MIT License.
*******************************************************************************/
#include "stdafx.h"
#include "SetToIdle_v2.h"
#include "WirelessProtocol.h"
#include "mscl/MicroStrain/ByteStream.h"
#include "mscl/MicroStrain/Wireless/Packets/WirelessPacket.h"

namespace mscl
{
    ByteStream SetToIdle_v2::buildCommand(NodeAddress nodeAddress)
    {
        //build the command ByteStream
        ByteStream cmd;
        cmd.append_uint8(0xAA);                                     //Start of Packet
        cmd.append_uint8(0xFE);                                     //Delivery Stop Flag
        cmd.append_uint8(0x00);                                     //App Data Type
        cmd.append_uint16(nodeAddress);                             //Node address    (2 bytes)
        cmd.append_uint8(0x02);                                     //Payload Length
        cmd.append_uint16(WirelessProtocol::cmdId_stopNode);        //Command ID    (2 bytes)

        //calculate the checksum of bytes 2-8
        uint16 checksum = cmd.calculateSimpleChecksum(1, 7);

        cmd.append_uint16(checksum);    //Checksum        (2 bytes)

        return cmd;
    }

    SetToIdle_v2::Response::Response(NodeAddress nodeAddress, std::weak_ptr<ResponseCollector> collector, const BaseStation& baseStation):
        SetToIdle::Response(nodeAddress, collector, baseStation),
        m_started(false)
    {
    }

    SetToIdle_v2::Response::~Response()
    {
        try
        {
            //cancel the set to idle command if needed
            cancel();
        }
        catch(...)
        {
            //make sure desctructor doesn't throw an exception
        }
    }

    bool SetToIdle_v2::Response::match(const WirelessPacket& packet)
    {
        //if the BaseStation hasn't reported that the operation has started
        if(!m_started)
        {
            //check if this matches the Base Station received response
            if(match_baseReceived(packet))
            {
                //successfully started, not complete so don't set the fullyMatched flag

                //notify that the response was matched
                m_matchCondition.notify();

                return true;
            }
        }

        //check if this matches the completion response
        if(match_completion(packet))
        {
            m_fullyMatched = true;

            m_matchCondition.notify();

            return true;
        }

        return false;
    }

    bool SetToIdle_v2::Response::match_baseReceived(const WirelessPacket& packet)
    {
        WirelessPacket::Payload payload = packet.payload();

        //check the main bytes of the packet
        if((packet.deliveryStopFlags().toInvertedByte() != 0x07) ||             //delivery stop flag
           packet.type() != WirelessPacket::packetType_baseReceived ||          //app data type
           payload.size() != 9 ||                                               //payload length
           payload.read_uint16(0) != WirelessProtocol::cmdId_stopNode ||        //command ID
           payload.read_uint16(7) != m_nodeAddress                              //eeprom address
           )
        {
            //failed to match some of the bytes
            return false;
        }

        m_started = true;

        return true;
    }

    bool SetToIdle_v2::Response::match_completion(const WirelessPacket& packet)
    {
        WirelessPacket::Payload payload = packet.payload();

        //check the main bytes of the packet
        if((packet.deliveryStopFlags().toInvertedByte() != 0x07) ||             //delivery stop flag
           packet.type() != WirelessPacket::packetType_baseSuccessReply ||      //app data type
           payload.size() != 5 ||                                               //payload length
           payload.read_uint16(0) != WirelessProtocol::cmdId_stopNode ||        //command ID
           payload.read_uint16(2) != m_nodeAddress                              //eeprom address
           )
        {
            //failed to match some of the bytes
            return false;
        }

        //create a lock for thread safety
        mutex_lock_guard lock(m_setToIdleMutex);

        //check the status flag for the result
        static const uint8 SUCCESS = 0;
        static const uint8 CANCELED = 1;
        uint8 status = payload.read_uint8(4);

        if(status == SUCCESS)
        {
            m_result = SetToIdleStatus::setToIdleResult_success;
            m_success = true;
        }
        else if(status == CANCELED)
        {
            m_result = SetToIdleStatus::setToIdleResult_canceled;
        }
        else
        {
            //need to handle another status byte
            assert(false);
            return false;
        }

        //we have fully matched the response
        m_fullyMatched = true;

        //notify that the response was matched
        m_matchCondition.notify();

        return true;
    }

    bool SetToIdle_v2::Response::started()
    {
        return m_started;
    }
}