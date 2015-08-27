/*****************************************************************************
Copyright(c) 2015 LORD Corporation. All rights reserved.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the included
LICENSE.txt file for a copy of the full GNU General Public License.
*****************************************************************************/
#include "stdafx.h"
#include "NodeFeatures_vlink_legacy.h"
#include "AvailableSampleRates.h"
#include "mscl/MicroStrain/Wireless/ChannelMask.h"
#include "mscl/MicroStrain/Wireless/Configuration/NodeEepromMap.h"

namespace mscl
{
	NodeFeatures_vlink_legacy::NodeFeatures_vlink_legacy(const NodeInfo& info):
		NodeFeatures(info)
	{
		//Channels
		m_channels.emplace_back(1, WirelessChannel::channel_1, WirelessTypes::chType_fullDifferential);	//full diff
		m_channels.emplace_back(2, WirelessChannel::channel_2, WirelessTypes::chType_fullDifferential);	//full diff
		m_channels.emplace_back(3, WirelessChannel::channel_3, WirelessTypes::chType_fullDifferential);	//full diff
		m_channels.emplace_back(4, WirelessChannel::channel_4, WirelessTypes::chType_fullDifferential);	//full diff
		m_channels.emplace_back(5, WirelessChannel::channel_5, WirelessTypes::chType_voltage);			//voltage 
		m_channels.emplace_back(6, WirelessChannel::channel_6, WirelessTypes::chType_voltage);			//voltage 
		m_channels.emplace_back(7, WirelessChannel::channel_7, WirelessTypes::chType_voltage);			//voltage 
		m_channels.emplace_back(8, WirelessChannel::channel_8, WirelessTypes::chType_temperature);		//temp


		//Channel Groups
		static const ChannelMask DIFFERENTIAL_1(BOOST_BINARY(00000011));	//ch1 + 2
		static const ChannelMask DIFFERENTIAL_2(BOOST_BINARY(00001100));	//ch3 + 4

		m_channelGroups.emplace_back(DIFFERENTIAL_1, "Differential Group 1",
									 ChannelGroup::SettingsMap{
										 {WirelessTypes::chSetting_hardwareGain, NodeEepromMap::HW_GAIN_1}}
		);

		m_channelGroups.emplace_back(DIFFERENTIAL_2, "Differential Group 2",
									 ChannelGroup::SettingsMap{
										 {WirelessTypes::chSetting_hardwareGain, NodeEepromMap::HW_GAIN_2}}
		);

		addCalCoeffChannelGroup(1, NodeEepromMap::CH_ACTION_SLOPE_1, NodeEepromMap::CH_ACTION_ID_1);
		addCalCoeffChannelGroup(2, NodeEepromMap::CH_ACTION_SLOPE_2, NodeEepromMap::CH_ACTION_ID_2);
		addCalCoeffChannelGroup(3, NodeEepromMap::CH_ACTION_SLOPE_3, NodeEepromMap::CH_ACTION_ID_3);
		addCalCoeffChannelGroup(4, NodeEepromMap::CH_ACTION_SLOPE_4, NodeEepromMap::CH_ACTION_ID_4);
		addCalCoeffChannelGroup(5, NodeEepromMap::CH_ACTION_SLOPE_5, NodeEepromMap::CH_ACTION_ID_5);
		addCalCoeffChannelGroup(6, NodeEepromMap::CH_ACTION_SLOPE_6, NodeEepromMap::CH_ACTION_ID_6);
		addCalCoeffChannelGroup(7, NodeEepromMap::CH_ACTION_SLOPE_7, NodeEepromMap::CH_ACTION_ID_7);
		addCalCoeffChannelGroup(8, NodeEepromMap::CH_ACTION_SLOPE_8, NodeEepromMap::CH_ACTION_ID_8);
	}

	const WirelessTypes::WirelessSampleRates NodeFeatures_vlink_legacy::sampleRates(WirelessTypes::SamplingMode samplingMode) const
	{
		//the list of sample rates varies for each sampling mode
		switch(samplingMode)
		{
		case WirelessTypes::samplingMode_nonSync:
		case WirelessTypes::samplingMode_sync:
			return AvailableSampleRates::continuous;
		
		case WirelessTypes::samplingMode_syncBurst:
			return AvailableSampleRates::burst;

		case WirelessTypes::samplingMode_armedDatalog:
			return AvailableSampleRates::armedDatalog;

		default:
			throw Error("Invalid SamplingMode");
		}
	}
}