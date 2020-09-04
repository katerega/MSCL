NDSummary.OnToolTipsLoaded("CClass:MipParser",{2493:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2493\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipParser</div></div></div><div class=\"TTSummary\">Parsers all MIP data and stores it in a corresponding container</div></div>",2495:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2495\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipParser(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">MipPacketCollector&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">packetCollector,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td></td><td class=\"PName last\">responseCollector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructor for MipParser</div></div>",2497:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2497\" class=\"NDPrototype NoParameterForm\">MipPacketCollector* m_packetCollector</div><div class=\"TTSummary\">The MipPacketCollector associated with this parser and it\'s parent device</div></div>",2498:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2498\" class=\"NDPrototype NoParameterForm\">std::weak_ptr&lt;ResponseCollector&gt; m_responseCollector</div><div class=\"TTSummary\">The ResponseCollector associated with this parser and it\'s parent device</div></div>",2500:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2500\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> processPacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Takes an MipPacket, adds it to the data container if it is a data packet, or adds it to the appropriate handler depending on the packet type</div></div>",2501:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2501\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> findMatchingResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Takes an MipPacket and checks if the packet collector has any responses it is waiting on.&nbsp; If it does, and the packet matches the expected response, the packet is &quot;given&quot; to the packet collector.</div></div>",2502:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2502\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipDataFields parseFields(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parses the MipDataFields out of the MipPacket and returns them in a container.</div></div>",2503:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2503\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipParseResult parseAsPacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data,</td></tr><tr><td class=\"PType first\">MipPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Takes a DataBuffer that has had its read position moved to the start of a packet and verifies that the bytes form a valid MIP packet</div></div>",2504:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2504\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> findPacketInBytes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks for packets after the current bytes buffer\'s read position (starting at the next byte, not the current one).&nbsp; If a packet is found, the packet is processed and the byte buffer\'s read position is moved.&nbsp; If a packet is not found, nothing changes in the byte buffer</div></div>",2505:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2505\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> parse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Takes a DataBuffer and finds the next MIP Packet, or the next command response that is expected by the base station.</div></div>"});