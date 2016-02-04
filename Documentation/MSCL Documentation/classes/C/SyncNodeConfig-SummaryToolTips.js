NDSummary.OnToolTipsLoaded("CClass:SyncNodeConfig",{1732:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1732\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SyncNodeConfig</div></div></div><div class=\"TTSummary\">A helper class for reading and writing values used for Synchronized Sampling configuration</div></div>",1734:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1734\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">SyncNodeConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SyncNetworkInfo&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">networkInfo</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a SyncNodeConfig object</div></div>",1736:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1736\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> SyncNetworkInfo* m_networkInfo</div><div class=\"TTSummary\">The SyncNetworkInfo object containing information on the Node in the Sync Sampling network.</div></div>",1737:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1737\" class=\"NDPrototype NoParameterForm\">NodeEepromHelper m_eepromHelper</div><div class=\"TTSummary\">The NodeEepromHelper to use in reading and writing eeproms.</div></div>",1739:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1739\" class=\"NDPrototype NoParameterForm\">SampleRate sampleRate()</div><div class=\"TTSummary\">Gets the SampleRate of the node.</div></div>",1740:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1740\" class=\"NDPrototype NoParameterForm\">ChannelMask activeChannels()</div><div class=\"TTSummary\">Gets the ChannelMask of the node.</div></div>",1741:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1741\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DataFormat dataFormat()</div><div class=\"TTSummary\">Gets the WirelessTypes::DataFormat of the node.</div></div>",1742:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1742\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DataCollectionMethod collectionMethod()</div><div class=\"TTSummary\">Gets the WirelessTypes::DataCollectionMethod of the node.</div></div>",1743:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1743\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> sweepsPerSession()</div><div class=\"TTSummary\">Gets the number of sweeps per session of the node.</div></div>",1744:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1744\" class=\"NDPrototype NoParameterForm\">WirelessTypes::SyncSamplingMode syncSamplingMode()</div><div class=\"TTSummary\">Gets the WirelessTypes::SyncSamplingMode of the node.</div></div>",1745:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1745\" class=\"NDPrototype NoParameterForm\">WirelessTypes::SamplingMode samplingMode()</div><div class=\"TTSummary\">Gets the WirelessTypes::SamplingMode ofthe node.</div></div>",1746:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1746\" class=\"NDPrototype NoParameterForm\">TimeSpan samplingDelay()</div><div class=\"TTSummary\">Gets the value stored in eeprom for the sampling delay of the node.</div></div>",1747:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1747\" class=\"NDPrototype NoParameterForm\">TimeSpan timeBetweenBursts()</div><div class=\"TTSummary\">Gets the time between bursts of the node.</div></div>",1748:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1748\" class=\"NDPrototype NoParameterForm\">WirelessTypes::NodeRetransmission retransmission()</div><div class=\"TTSummary\">Gets the WirelessTypes::NodeRetransmission of the node.</div></div>",1749:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1749\" class=\"NDPrototype NoParameterForm\">WirelessTypes::SettlingTime filter2()</div><div class=\"TTSummary\">Gets the second filter of the node.</div></div>",1750:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1750\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> txPerGroup(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">txPerGroup</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the transmissions per group to the node.</div></div>",1751:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1751\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> groupSize(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">groupSize</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the group size to the node.</div></div>",1752:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1752\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> tdmaAddress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">address</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the TDMA address to the node.</div></div>",1753:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1753\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> retransmission(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">NodeRetransmission&nbsp;</td><td class=\"PName last\">reTx</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the retransmission value to the node.</div></div>",1754:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1754\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> maxRetransPerBurst(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">maxReTxPerBurst</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the maximum retransmissions per burst to the node.</div></div>",1755:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1755\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> applyEepromChanges()</div><div class=\"TTSummary\">Resets the radio/power on the Node to apply eeprom changes that have been made.</div></div>"});