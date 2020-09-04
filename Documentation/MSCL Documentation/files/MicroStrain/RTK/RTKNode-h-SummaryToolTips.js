NDSummary.OnToolTipsLoaded("File:MicroStrain/RTK/RTKNode.h",{2638:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2638\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">RTKNode</div></div></div><div class=\"TTSummary\">A class representing a MicroStrain RTK Node</div></div>",2640:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2640\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> RTKNode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Connection&nbsp;</td><td class=\"PName last\">connection</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an RTKNode object.</div></div>",2642:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2642\" class=\"NDPrototype NoParameterForm\">std::shared_ptr&lt;MipNode_Impl&gt; m_impl</div><div class=\"TTSummary\">The MipNode_Impl class that contains all the implementation logic for the RTKNode class.</div></div>",2644:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2644\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> GenericMipCmdResponse doCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">GenericMipCommand::</td><td class=\"PType\">Response&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">response,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ByteStream&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">command,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td></td><td class=\"PName\">verifySupported&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Performs a generic Mip Command, sending the command bytes and waiting for the response.</div></div>",2645:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2645\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> Bytes doCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">descriptorSet,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">cmdDescriptor,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">fieldData,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td></td><td class=\"PName\">ackNackResponse,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td></td><td class=\"PName\">dataResponse,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">responseDataDescriptor&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Note: This is an ADVANCED COMMAND. Most users will not need to use this.&nbsp; Allows sending custom data as a MIP packet to the device, and receiving custom data as a response.</div></div>",2646:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2646\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::<span class=\"SHKeyword\">string</span> deviceName(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">serial</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static function for creating the universal sensor name that should be used for SensorCloud.</div></div>",2647:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2647\" class=\"NDPrototype NoParameterForm\">Connection&amp; connection()</div><div class=\"TTSummary\">Gets the Connection object that this RTKNode is using.</div></div>",2648:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2648\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> MipNodeFeatures&amp; features()</div><div class=\"TTSummary\">Gets a reference to the MipNodeFeatures for this device.&nbsp; Note: This will be invalid when the RTKNode is destroyed.</div></div>",2649:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2649\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Timestamp&amp; lastCommunicationTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Timestamp for the last time MSCL communicated with the RTKNode.</div></div>",2650:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2650\" class=\"NDPrototype NoParameterForm\">DeviceState lastDeviceState() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the last known DeviceState for the InertialNode.&nbsp; This device state is updated by MSCL when data packets are received, as well as when operations are performed, such as setting a Node to idle.</div></div>",2651:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2651\" class=\"NDPrototype NoParameterForm\">Version firmwareVersion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the firmware Version of the RTKNode.</div></div>",2652:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2652\" class=\"NDPrototype NoParameterForm\">RTKModels::NodeModel model() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the RTKModels::NodeModel of the RTKNode.</div></div>",2653:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2653\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> modelName() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the model name of the RTKNode (ie. &quot;3DM-GX3-45&quot;).</div></div>",2654:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2654\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> modelNumber() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the model number of the RTKNode (ie. &quot;6225-4220&quot;).</div></div>",2655:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2655\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> serialNumber() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the serial number of the RTKNode (ie. &quot;6225-01319&quot;).</div></div>",2656:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2656\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> lotNumber() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the lot number of the RTKNode (ie. &quot;I042Y&quot;).</div></div>",2657:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2657\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> deviceOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the device options of the RTKNode (ie. &quot;5g, 300d/s&quot;).</div></div>",2658:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2658\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipDataPackets getDataPackets(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">timeout&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">maxPackets&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets up to the requested amount of data packets that have been collected.</div></div>",2659:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2659\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> totalPackets()</div><div class=\"TTSummary\">Gets the total number of data packets that are currently in the buffer.</div></div>",2660:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2660\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> timeout(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">timeout</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the timeout to use when waiting for responses from commands.</div></div>",2661:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2661\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> timeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the timeout to use when waiting for responses from commands.</div></div>",2662:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2662\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> name()</div><div class=\"TTSummary\">Gets the name of the RTKNode. This is the universal sensor name that should be used for uploading to SensorCloud.&nbsp; This is the same as calling RTKNode::deviceName.</div></div>",2663:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2663\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> ping()</div><div class=\"TTSummary\">Pings the Node to check for communication.&nbsp; Sends the &quot;Ping&quot; command to the device.</div></div>",2664:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2664\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> setToIdle()</div><div class=\"TTSummary\">Suspends streaming (if enabled) or wakes the device from sleep (if sleeping), putting the device in an idle mode.&nbsp; After this command is used, the resume command may be used to put the Node back into the mode it was previously in before setToIdle was called.</div></div>",2665:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2665\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> cyclePower()</div><div class=\"TTSummary\">Performs the &quot;Device Reset&quot; command.&nbsp; Note: This is essentially the same as unplugging and plugging the device back in.</div></div>",2666:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2666\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> resume()</div><div class=\"TTSummary\">Places the Node back in the mode it was in before issuing the setToIdle command.&nbsp; If the setToIdle command was not issued, then the device is placed in default mode.</div></div>",2667:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2667\" class=\"NDPrototype NoParameterForm\">RTKDeviceStatusFlags getDeviceStatusFlags() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the status flags for the RTK device.</div></div>"});