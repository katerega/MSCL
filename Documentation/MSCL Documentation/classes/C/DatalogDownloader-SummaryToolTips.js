NDSummary.OnToolTipsLoaded("CClass:DatalogDownloader",{3766:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3766\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">DatalogDownloader</div></div></div><div class=\"TTSummary\">Used to download logged data from a WirelessNode.</div></div>",3768:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3768\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> DatalogDownloader(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessNode&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">node</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a DatalogDownloader object. Datalogging information will immediately be read from the Node.</div></div>",3775:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3775\" class=\"NDPrototype NoParameterForm\">WirelessNode m_node</div><div class=\"TTSummary\">The WirelessNode to download the data from.</div></div>",3776:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3776\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_foundFirstTrigger</div><div class=\"TTSummary\">Whether or not the first trigger has been found.</div></div>",3777:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3777\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_outOfMemory</div><div class=\"TTSummary\">Whether or not we requested data that is out of bounds of the memory.</div></div>",3778:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3778\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> m_currentByte</div><div class=\"TTSummary\">The current byte position into the Node\'s memory.</div></div>",3779:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3779\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> m_sweepCount</div><div class=\"TTSummary\">The 0-based count indicating which sweep we are currently on in the data.</div></div>",3780:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3780\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_logPage</div><div class=\"TTSummary\">The last log page that contains datalogging data.</div></div>",3781:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3781\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_pageOffset</div><div class=\"TTSummary\">The byte offset into the last log page containing datalogging data.</div></div>",3782:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3782\" class=\"NDPrototype NoParameterForm\">std::unique_ptr&lt;NodeMemory&gt; m_nodeMemory</div><div class=\"TTSummary\">The NodeMemory object to help with interacting with the Node\'s datalogging memory.</div></div>",3783:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3783\" class=\"NDPrototype NoParameterForm\">DatalogSessionInfo m_sessionInfo</div><div class=\"TTSummary\">The &lt;DatalogSessionInfo&gt; containing information about the current trigger session data.</div></div>",3785:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3785\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint8</span> read_uint8(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">position</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Reads a 1-byte unsigned integer from the Node\'s memory.</div></div>",3786:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3786\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> read_uint16(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">position</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Reads a 2-byte unsigned integer from the Node\'s memory.</div></div>",3787:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3787\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> read_uint32(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">position</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Reads a 4-byte unsigned integer from the Node\'s memory.</div></div>",3788:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3788\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> read_float(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">position</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Reads a 4-byte float from the Node\'s memory.</div></div>",3789:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3789\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">std::<span class=\"SHKeyword\">string</span> read_string(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">position,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td></td><td class=\"PName last\">length</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Reads a string of the specified length from the Node\'s memory.</div></div>",3790:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3790\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> isStartOfTrigger(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">position</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks whether the given position is a start of a new trigger session.</div></div>",3791:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3791\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> parseTriggerHeader()</div><div class=\"TTSummary\">Parses a trigger header from the current byte position. The current datalogging session info in this class is updated.</div></div>",3792:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3792\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> complete()</div><div class=\"TTSummary\">Checks if all of the data has been downloaded (no more data available).</div></div>",3793:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3793\" class=\"NDPrototype NoParameterForm\">LoggedDataSweep getNextData()</div><div class=\"TTSummary\">Gets the next LoggedDataSweep that is logged to the Node.</div></div>",3794:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3794\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> startOfSession()</div><div class=\"TTSummary\">Gets whether a new datalogging session has been found (after calling getNextData).&nbsp; This will be true for a single LoggedDataSweep, signifying that all of the DatalogDownloader\'s info has been updated with new information (sample rate, session index, etc.) about this sweep.</div></div>",3795:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3795\" class=\"NDPrototype NoParameterForm\">WirelessTypes::TriggerType triggerType()</div><div class=\"TTSummary\">Gets the WirelessTypes::TriggerType of the current datalogging session.</div></div>",3796:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3796\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> totalSweeps()</div><div class=\"TTSummary\">Gets the total number of sweeps that are in the current datalogging session.</div></div>",3797:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3797\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> sessionIndex()</div><div class=\"TTSummary\">Gets the index of the current datalogging session.&nbsp; This starts at 1 for the first session, and is incremented for each additional session.</div></div>",3798:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3798\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> SampleRate&amp; sampleRate()</div><div class=\"TTSummary\">Gets the SampleRate of the current datalogging session.</div></div>",3799:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3799\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> std::<span class=\"SHKeyword\">string</span>&amp; userString()</div><div class=\"TTSummary\">Gets the user entered string of the current datalogging session (if any).</div></div>"});