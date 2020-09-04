NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/NodeDiscovery.h",{7300:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7300\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeDiscovery</div></div></div><div class=\"TTSummary\">Represents 1 node discovery, which is created when a Wireless Node Discovery packet is sent from a Node.&nbsp; Note: There are multiple versions of Node Discovery packets which have been developed over time.&nbsp; Each version has added more useful information. If an earlier version of the Node Discovery packet is heard, this NodeDiscovery object will have some information be invalid (set to default values).</div></div>",7302:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7302\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> NodeDiscovery(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a NodeDiscovery object from a WirelessPacket</div></div>",7304:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7304\" class=\"NDPrototype NoParameterForm\">WirelessTypes::EepromMap m_eepromMap</div><div class=\"TTSummary\">Contains an eeprom map to use for updating a WirelessNode\'s eeprom cache with the Node Discovery info, if desired.</div></div>",7305:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7305\" class=\"NDPrototype NoParameterForm\">NodeAddress m_nodeAddress</div><div class=\"TTSummary\">The node address of the node that sent the Node Discovery packet.</div></div>",7306:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7306\" class=\"NDPrototype NoParameterForm\">WirelessTypes::Frequency m_radioChannel</div><div class=\"TTSummary\">The radio channel (WirelessTypes::Frequency) that the node was on that sent the Node Discovery packet.</div></div>",7307:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7307\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_panId</div><div class=\"TTSummary\">The PAN id of the Node that send the Node Discovery packet.</div></div>",7308:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7308\" class=\"NDPrototype NoParameterForm\">WirelessModels::NodeModel m_model</div><div class=\"TTSummary\">The model of the node that sent the Node Discovery packet.</div></div>",7309:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7309\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_serialNumber</div><div class=\"TTSummary\">The serial number of the node that sent the Node Discovery packet.</div></div>",7310:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7310\" class=\"NDPrototype NoParameterForm\">Version m_firmwareVersion</div><div class=\"TTSummary\">The firmware version of the node that sent the Node Discovery packet.</div></div>",7311:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7311\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DefaultMode m_defaultMode</div><div class=\"TTSummary\">The WirelessTypes::DefaultMode of the node that sent the Node Discovery packet.</div></div>",7312:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7312\" class=\"NDPrototype NoParameterForm\">WirelessTypes::CommProtocol m_commProtocol</div><div class=\"TTSummary\">The WirelessTypes::CommProtocol of the node that sent the Node Discovery packet.</div></div>",7313:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7313\" class=\"NDPrototype NoParameterForm\">Version m_asppVersionLxrs</div><div class=\"TTSummary\">The ASPP Version of the node when in LXRS mode.</div></div>",7314:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7314\" class=\"NDPrototype NoParameterForm\">Version m_asppVersionLxrsPlus</div><div class=\"TTSummary\">The ASPP Version of the node when in LXRS+ mode.</div></div>",7315:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7315\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_bitResult</div><div class=\"TTSummary\">The Built In Test result that was sent in the packet.</div></div>",7316:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7316\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> m_baseRssi</div><div class=\"TTSummary\">The Base Station RSSI that identifies the received signal strength at the Base Station.</div></div>",7317:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7317\" class=\"NDPrototype NoParameterForm\">Timestamp m_timestamp</div><div class=\"TTSummary\">The Timestamp of when the NodeDiscovery packet was received by MSCL.</div></div>",7319:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7319\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> initFromPacket_v1(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Initializes the NodeDiscovery object from a version 1 Node Discovery packet.</div></div>",7320:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7320\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> initFromPacket_v2(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Initializes the NodeDiscovery object from a version 2 Node Discovery packet.</div></div>",7321:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7321\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> initFromPacket_v3(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Initializes the NodeDiscovery object from a version 3 Node Discovery packet.</div></div>",7322:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7322\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> initFromPacket_v4(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Initializes the NodeDiscovery object from a version 4 Node Discovery packet.</div></div>",7323:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7323\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> initFromPacket_v5(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Initializes the NodeDiscovery object from a version 5 Node Discovery packet.</div></div>",7324:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7324\" class=\"NDPrototype NoParameterForm\">NodeAddress nodeAddress() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node address of the discovered Node.</div></div>",7325:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7325\" class=\"NDPrototype NoParameterForm\">WirelessTypes::Frequency frequency() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::Frequency of the discovered Node.</div></div>",7326:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7326\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> panId() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the PAN Id of the discovered Node.&nbsp; Note: Returns 0 if not present in the packet.</div></div>",7327:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7327\" class=\"NDPrototype NoParameterForm\">WirelessModels::NodeModel model() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the model of the discovered Node.</div></div>",7328:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7328\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> serialNumber() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the serial number of the discovered Node.&nbsp; Note: Returns 0 if not present in the packet.</div></div>",7329:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7329\" class=\"NDPrototype NoParameterForm\">Version firmwareVersion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the firmware version of the discovered Node.&nbsp; Note: Returns 0.0.0 if not present in the packet.</div></div>",7330:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7330\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DefaultMode defaultMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::DefaultMode of the discovered Node.&nbsp; Note: Returns 999 if not present in the packet.</div></div>",7331:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7331\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> builtInTestResult() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the result bitmask of the built in test.</div></div>",7332:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7332\" class=\"NDPrototype NoParameterForm\">WirelessTypes::CommProtocol communicationProtocol() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::CommProtocol of the discovered Node.</div></div>",7333:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7333\" class=\"NDPrototype NoParameterForm\">Version asppVersion_lxrs() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ASPP protocol Version of the Node when it is in LXRS RadioMode.</div></div>",7334:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7334\" class=\"NDPrototype NoParameterForm\">Version asppVersion_lxrsPlus() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ASPP protocol Version of the Node when it is in LXRS+ RadioMode.</div></div>",7335:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7335\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> baseRssi() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the base station rssi of the discovered Node.</div></div>",7336:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7336\" class=\"NDPrototype NoParameterForm\">Timestamp timestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Timestamp of when the NodeDiscovery packet was received by MSCL.</div></div>",7338:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">typedef for a vector of NodeDiscovery objects</div></div>"});