NDSummary.OnToolTipsLoaded("CClass:MipDataPoint",{2562:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2562\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipDataPoint</div></div></div><div class=\"TTSummary\">Represents a single Inertial Data Point (Extends from DataPoint)</div></div>",2564:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2564\" class=\"NDPrototype NoParameterForm\">MipDataPoint()</div><div class=\"TTSummary\">Creates a MipDataPoint object with default, unknown, values</div></div>",2565:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2565\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipDataPoint(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelField&nbsp;</td><td class=\"PName last\">field,</td></tr><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelQualifier&nbsp;</td><td class=\"PName last\">qualifier,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">ValueType&nbsp;</td><td class=\"PName last\">storedAsType,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">anyType&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a MipDataPoint object</div></div>",2566:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2566\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipDataPoint(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelField&nbsp;</td><td class=\"PName last\">field,</td></tr><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelQualifier&nbsp;</td><td class=\"PName last\">qualifier,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">ValueType&nbsp;</td><td class=\"PName last\">storedAsType,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">anyType&nbsp;</td><td class=\"PName last\">value,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">valid</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a MipDataPoint object with a valid flag that describes the point</div></div>",2568:"<div class=\"NDToolTip TVariable LC\"><div class=\"TTSummary\">The MipTypes::ChannelField of the data point.</div></div>",2569:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2569\" class=\"NDPrototype NoParameterForm\">MipTypes::ChannelQualifier m_qualifier</div><div class=\"TTSummary\">The MipTypes::ChannelQualifier of the data point.</div></div>",2570:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2570\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_hasValidFlag</div><div class=\"TTSummary\">Whether the data point was transmitted with a valid flag.&nbsp; If the point wasn\'t transmitted with a flag, m_valid will be set to true.</div></div>",2571:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2571\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_valid</div><div class=\"TTSummary\">Whether the data point is valid(true) or invalid(false).</div></div>",2573:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2573\" class=\"NDPrototype NoParameterForm\">MipTypes::ChannelField field() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Channel Field that describes the full MIP &quot;Field&quot; that the data point came in.&nbsp; This is a combination of a MIP &quot;Descriptor ID&quot;, and a MIP &quot;Field ID&quot;.</div></div>",2574:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2574\" class=\"NDPrototype NoParameterForm\">MipTypes::ChannelQualifier qualifier() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Channel Qualifier that describes the specific channel for the data point.&nbsp; This, combined with the MipTypes::ChannelField, is a fully unique identifier for the channel.</div></div>",2575:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2575\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasValidFlag() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether the data point had a valid flag transmitted in the data packet.&nbsp; Note: if hasValidFlag returns false, valid will always return true.</div></div>",2576:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2576\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> valid() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether the data point is valid(true) or invalid(false).&nbsp; Note: if a data point was not transmitted with a flag representing its validity, this will still return true. To determine if the data point had a flag in the data packet, use hasValidFlag.</div></div>",2577:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2577\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> channelName() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the name of the channel.&nbsp; This is the universal channel name that should be used for uploading to SensorCloud.</div></div>",2579:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a vector of MipDataPoint objects</div></div>"});