NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/AutoCalResult.h",{3753:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3753\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AutoCalResult</div></div></div><div class=\"TTSummary\">Abstract base class for AutoCal result classes.</div></div>",3755:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3755\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalCompletionFlag completionFlag() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalCompletionFlag of the AutoCal operation result.</div></div>",3756:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3756\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> parse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">autoCalInfo</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Parses the auto cal info bytes sent in the successful response packet.</div></div>",3758:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3758\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalCompletionFlag m_completionFlag</div><div class=\"TTSummary\">The WirelessTypes::AutoCalCompletionFlag of the AutoCal operation.</div></div>",3759:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3759\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AutoCalResult_shmLink</div></div></div><div class=\"TTSummary\">Holds the result information from an autoCal_shmLink command.</div></div>",3761:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3761\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag m_errorFlagCh1</div><div class=\"TTSummary\">The WirelessTypes::AutoCalErrorFlag for the channel 1 strain sensor.</div></div>",3762:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3762\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag m_errorFlagCh2</div><div class=\"TTSummary\">The WirelessTypes::AutoCalErrorFlag for the channel 2 strain sensor.</div></div>",3763:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3763\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag m_errorFlagCh3</div><div class=\"TTSummary\">The WirelessTypes::AutoCalErrorFlag for the channel 3 strain sensor.</div></div>",3764:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3764\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_offsetCh1</div><div class=\"TTSummary\">The offset applied for the channel 1 strain sensor.</div></div>",3765:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3765\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_offsetCh2</div><div class=\"TTSummary\">The offset applied for the channel 2 strain sensor.</div></div>",3766:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3766\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_offsetCh3</div><div class=\"TTSummary\">The offset applied for the channel 3 strain sensor.</div></div>",3767:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3767\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_temperature</div><div class=\"TTSummary\">The temperature at the time of calibration.</div></div>",3769:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3769\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag errorFlagCh1() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalErrorFlag for the channel 1 strain sensor.</div></div>",3770:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3770\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag errorFlagCh2() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalErrorFlag for the channel 2 strain sensor.</div></div>",3771:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3771\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag errorFlagCh3() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalErrorFlag for the channel 3 strain sensor.</div></div>",3772:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3772\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> offsetCh1() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the offset applied for the channel 1 strain sensor.</div></div>",3773:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3773\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> offsetCh2() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the offset applied for the channel 2 strain sensor.</div></div>",3774:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3774\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> offsetCh3() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the offset applied for the channel 3 strain sensor.</div></div>",3775:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3775\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> temperature() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the temperature (in ?C) at the time of the calibration.</div></div>",3776:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3776\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> parse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">autoCalInfo</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">final</span></td></tr></table></div><div class=\"TTSummary\">Parses the auto cal info bytes for the shm-link.</div></div>",3777:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3777\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AutoCalResult_shmLink201</div></div></div><div class=\"TTSummary\">Holds the result information from an autoCal_shmLink201 command.</div></div>",3779:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3779\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag m_errorFlagCh1</div><div class=\"TTSummary\">The WirelessTypes::AutoCalErrorFlag for the channel 1 strain sensor.</div></div>",3780:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3780\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag m_errorFlagCh2</div><div class=\"TTSummary\">The WirelessTypes::AutoCalErrorFlag for the channel 2 strain sensor.</div></div>",3781:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3781\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag m_errorFlagCh3</div><div class=\"TTSummary\">The WirelessTypes::AutoCalErrorFlag for the channel 3 strain sensor.</div></div>",3782:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3782\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_slopeCh1</div><div class=\"TTSummary\">The slope applied for channel 1.</div></div>",3783:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3783\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_offsetCh1</div><div class=\"TTSummary\">The offset applied for channel 1.</div></div>",3784:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3784\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_slopeCh2</div><div class=\"TTSummary\">The slope applied for channel 2.</div></div>",3785:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3785\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_offsetCh2</div><div class=\"TTSummary\">The offset applied for channel 2.</div></div>",3786:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3786\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_slopeCh3</div><div class=\"TTSummary\">The slope applied for channel 3.</div></div>",3787:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3787\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_offsetCh3</div><div class=\"TTSummary\">The offset applied for channel 3.</div></div>",3788:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3788\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_temperature</div><div class=\"TTSummary\">The temperature at the time of calibration.</div></div>",3790:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3790\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag errorFlagCh1() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalErrorFlag for the channel 1 strain sensor.</div></div>",3791:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3791\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag errorFlagCh2() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalErrorFlag for the channel 2 strain sensor.</div></div>",3792:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3792\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag errorFlagCh3() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalErrorFlag for the channel 3 strain sensor.</div></div>",3793:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3793\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> slopeCh1() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the slope applied for channel 1.</div></div>",3794:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3794\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> offsetCh1() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the offset applied for channel 1.</div></div>",3795:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3795\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> slopeCh2() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the slope applied for channel 2.</div></div>",3796:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3796\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> offsetCh2() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the offset applied for channel 2.</div></div>",3797:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3797\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> slopeCh3() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the slope applied for channel 3.</div></div>",3798:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3798\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> offsetCh3() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the offset applied for channel 3.</div></div>",3799:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3799\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> temperature() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the temperature (in ?C) at the time of the calibration.</div></div>",3800:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3800\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> parse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">autoCalInfo</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">final</span></td></tr></table></div><div class=\"TTSummary\">Parses the auto cal info bytes for the shm-link.</div></div>",3801:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3801\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AutoShuntCalResult</div></div></div><div class=\"TTSummary\">Holds the result information from an autoCal_shunt command.</div></div>",3803:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3803\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag m_errorFlag</div><div class=\"TTSummary\">The WirelessTypes::AutoCalErrorFlag for the shunt calibration.</div></div>",3804:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3804\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_slope</div><div class=\"TTSummary\">The slope result of the shunt calibration.</div></div>",3805:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3805\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_offset</div><div class=\"TTSummary\">The offset result of the shunt calibration</div></div>",3806:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3806\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_baseMedian</div><div class=\"TTSummary\">The median of the baseline data sampled during the shunt calibration.</div></div>",3807:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3807\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_baseMin</div><div class=\"TTSummary\">The minimum of the baseline data sampled during the shunt calibration.</div></div>",3808:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3808\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_baseMax</div><div class=\"TTSummary\">The maximum of the baseline data sampled during the shunt calibration.</div></div>",3809:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3809\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_shuntMedian</div><div class=\"TTSummary\">The median of the shunted data sampled during the shunt calibration.</div></div>",3810:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3810\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_shuntMin</div><div class=\"TTSummary\">The minimum of the shunted data sampled during the shunt calibration.</div></div>",3811:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3811\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_shuntMax</div><div class=\"TTSummary\">The maximum of the shunted data sampled during the shunt calibration.</div></div>",3813:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3813\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag errorFlag() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalErrorFlag for the shunt calibration.</div></div>",3814:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3814\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> slope() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the slope result of the shunt calibration.&nbsp; Note: This value was not applied to the Node. You will need to manually apply if desired.</div></div>",3815:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3815\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> offset() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the offset result of the shunt calibration.&nbsp; Note: This value was not applied to the Node. You will need to manually apply if desired.</div></div>",3816:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3816\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> baseMedian() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the median of the baseline data sampled during the shunt calibration.</div></div>",3817:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3817\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> parse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">autoCalInfo</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">final</span></td></tr></table></div><div class=\"TTSummary\">Parses the auto cal info bytes for the shm-link.</div></div>"});