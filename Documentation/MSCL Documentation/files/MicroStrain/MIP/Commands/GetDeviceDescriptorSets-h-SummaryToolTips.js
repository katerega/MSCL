NDSummary.OnToolTipsLoaded("File:MicroStrain/MIP/Commands/GetDeviceDescriptorSets.h",{1518:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1518\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">GetDeviceDescriptorSets</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial &quot;Get Device Descriptor Sets&quot; command</div></div>",1524:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1524\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand()</div><div class=\"TTSummary\">Builds the command packet</div></div>",1525:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1525\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Response</div></div></div><div class=\"TTSummary\">Handles the response to the GetDeviceDescriptorSets command</div></div>",1527:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1527\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Response object</div></div>",1528:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1528\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> match_data(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipDataField&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">field</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Attempts to match an MipDataField to the expected data field response.</div></div>",1529:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1529\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> parseResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">vector&lt;<span class=\"SHKeyword\">uint16</span>&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">descriptors</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Parses a successfully matched response for the GetDeviceDescriptorSets command.</div></div>"});