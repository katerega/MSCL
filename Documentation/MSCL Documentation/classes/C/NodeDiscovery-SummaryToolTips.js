NDSummary.OnToolTipsLoaded("CClass:NodeDiscovery",{3632:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3632\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeDiscovery</div></div></div><div class=\"TTSummary\">Represents 1 node discovery, which is created when a Wireless Node Discovery packet is sent from a Node.&nbsp; Note: There are multiple versions of Node Discovery packets which have been developed over time.&nbsp; Each version has added more useful information. If an earlier version of the Node Discovery packet is heard, this NodeDiscovery object will have some information be invalid (set to default values).</div></div>",3634:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3634\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> NodeDiscovery(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a NodeDiscovery object from a WirelessPacket</div></div>",3636:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3636\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_nodeAddress</div><div class=\"TTSummary\">The node address of the node that sent the Node Discovery packet.</div></div>",3637:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3637\" class=\"NDPrototype NoParameterForm\">WirelessTypes::Frequency m_radioChannel</div><div class=\"TTSummary\">The radio channel (WirelessTypes::Frequency) that the node was on that sent the Node Discovery packet.</div></div>",3638:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3638\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_panId</div><div class=\"TTSummary\">The PAN id of the Node that send the Node Discovery packet.</div></div>",3639:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3639\" class=\"NDPrototype NoParameterForm\">WirelessModels::NodeModel m_model</div><div class=\"TTSummary\">The model of the node that sent the Node Discovery packet.</div></div>",3640:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3640\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_serialNumber</div><div class=\"TTSummary\">The serial number of the node that sent the Node Discovery packet.</div></div>",3641:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3641\" class=\"NDPrototype NoParameterForm\">Version m_firmwareVersion</div><div class=\"TTSummary\">The firmware version of the node that sent the Node Discovery packet.</div></div>",3642:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3642\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DefaultMode m_defaultMode</div><div class=\"TTSummary\">The WirelessTypes::DefaultMode of the node that sent the Node Discovery packet.</div></div>",3643:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3643\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_bitResult</div><div class=\"TTSummary\">The Built In Test result that was sent in the packet.</div></div>",3644:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3644\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> m_baseRssi</div><div class=\"TTSummary\">The Base Station RSSI that identifies the received signal strength at the Base Station.</div></div>",3645:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3645\" class=\"NDPrototype NoParameterForm\">Timestamp m_timestamp</div><div class=\"TTSummary\">The Timestamp of when the NodeDiscovery packet was received by MSCL.</div></div>",3647:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3647\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> initFromPacket_v1(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Initializes the NodeDiscovery object from a version 1 Node Discovery packet.</div></div>",3648:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3648\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> initFromPacket_v2(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Initializes the NodeDiscovery object from a version 2 Node Discovery packet.</div></div>",3649:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3649\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> initFromPacket_v3(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Initializes the NodeDiscovery object from a version 3 Node Discovery packet.</div></div>",3650:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3650\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> initFromPacket_v4(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Initializes the NodeDiscovery object from a version 4 Node Discovery packet.</div></div>",3651:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3651\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> nodeAddress() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node address of the discovered Node.</div></div>",3652:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3652\" class=\"NDPrototype NoParameterForm\">WirelessTypes::Frequency frequency() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::Frequency of the discovered Node.</div></div>",3653:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3653\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> panId() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the PAN Id of the discovered Node.&nbsp; Note: Returns 0 if not present in the packet.</div></div>",3654:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3654\" class=\"NDPrototype NoParameterForm\">WirelessModels::NodeModel model() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the model of the discovered Node.</div></div>",3655:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3655\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> serialNumber() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the serial number of the discovered Node.&nbsp; Note: Returns 0 if not present in the packet.</div></div>",3656:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3656\" class=\"NDPrototype NoParameterForm\">Version firmwareVersion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the firmware version of the discovered Node.&nbsp; Note: Returns 0.0.0 if not present in the packet.</div></div>",3657:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3657\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DefaultMode defaultMode()</div><div class=\"TTSummary\">Gets the WirelessTypes::DefaultMode of the discovered Node.&nbsp; Note: Returns 999 if not present in the packet.</div></div>",3658:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3658\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> builtInTestResult()</div><div class=\"TTSummary\">Gets the result bitmask of the built in test.</div></div>",3659:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3659\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> baseRssi() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the base station rssi of the discovered Node.</div></div>",3660:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3660\" class=\"NDPrototype NoParameterForm\">Timestamp timestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Timestamp of when the NodeDiscovery packet was received by MSCL.</div></div>",3662:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">typedef for a vector of NodeDiscovery objects</div></div>"});