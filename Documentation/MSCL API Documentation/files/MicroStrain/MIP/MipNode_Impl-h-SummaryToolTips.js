NDSummary.OnToolTipsLoaded("File:MicroStrain/MIP/MipNode_Impl.h",{190:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype190\" class=\"NDPrototype NoParameterForm\">FilterInitializationValues getInitialFilterConfiguration() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the initial filter configuration values.</div></div>",191:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype191\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setInitialFilterConfiguration(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">FilterInitializationValues&nbsp;</td><td class=\"PName last\">filterConfig</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the initial filter configuration values.&nbsp; Note: Changes from this command will only be applied if the filter is in the Initialization state (not Running) or on filter reset.</div></div>",192:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype192\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setAdaptiveMeasurement(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td></td><td class=\"PName last\">cmd,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">AdaptiveMeasurementData&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the error adaptive measurement settings for the specified command.</div></div>",193:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype193\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">AdaptiveMeasurementData getAdaptiveMeasurement(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">cmd</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the error adaptive measurement settings for the specified command.</div></div>",194:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype194\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setSignalConditioningSettings(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SignalConditioningValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the signal conditioning settings for the node.</div></div>",195:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype195\" class=\"NDPrototype NoParameterForm\">SignalConditioningValues getSignalConditioningSettings() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the signal conditioning settings for the node.</div></div>",196:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype196\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setGeometricVectors(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td></td><td class=\"PName last\">cmd,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GeometricVectors&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the GeometricVector data for the specified command.</div></div>",197:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype197\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">GeometricVectors getGeometricVectors(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">cmd</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the GeometricVector data for the specified command.</div></div>",198:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype198\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setUint8s(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td></td><td class=\"PName last\">cmd,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">vector&lt;<span class=\"SHKeyword\">uint8</span>&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the uint8 data for the specified command.</div></div>",199:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype199\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">std::vector&lt;<span class=\"SHKeyword\">uint8</span>&gt; getUint8s(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">cmd</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the uint8 data for the specified command.</div></div>",200:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype200\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">std::vector&lt;<span class=\"SHKeyword\">uint8</span>&gt; getUint8s(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td></td><td class=\"PName last\">cmd,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">vector&lt;<span class=\"SHKeyword\">uint8</span>&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">addlParams</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the uint8 data for the specified command.</div></div>",201:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype201\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setUint16s(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td></td><td class=\"PName last\">cmd,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">vector&lt;<span class=\"SHKeyword\">uint16</span>&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the uint16 data for the specified command.</div></div>",202:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype202\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">std::vector&lt;<span class=\"SHKeyword\">uint16</span>&gt; getUint16s(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">cmd</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the uint16 data for the specified command.</div></div>",203:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype203\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">std::vector&lt;<span class=\"SHKeyword\">uint16</span>&gt; getUint16s(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td></td><td class=\"PName last\">cmd,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">vector&lt;<span class=\"SHKeyword\">uint16</span>&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">addlParams</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the uint16 data for the specified command.</div></div>",204:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype204\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setFloats(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td></td><td class=\"PName last\">cmd,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">vector&lt;<span class=\"SHKeyword\">float</span>&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the float data for the specified command.</div></div>",205:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype205\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">std::vector&lt;<span class=\"SHKeyword\">float</span>&gt; getFloats(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">cmd</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the float data for the specified command.</div></div>",206:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype206\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setMatrix3x3s(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td></td><td class=\"PName last\">cmd,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Matrix_3x3s&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Matrix_3x3 data for the specified command.</div></div>",207:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype207\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Matrix_3x3s getMatrix3x3s(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">cmd</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the Matrix_3x3 data for the specified command.</div></div>",208:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype208\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setFixedReferencePosition(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">FixedReferencePositionData&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the FixedReferencePositionData data for the specified command.</div></div>",209:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype209\" class=\"NDPrototype NoParameterForm\">FixedReferencePositionData getFixedReferencePosition() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the FixedReferencePositionData data for the specified command.</div></div>",210:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype210\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setDeviceTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">nanoseconds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Seeds the device time with a specific time.</div></div>",211:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype211\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipFieldValues <span class=\"SHKeyword\">get</span>(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">cmdId</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">sends the specified command with the Read Current Settings function selector.</div></div>",212:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype212\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipFieldValues <span class=\"SHKeyword\">get</span>(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">cmdId,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PName last\">specifier</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">sends the specified command with the Read Current Settings function selector.</div></div>",213:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype213\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void set</span>(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">cmdId,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PName last\">values</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">sends the specified command with the Apply New Settings function selector.</div></div>",214:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype214\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> saveAsStartup(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">cmdId</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">sends the specified command with the Save as Startup Settings function selector.</div></div>",215:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype215\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> saveAsStartup(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">cmdId,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PName last\">specifier</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">sends the specified command with the Save as Startup Settings function selector.</div></div>"});