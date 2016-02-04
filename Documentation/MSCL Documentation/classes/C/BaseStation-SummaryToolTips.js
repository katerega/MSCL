NDSummary.OnToolTipsLoaded("CClass:BaseStation",{3980:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3980\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BaseStation</div></div></div><div class=\"TTSummary\">Represents a MicroStrain Base Station object</div></div>",3986:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3986\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> BaseStation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Connection&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">connection,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td></td><td class=\"PName\">baseTimeout&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">BASE_COMMANDS_DEFAULT_TIMEOUT</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a BaseStation object.</div></div>",3987:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3987\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> ~BaseStation()</div><div class=\"TTSummary\">Destroys a BaseStation object</div></div>",3988:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3988\" class=\"NDPrototype NoParameterForm\">BaseStationEepromHelper&amp; eepromHelper() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a reference to the BaseStationEepromHelper for this BaseStation.</div></div>",3989:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3989\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> doCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">ResponsePattern&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ByteStream&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">cmdBytes,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td></td><td class=\"PName last\">timeout</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Performs a custom command and waits for the response.&nbsp; When completed, the ResponsePattern parameter will contain any result information.&nbsp; For a full explanation, see the ResponsePattern class.</div></div>",3991:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Checks that two BaseStation objects are equal.</div></div>",3992:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Checks that two BaseStation objects are not equal.</div></div>",3994:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3994\" class=\"NDPrototype NoParameterForm\">std::shared_ptr&lt;BaseStation_Impl&gt; m_impl</div><div class=\"TTSummary\">The BaseStation_Impl class that contains all the implementation logic for the BaseStation class.</div></div>",3996:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3996\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::<span class=\"SHKeyword\">string</span> deviceName(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">serial</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static function for creating the universal basestation name that should be used for SensorCloud.</div></div>",3997:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3997\" class=\"NDPrototype NoParameterForm\">Connection&amp; connection()</div><div class=\"TTSummary\">Gets the Connection object that this BaseStation is using.</div></div>",3998:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3998\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> BaseStationFeatures&amp; features() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a reference to the BaseStationFeatures for this BaseStation.&nbsp; Note: This will be invalid when the BaseStation is destroyed.</div></div>",3999:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3999\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Timestamp&amp; lastCommunicationTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Timestamp for the last time MSCL communicated with the BaseStation.&nbsp; Note: EEPROM reads using the cache, and data collection, will not update this timestamp.</div></div>",4000:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4000\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> readWriteRetries(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">numRetries</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the number of retry attempts for reading and writing with the BaseStation.&nbsp; By default, the number of retries is 0.&nbsp; Note:&nbsp; The timeout that is set per command will be per read and write attempt, meaning this retry number is multiplied by the timeout for your overall timeout.</div></div>",4001:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4001\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> useEepromCache(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">useCache</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets whether or not to utilize the eeprom cache when configuring this BaseStation (enabled by default). This can be enabled/disabled at any time.&nbsp; It is highly recommended to have eeprom caching be enabled.&nbsp; Note:&nbsp; The eeprom cache stores the last known value that was written to / read from the BaseStation for each eeprom location. If this is enabled, any reads will get the last known value from the cache if it exists, and any writes will not write to the BaseStation if the value attempting to be written is the same as that stored in the cache. Caching of these values will still be performed if this is disabled, however, read and write operations will then always reach out to the actual device.</div></div>",4002:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4002\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> clearEepromCache()</div><div class=\"TTSummary\">Clears the eeprom cache for this BaseStation.</div></div>",4003:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4003\" class=\"NDPrototype NoParameterForm\">WirelessTypes::Frequency frequency() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::Frequency representing the radio frequency of this BaseStation.&nbsp; If the frequency is unknown, it will be read from the BaseStation.</div></div>",4004:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4004\" class=\"NDPrototype NoParameterForm\">Version firmwareVersion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the firmware version of the BaseStation.</div></div>",4005:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4005\" class=\"NDPrototype NoParameterForm\">WirelessModels::BaseModel model() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the model of the BaseStation.</div></div>",4006:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4006\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> serial() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the serial number of the BaseStation.</div></div>",4007:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4007\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> name() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the name of the BaseStation. This is the universal basestation name that should be used for SensorCloud.&nbsp; This is the same as calling BaseStation::deviceName.</div></div>",4008:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4008\" class=\"NDPrototype NoParameterForm\">WirelessTypes::MicroControllerType microcontroller() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the microcontroller of the BaseStation.</div></div>",4009:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4009\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">DataSweeps getData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">timeout&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">maxSweeps&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets up to the requested amount of DataSweeps of sampled data that was collected by this BaseStation.</div></div>",4010:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4010\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> totalData()</div><div class=\"TTSummary\">Gets the number of DataSweeps that are currently in the data buffer.</div></div>",4011:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4011\" class=\"NDPrototype NoParameterForm\">NodeDiscoveries getNodeDiscoveries()</div><div class=\"TTSummary\">Gets the group of Node Discoveries that were collected by this base station.&nbsp; Calling this function clears out the Node Discovery buffer, so successively calling this will give you new Node Discoveries.</div></div>",4012:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4012\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> timeout(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">timeout</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the timeout to use when waiting for responses from commands.&nbsp; This timeout is used directly for BaseStation commands, while some additional time is added for Node commands.&nbsp; Note: Some commands have a minimum timeout that will override this if set lower than the minimum.</div></div>",4013:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Gets the current timeout to use when waiting for responses from base station commands.&nbsp; This timeout is used directly for BaseStation commands, while some additional time is added for Node commands.&nbsp; Note: Some commands have a minimum timeout that will override this if set lower than the minimum.</div></div>",4014:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4014\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> ping()</div><div class=\"TTSummary\">Pings the base station</div></div>",4015:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4015\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> readEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">eepromAddress</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads a specific EEPROM address on the Base Station.&nbsp; If the value stored in the eeprom cache is still valid, this will be returned instead.</div></div>",4016:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4016\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> writeEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">eepromAddress,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the specified value to a specific EEPROM address on the Base Station.&nbsp; If successful, the cache will be updated with the changed value as well.</div></div>",4017:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4017\" class=\"NDPrototype NoParameterForm\">Timestamp enableBeacon()</div><div class=\"TTSummary\">Enables the beacon on the base station using the system time (UTC) as its starting timestamp.</div></div>",4018:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4018\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Timestamp enableBeacon(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">utcTime</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Enables the beacon on the base station using the given UTC timestamp.</div></div>",4019:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4019\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> disableBeacon()</div><div class=\"TTSummary\">Disables the beacon on the base station.</div></div>",4020:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4020\" class=\"NDPrototype NoParameterForm\">BeaconStatus beaconStatus()</div><div class=\"TTSummary\">Gets the BeaconStatus of the beacon on the base station.</div></div>",4021:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4021\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> startRfSweepMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">minFreq,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">maxFreq,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">interval,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName\">options</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Starts the BaseStation in RF Sweep Mode.&nbsp; Note: To exit this Mode, send any command to the BaseStation (such as ping).</div></div>",4022:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4022\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> cyclePower()</div><div class=\"TTSummary\">Cycles the power on the base station.</div></div>",4023:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4023\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> resetRadio()</div><div class=\"TTSummary\">Resets the radio on the base station.</div></div>",4024:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4024\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> changeFrequency(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Frequency&nbsp;</td><td class=\"PName last\">frequency</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Changes the radio frequency of the base station.</div></div>",4025:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4025\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> verifyConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStationConfig&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">config,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">ConfigIssues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">outIssues</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether the settings in the given BaseStationConfig are ok to be written to the BaseStation.&nbsp; Options that are set will also be validated against each other. If an option that needs to be validated isn\'t currently set, it will be read from the BaseStation.</div></div>",4026:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4026\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> applyConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStationConfig&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">config</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Applies a BaseStationConfig to the Node.&nbsp; Note: This applies all options that have been set in the BaseStationConfig.&nbsp; Before applying, the options will be validated. It is recommended that you perform this validation yourself first by using verifyConfig.</div></div>",4027:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4027\" class=\"NDPrototype NoParameterForm\">WirelessTypes::TransmitPower getTransmitPower() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the WirelessTypes::TransmitPower that is currently set on the BaseStation.</div></div>",4028:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4028\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BaseStationButton getButtonLongPress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">buttonNumber</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the button settings for a long press action that are currently set on the BaseStation.</div></div>",4029:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4029\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BaseStationButton getButtonShortPress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">buttonNumber</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the button settings for a short press action that are currently set on the BaseStation.</div></div>",4030:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4030\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> getAnalogPairingEnabled() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the Analog Pairing enabled/disabled setting that is currently set on the BaseStation.&nbsp; If this is disabled, all other analog pairing settings will be disabled.</div></div>",4031:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4031\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> getAnalogTimeoutTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the Analog Timeout Time in seconds that is currently set on the BaseStation.</div></div>",4032:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4032\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> getAnalogTimeoutVoltage() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the Analog Timeout Voltage that is currently set on the BaseStation.</div></div>",4033:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4033\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> getAnalogExceedanceEnabled() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the Analog Exceedance enabled/disabled setting that is currently set on the BaseStation.</div></div>",4034:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4034\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BaseStationAnalogPair getAnalogPair(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">portNumber</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the BaseStationAnalogPair for the specified port number that is currently set on the BaseStation.</div></div>",4035:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4035\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> Timestamp&amp; node_lastCommunicationTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the Timestamp for the last time MSCL communicated with the given node address.</div></div>",4036:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4036\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> node_shortPing(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Pings a specific node.</div></div>",4037:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4037\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">PingResponse node_ping(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Pings the specified Node.</div></div>",4038:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4038\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> node_sleep(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Puts the Node into a low power, sleep mode.&nbsp; This command attempts to ping the node before sending the sleep command, to verify communication.</div></div>",4039:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4039\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">SetToIdleStatus node_setToIdle(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Attempts to set the node to idle so that it can be communicated with.</div></div>",4040:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4040\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> node_readEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessProtocol&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">protocol,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td></td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName last\">eepromAddress,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">eepromValue</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Reads a value from EEPROM on the specified Node.</div></div>",4041:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4041\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> node_writeEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessProtocol&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">protocol,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td></td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName last\">eepromAddress,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes a value to EEPROM on the specified Node.</div></div>",4042:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4042\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> node_pageDownload(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessProtocol&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">protocol,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td></td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName last\">pageIndex,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">ByteStream&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Downloads a page of logged data from the Node.</div></div>",4043:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4043\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> node_startSyncSampling(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sends the Start Synchronized Sampling command to a Node.</div></div>",4044:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4044\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> node_startNonSyncSampling(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sends the Start Non-Synchronized Sampling command to a Node.</div></div>",4045:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4045\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> node_armForDatalogging(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td></td><td class=\"PName\">nodeAddress,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">message&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHString\">&quot;&quot;</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sends the Arm For Datalogging command to a Node.</div></div>",4046:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4046\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> node_triggerArmedDatalogging(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sends the Trigger Armed Datalogging command to a Node.</div></div>",4047:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4047\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> node_erase(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sends the Erase command to a Node.</div></div>",4048:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4048\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> node_autoBalance(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessProtocol&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">protocol,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td></td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName last\">channelNumber,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td></td><td class=\"PName last\">targetPercent,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">AutoBalanceResult&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">result</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sends the AutoBalance command to a Node.</div></div>",4049:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4049\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> node_autocal(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td></td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessModels::</td><td class=\"PType\">NodeModel&nbsp;</td><td></td><td class=\"PName last\">model,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Version&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">fwVersion,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">AutoCalResult&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">result</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Performs automatic calibration for a Wireless Node.</div></div>",4050:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4050\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> node_readSingleSensor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td></td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName last\">channelNumber,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">result</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Reads the bits value for a single channel on a Wireless Node.</div></div>"});