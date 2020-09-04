NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Configuration/BaseStationEeprom.h",{4685:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4685\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BaseStationEeprom</div></div></div><div class=\"TTSummary\">Used to read and write to BaseStations\' eeproms and provide caching functionality.</div></div>",4687:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4687\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> BaseStationEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">BaseStation_Impl&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">base</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a BaseStationEeprom object.</div></div>",4689:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4689\" class=\"NDPrototype NoParameterForm\">BaseStation_Impl* m_baseStation</div><div class=\"TTSummary\">The BaseStation_Impl to use for communication.</div></div>",4691:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4691\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> updateCacheFromDevice(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Attempts to update the cache by reading the value from the BaseStation.&nbsp; Any values that are read from the Node will be updated in the cache.</div></div>",4692:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4692\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual uint16</span> readEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Attempts to read an eeprom value from the BaseStation.&nbsp; If caching is enabled and there is a previously cached value available, this will just return the value from the cache and will not communicate with the BaseStation.</div></div>",4693:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4693\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> writeEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Attempts to write an eeprom value to the BaseStation.&nbsp; If successful, the cache will be updated with the changed value as well.&nbsp; If caching is enabled and the value in the cache is the same as that attempting to be written, nothing will be written to the Node and this function will have no affect.</div></div>"});