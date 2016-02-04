NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/AutoCal.h",{1647:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1647\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AutoCal</div></div></div><div class=\"TTSummary\">Contains logic for the AutoCal Node command.</div></div>",1649:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1649\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_shmLink(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the AutoCal command packet for the SHM-Link node.</div></div>",1650:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1650\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Response</div></div></div><div class=\"TTSummary\">Handles the response to the LongPing Node command</div></div>",1652:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1652\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td></td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessModels::</td><td class=\"PType\">NodeModel&nbsp;</td><td></td><td class=\"PName last\">model,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Version&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">fwVersion,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td></td><td class=\"PName last\">collector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a AutoCal Response object</div></div>",1654:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1654\" class=\"NDPrototype NoParameterForm\">NodeAddress m_nodeAddress</div><div class=\"TTSummary\">The node address to look for in the response.</div></div>",1655:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1655\" class=\"NDPrototype NoParameterForm\">WirelessModels::NodeModel m_model</div><div class=\"TTSummary\">The WirelessModels::NodeModel of the Node we are expecting a response for.</div></div>",1656:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1656\" class=\"NDPrototype NoParameterForm\">Version m_fwVersion</div><div class=\"TTSummary\">The firmware version of the Node we are expecting a response for.</div></div>",1657:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1657\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_calStarted</div><div class=\"TTSummary\">Whether the AutoCal has been successfully started or not (as reported by the Node).</div></div>",1658:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1658\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalCompletionFlag m_completionFlag</div><div class=\"TTSummary\">The &lt;AutoCalCompletionFlag&gt; representing the final autocal status.</div></div>",1659:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1659\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_timeUntilCompletion</div><div class=\"TTSummary\">The amount of time (in seconds) that the autocal operation will take to complete.&nbsp; This value gets reported by the Node before starting the calibration.</div></div>",1660:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1660\" class=\"NDPrototype NoParameterForm\">Bytes m_infoBytes</div><div class=\"TTSummary\">Contains all of the information bytes from the completion response.</div></div>",1662:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1662\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> calStarted() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether the AutoCal operation has started or not.</div></div>",1663:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1663\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> calTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the total time (in seconds) that the Node reported it will take to complete the AutoCal operation.</div></div>",1664:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1664\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalCompletionFlag completionFlag() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalCompletionFlag of the AutoCal operation.</div></div>",1665:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1665\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Bytes&amp; infoBytes() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the information bytes returned from the AutoCal completion packet.</div></div>",1666:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1666\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> match(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Checks if the WirelessPacket passed in matches the expected response pattern\'s bytes.</div></div>",1667:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1667\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> match_nodeReceived(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks if the WirelessPacket passed in matches the &quot;Node Received&quot; packet.</div></div>",1668:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1668\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> match_shmLink(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks if the WirelessPacket matches the SHM-Link AutoCal packet.</div></div>"});