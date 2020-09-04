NDSummary.OnToolTipsLoaded("CClass:AdvancedLowPassFilterData",{1811:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains the data for the InertialNode::setAdvancedLowPassFilterSettings API call.</div></div>",1813:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enum for the different data descriptors.</div></div>",1815:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1815\" class=\"NDPrototype NoParameterForm\">AdvancedLowPassFilterData() : dataDescriptor(mscl::MipTypes::ChannelField::CH_FIELD_SENSOR_SCALED_ACCEL_VEC), manualFilterBandwidthConfig(SET_TO_HALF_REPORTING_RATE), applyLowPassFilter(<span class=\"SHKeyword\">true</span>), cutoffFrequency(<span class=\"SHNumber\">0</span>)</div></div>",1816:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1816\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">AdvancedLowPassFilterData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">mscl::MipTypes::</td><td class=\"PType\">ChannelField&nbsp;</td><td class=\"PName last\">descriptor</td></tr></table></td><td class=\"PAfterParameters\">) : dataDescriptor(descriptor), manualFilterBandwidthConfig(SET_TO_HALF_REPORTING_RATE), applyLowPassFilter(<span class=\"SHKeyword\">true</span>), cutoffFrequency(<span class=\"SHNumber\">0</span>)</td></tr></table></div></div>",1818:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1818\" class=\"NDPrototype NoParameterForm\">mscl::MipTypes::ChannelField dataDescriptor</div><div class=\"TTSummary\">the data descriptor these settings apply to</div></div>",1819:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1819\" class=\"NDPrototype NoParameterForm\">ManualFilterBandwidthConfig manualFilterBandwidthConfig</div><div class=\"TTSummary\">The ManualFilterBandwidthConfig to use.</div></div>",1820:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1820\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> applyLowPassFilter</div><div class=\"TTSummary\">applies low-pass filter if set to true.</div></div>",1821:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1821\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> cutoffFrequency</div><div class=\"TTSummary\">Sets the cutoff frequency, only if manualFilterBandwidthConfig == USER_SPECIFIED_CUTOFF_FREQ</div></div>",1823:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1823\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static uint8</span> getDataDescriptorForCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">mscl::MipTypes::</td><td class=\"PType\">ChannelField&nbsp;</td><td class=\"PName last\">descriptor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Formats the given MipTypes::ChannelField data descriptor to be written to a ByteStream command.</div></div>",1824:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1824\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> mscl::MipTypes::ChannelField getDataDescriptorFromUint8(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">descriptor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the MipTypes::ChannelField data descriptor represented by the given uint8 descriptor.</div></div>",1826:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A vector of AdvancedLowPassFilterData objects</div></div>"});