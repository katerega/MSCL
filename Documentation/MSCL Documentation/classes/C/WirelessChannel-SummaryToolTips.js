NDSummary.OnToolTipsLoaded("CClass:WirelessChannel",{6113:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6113\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessChannel</div></div></div><div class=\"TTSummary\">Represents a channel on a WirelessNode. This can be used to gain information about the channel, view current settings that are applied, and update settings on the Node.</div></div>",6361:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6361\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessChannel(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName last\">chNumber,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessChannel::</td><td class=\"PType\">ChannelId&nbsp;</td><td></td><td class=\"PName last\">id,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">ChannelType&nbsp;</td><td></td><td class=\"PName last\">type,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a WirelessChannel object.</div></div>",6362:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6362\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessChannel(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName last\">chNumber,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessChannel::</td><td class=\"PType\">ChannelId&nbsp;</td><td></td><td class=\"PName last\">id,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">ChannelType&nbsp;</td><td></td><td class=\"PName last\">type,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName last\">adcResolution</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a WirelessChannel object.</div></div>",6364:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6364\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> m_chNumber</div><div class=\"TTSummary\">The channel number (ch1 = 1) of the channel.</div></div>",6365:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6365\" class=\"NDPrototype NoParameterForm\">WirelessChannel::ChannelId m_id</div><div class=\"TTSummary\">The WirelessChannel::ChannelId of the channel.</div></div>",6366:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6366\" class=\"NDPrototype NoParameterForm\">WirelessTypes::ChannelType m_type</div><div class=\"TTSummary\">The WirelessTypes::ChannelType of the channel.</div></div>",6367:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6367\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> m_description</div><div class=\"TTSummary\">The description of the channel.</div></div>",6368:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6368\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> m_adcResolution</div><div class=\"TTSummary\">The resolution of the A/D Converter for this channel.</div></div>",6370:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6370\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> channelNumber() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the channel number of this channel on the Node.</div></div>",6371:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6371\" class=\"NDPrototype NoParameterForm\">WirelessChannel::ChannelId id() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessChannel::ChannelId of this channel.</div></div>",6372:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6372\" class=\"NDPrototype NoParameterForm\">WirelessTypes::ChannelType type() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::ChannelType of this channel.</div></div>",6373:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6373\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> description() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the description of this channel (ex. &quot;Acceleration X (ch1)&quot; or &quot;CJC Temperature (ch8)&quot;).</div></div>",6374:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6374\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> adcResolution() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ADC Resolution of this channel (Ex: 18 for 18-bit).</div></div>",6375:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6375\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> adcMaxValue() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the maximum value output from the ADC for this channel (Ex: 2^18 for 18-bit).</div></div>",6376:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6376\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> name() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the name of this channel.&nbsp; This is the universal name that should be used for uploading to SensorCloud.</div></div>",6377:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6377\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::<span class=\"SHKeyword\">string</span> channelName(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessChannel::</td><td class=\"PType\">ChannelId&nbsp;</td><td class=\"PName last\">channelId</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the name of the channel.&nbsp; This is the universal name that should be used for uploading to SensorCloud.</div></div>",6379:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A typedef for a vector of WirelessChannel objects.</div></div>",6380:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A typedef for a map of WirelessChannel to float values, used when polling a Wireless Node.</div></div>"});