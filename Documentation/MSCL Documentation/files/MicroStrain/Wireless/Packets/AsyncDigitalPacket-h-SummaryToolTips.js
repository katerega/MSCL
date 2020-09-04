NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Packets/AsyncDigitalPacket.h",{5784:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5784\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AsyncDigitalPacket</div></div></div><div class=\"TTSummary\">A WirelessDataPacket derived class representing an Asynchronouse Digital packet</div></div>",5793:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5793\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> AsyncDigitalPacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a AsyncDigitalPacket from the passed in WirelessPacket</div></div>",5794:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5794\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> parseSweeps()</div><div class=\"TTSummary\">Parses the passed in WirelessPacket for all the sweep information and adds a sweep to the sweeps container</div></div>",5795:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5795\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> WirelessChannel::ChannelId wirelessChannelFromChNum(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">channelNum</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Converts a digital channel number to a WirelessChannel::ChannelId</div></div>",5796:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5796\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> integrityCheck(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Verifies that the packet is a well formed Async Digital packet</div></div>",5797:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5797\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> UniqueWirelessPacketId getUniqueId(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the unique Id of the WirelessPacket passed in</div></div>"});