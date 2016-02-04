NDSummary.OnToolTipsLoaded("CClass:DataSweep",{3709:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3709\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">DataSweep</div></div></div><div class=\"TTSummary\">Represents 1 data sweep, including data for each channel, a timestamp, and a sample rate</div></div>",3722:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3722\" class=\"NDPrototype NoParameterForm\">DataSweep()</div><div class=\"TTSummary\">Creates a default constructed DataSweep.</div></div>",3724:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3724\" class=\"NDPrototype NoParameterForm\">Timestamp m_timestamp</div><div class=\"TTSummary\">The Timestamp of the data sweep.</div></div>",3725:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3725\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_tick</div><div class=\"TTSummary\">The tick value that was contained in the packet (increments for each sweep)</div></div>",3726:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3726\" class=\"NDPrototype NoParameterForm\">SampleRate m_sampleRate</div><div class=\"TTSummary\">The SampleRate that was contained in the packet</div></div>",3727:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3727\" class=\"NDPrototype NoParameterForm\">NodeAddress m_nodeAddress</div><div class=\"TTSummary\">The node address that was contained in the packet (identifies the node this packet came from)</div></div>",3728:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3728\" class=\"NDPrototype NoParameterForm\">ChannelData m_data</div><div class=\"TTSummary\">Contains one or more WirelessDataPoints, corresponding to each channel\'s data for this sweep</div></div>",3729:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3729\" class=\"NDPrototype NoParameterForm\">SamplingType m_samplingMode</div><div class=\"TTSummary\">The SamplingType that identifies the sampling mode for this data sweep</div></div>",3730:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3730\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> m_baseRssi</div><div class=\"TTSummary\">The Base Station RSSI that identifies the received signal strength at the Base Station</div></div>",3731:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3731\" class=\"NDPrototype NoParameterForm\">WirelessTypes::Frequency m_frequency</div><div class=\"TTSummary\">The WirelessTypes::Frequency representing the radio frequency that this DataSweep was collected on</div></div>",3733:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3733\" class=\"NDPrototype NoParameterForm\">Timestamp timestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the timestamp of the sweep as a Timestamp</div></div>",3734:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3734\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> nanoseconds() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the timestamp of the sweep in nanoseconds since UTC</div></div>",3735:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3735\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> tick() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the tick value of the sweep</div></div>",3736:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3736\" class=\"NDPrototype NoParameterForm\">SampleRate sampleRate() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the sample rate of the sweep as a SampleRate</div></div>",3737:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3737\" class=\"NDPrototype NoParameterForm\">NodeAddress nodeAddress() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node address that this sweep is associated with</div></div>",3738:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3738\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> ChannelData&amp; data() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the channel data in this sweep as a WirelessDataPoint::ChannelData container.</div></div>",3739:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3739\" class=\"NDPrototype NoParameterForm\">SamplingType samplingType() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the SamplingType for this sweep</div></div>",3740:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3740\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> nodeRssi() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Node RSSI value that identifies the received signal strength at the Node</div></div>",3741:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3741\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> baseRssi() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Base Station RSSI value that identifies the received signal strength at the BaseStation for this sweep</div></div>",3742:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3742\" class=\"NDPrototype NoParameterForm\">WirelessTypes::Frequency frequency() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the radio frequency that this DataSweep was collected on</div></div>",3743:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3743\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> timestamp(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Timestamp&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">time</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the timestamp of the sweep</div></div>",3744:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3744\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> tick(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">tick</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the tick of the sweep</div></div>",3745:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3745\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> sampleRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SampleRate&nbsp;</td><td class=\"PName last\">rate</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the sample rate of the sweep</div></div>",3746:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3746\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> nodeAddress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">address</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the node address of the sweep</div></div>",3747:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3747\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> data(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelData&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the data of the sweep</div></div>",3748:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Sets the sampling mode of the sweep</div></div>",3749:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3749\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> nodeRssi(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">rssi</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Node RSSI value that identifies the received signal strength at the Node</div></div>",3750:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3750\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> baseRssi(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">rssi</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Base Station RSSI value that identifies the received signal strength at the Base Station for this sweep</div></div>",3751:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3751\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> frequency(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Frequency&nbsp;</td><td class=\"PName last\">freq</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the radio frequency that this DataSweep was collected on</div></div>",3753:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a vector of DataSweep objects.</div></div>"});