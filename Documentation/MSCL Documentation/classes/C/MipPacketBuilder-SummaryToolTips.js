NDSummary.OnToolTipsLoaded("CClass:MipPacketBuilder",{2364:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2364\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipPacketBuilder</div></div></div><div class=\"TTSummary\">A helper class to make it simple to create Inertial Packets</div></div>",2366:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2366\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipPacketBuilder(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName last\">descriptorSet,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipDataField&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">field</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a MipPacketBuilder object</div></div>",2368:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2368\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> m_descriptorSet</div><div class=\"TTSummary\">The MIP Descriptor Set for the packet</div></div>",2369:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2369\" class=\"NDPrototype NoParameterForm\">std::vector&lt;MipDataField&gt; m_fields</div><div class=\"TTSummary\">The vector of MipDataFields that are in the Inertial Packet</div></div>",2371:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2371\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> addField(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipDataField&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">field</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds a field to the vector of fields for this packet</div></div>",2372:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2372\" class=\"NDPrototype NoParameterForm\">ByteStream buildPacket()</div><div class=\"TTSummary\">Takes the given packet information, including all fields, and builds an Inertial Packet as a ByteStream</div></div>"});