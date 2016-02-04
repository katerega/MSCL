NDSummary.OnToolTipsLoaded("CClass:NodeFeatures",{577:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype577\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures</div></div></div><div class=\"TTSummary\">Contains information on which features are supported by a WirelessNode.</div></div>",578:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype578\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> normalizeNumSweeps(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">sweeps</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Normalizes the number of sweeps so that it is within range and a multiple of 100 (rounds up to next multiple).</div></div>",579:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype579\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">TimeSpan normalizeTimeBetweenBursts(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">TimeSpan&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">time</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Normalizes a TimeSpan so that it is within an acceptable range for setting the timeBetweenBursts.&nbsp; A valid range is between 1 second and 24 hours. Seconds above 32767 will be rounded to minutes.&nbsp; When setting the time between bursts, you should also call minTimeBetweenBursts and verify it is greater than this.</div></div>",580:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype580\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> WirelessChannels&amp; channels() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a reference to the WirelessChannels of this Node.</div></div>",581:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype581\" class=\"NDPrototype NoParameterForm\">ChannelGroups channelGroups() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ChannelGroups supported by this Node.</div></div>",582:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype582\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsChannelSetting(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">ChannelGroupSetting&nbsp;</td><td></td><td class=\"PName last\">setting,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if the Node supports a given WirelessTypes::ChannelGroupSetting for the given ChannelMask.</div></div>",583:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype583\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> supportsHardwareGain() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports Hardware Gain for any of its ChannelGroups.</div></div>",584:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype584\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> supportsHardwareOffset() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports Hardware Offset for any of its ChannelGroups.</div></div>",585:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype585\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> supportsGaugeFactor() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports Gauge Factor for any of its ChannelGroups.</div></div>",586:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype586\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsLostBeaconTimeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports the Lost Beacon Timeout option.</div></div>",587:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype587\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> supportsFilterSettlingTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports Filter Settling Time for any of its ChannelGroups.</div></div>",588:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype588\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsThermocoupleType() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports the Thermocouple Type for any of its ChannelGroups.</div></div>",589:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype589\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsFatigueConfig() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports FatigueOptions configuration.</div></div>",590:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype590\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsYoungsModConfig() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports Young\'s Modulus (part of FatigueOptions) configuration.</div></div>",591:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype591\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsPoissonsRatioConfig() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports Poisson\'s Ratio (part of FatigueOptions) configuration.</div></div>",592:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype592\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsFatigueDebugModeConfig() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports enabling Debug Mode (part of FatigueOptions) configuration.</div></div>",593:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype593\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsFatigueModeConfig() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports Fatigue Mode (part of FatigueOptions) configuration.</div></div>",594:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype594\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsHistogramConfig() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports HistogramOptions configuration.</div></div>",595:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype595\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsHistogramRateConfig() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports Histogram transmit rate (part of HistogramOptions) configuration.</div></div>",596:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype596\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsHistogramEnableConfig() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports turning Histograms on and off (part of FatigueOptions).</div></div>",597:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype597\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsActivitySense() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports the ActivitySense feature.</div></div>",598:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype598\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsAutoBalance() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports the Auto Balance command for any of its ChannelGroups.</div></div>",599:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype599\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsAutoCal() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports the AutoCal commands.</div></div>",600:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype600\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsLimitedDuration() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports setting a limited duration of sampling.</div></div>",601:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype601\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsChannel(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">channelNumber</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a specific channel is supported (can be enabled) by this Node.</div></div>",602:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype602\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsSamplingMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">SamplingMode&nbsp;</td><td class=\"PName last\">samplingMode</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a WirelessTypes::SamplingMode is supported by this Node.</div></div>",603:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype603\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsSampleRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">WirelessSampleRate&nbsp;</td><td class=\"PName last\">sampleRate,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">SamplingMode&nbsp;</td><td class=\"PName last\">samplingMode</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a sample rate is supported by the Node for the given WirelessTypes::SamplingMode.</div></div>",604:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype604\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsDataFormat(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataFormat&nbsp;</td><td class=\"PName last\">dataFormat</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a WirelessTypes::DataFormat is supported by this Node.</div></div>",605:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype605\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsDefaultMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DefaultMode&nbsp;</td><td class=\"PName last\">mode</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a WirelessTypes::DefaultMode is supported by this Node.</div></div>",606:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype606\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsDataCollectionMethod(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataCollectionMethod&nbsp;</td><td class=\"PName last\">collectionMethod</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a WirelessTypes::DataCollectionMethod is supported by this Node.</div></div>",607:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype607\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsTransmitPower(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">TransmitPower&nbsp;</td><td class=\"PName last\">power</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a WirelessTypes::TransmitPower is supported by this Node.</div></div>",608:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype608\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsFatigueMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">FatigueMode&nbsp;</td><td class=\"PName last\">mode</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a WirelessTypes::FatigueMode is supported by this Node.</div></div>",609:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype609\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> WirelessTypes::WirelessSampleRate maxSampleRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">SamplingMode&nbsp;</td><td></td><td class=\"PName last\">samplingMode,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">channels</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the maximum SampleRate value that is supported by this Node with the given &lt;SamplingMode&gt; and ChannelMask.</div></div>",610:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype610\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> WirelessTypes::SettlingTime maxFilterSettlingTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SampleRate&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">rate</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the maximum WirelessTypes::SettlingTime available for the given SampleRate.</div></div>",611:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype611\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> minInactivityTimeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the minimum inactivity timeout (in seconds) that is supported.</div></div>",612:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype612\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> minLostBeaconTimeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the minimum lost beacon timeout (in minutes) that is supported.&nbsp; Note: A value of 0 disable the lost beacon timeout.</div></div>",613:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype613\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> maxLostBeaconTimeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the maximum lost beacon timeout (in minutes) that is supported.</div></div>",614:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype614\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> minCheckRadioInterval() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the minimum check radio interval (in seconds) that is supported.</div></div>",615:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype615\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> maxCheckRadioInterval() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the maximum check radio interval (in seconds) that is supported.</div></div>",616:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype616\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> minSweeps() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the minimum number of sweeps that can be assigned for the duration of a continuous sampling session.</div></div>",617:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype617\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> maxSweeps(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">SamplingMode&nbsp;</td><td></td><td class=\"PName last\">samplingMode,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataFormat&nbsp;</td><td></td><td class=\"PName last\">dataFormat,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">channels</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the maximum number of sweeps that can be assigned for a given WirelessTypes::SamplingMode.&nbsp; This is the duration of each burst if in Burst Sync Sampling mode, or the total duration of sampling in other sampling modes.</div></div>",618:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype618\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> maxSweeps(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataFormat&nbsp;</td><td></td><td class=\"PName last\">dataFormat,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">channels</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the maximum number of sweeps that can be assigned for the duration of a continuous sampling session.</div></div>",619:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype619\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual uint32</span> maxSweepsPerBurst(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataFormat&nbsp;</td><td></td><td class=\"PName last\">dataFormat,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">channels</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the maximum number of sweeps per burst that can be assigned for a Burst Sync Sampling session.</div></div>",620:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype620\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">TimeSpan minTimeBetweenBursts(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataFormat&nbsp;</td><td></td><td class=\"PName last\">dataFormat,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">channels,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SampleRate&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">sampleRate,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">sweepsPerBurst</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the minimum time that can be assigned for a Burst Sync Sampling session.</div></div>",621:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype621\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> minHardwareGain() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the minimum hardware gain value that is supported.</div></div>",622:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype622\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> maxHardwareGain() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the maximum hardware gain value that is supported.</div></div>",623:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype623\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">double</span> normalizeHardwareGain(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">gain</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Normalizes the hardware gain value so that it is within an acceptable range.</div></div>",624:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype624\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> numDamageAngles() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of damage angles (see FatigueOptions) on this Node.</div></div>",625:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype625\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> numSnCurveSegments() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of Sn Curve segments (see FatigueOptions) on this Node.</div></div>",626:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype626\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::DefaultModes defaultModes() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the WirelessTypes::DefaultModes that are supported by this Node.</div></div>",627:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype627\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::DataCollectionMethods dataCollectionMethods() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the WirelessTypes::DataCollectionMethods that are supported by this Node.</div></div>",628:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype628\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::DataFormats dataFormats() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the WirelessTypes::DataFormats that are supported by this Node.</div></div>",629:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype629\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::SamplingModes samplingModes() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the WirelessTypes::SamplingModes that are supported by this Node.</div></div>",630:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype630\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::WirelessSampleRates sampleRates(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">SamplingMode&nbsp;</td><td class=\"PName last\">samplingMode</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets a list of the WirelessTypes::WirelessSampleRates that are supported by this Node for the given sampling mode.</div></div>",631:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype631\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::TransmitPowers transmitPowers() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the WirelessTypes::TransmitPowers that are supported by this Node.</div></div>",632:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype632\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::WirelessSampleRates histogramTransmitRates() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the Histogram Transmit Rates that are supported by this Node.</div></div>",633:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype633\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::FatigueModes fatigueModes() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the WirelessTypes::FatigueModes that are supported by this Node.</div></div>"});