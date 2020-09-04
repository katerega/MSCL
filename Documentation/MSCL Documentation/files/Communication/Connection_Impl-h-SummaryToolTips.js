NDSummary.OnToolTipsLoaded("File:Communication/Connection_Impl.h",{168:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype168\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Connection_Impl_Base</div></div></div><div class=\"TTSummary\">An Abstract Base Class for various connection types.</div></div>",170:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype170\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> ~Connection_Impl_Base()</div><div class=\"TTSummary\">Destroys the Connection_Impl_Base object</div></div>",171:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype171\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> establishConnection() = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Initializes and opens the current connection.</div></div>",172:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype172\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> description() = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets a description of the connection as a string</div></div>",173:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype173\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> Connection::ConnectionType type() = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the Connection::ConnectionType.</div></div>",174:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype174\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> disconnect() = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Closes the current connection.</div></div>",175:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype175\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> reconnect() = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Reopens a connection that has been disconnected.</div></div>",176:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype176\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> registerParser(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">function</span>&lt;<span class=\"SHKeyword\">void</span>(DataBuffer&amp;)&gt;&nbsp;</td><td class=\"PName last\">parseFunction</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Registers a function to handle the parsing of data when it is read in.</div></div>",177:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype177\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> unregisterParser() = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Unregisters the function to handle the parsing of data when it is read in</div></div>",178:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype178\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> throwIfError() = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Throws an exception if a connection error has occurred.</div></div>",179:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype179\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> write(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ByteStream&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Writes bytes to the port via the BoostCommunication object.</div></div>",180:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype180\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> write(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">bytes</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Writes the given bytes to the port via the BoostCommunication object.</div></div>",181:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype181\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> clearBuffer() = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Resets the read buffer.</div></div>",182:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype182\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::size_t byteReadPos() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the read position from the byte buffer.</div></div>",183:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype183\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::size_t byteAppendPos() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the append position from the byte buffer.</div></div>",184:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype184\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> rawByteMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Puts the connection into &quot;Raw Byte Mode.&quot;  &quot;Raw Byte Mode&quot; stops the data from being sent/parsed from any attached devices (BaseStation, InertialNode, etc.)&nbsp; and instead sends all data into a raw circular data buffer that can be accessed by calling getRawBytes on this Connection object.&nbsp; Disabling this mode will start sending all data back to the previous attached device, if still available.</div></div>",185:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype185\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> getRawBytes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">bytes,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName\">timeout&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName\">maxBytes&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName\">minBytes&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Gets all of the raw bytes that are available that have been collected when the Connection is in &quot;Raw Byte Mode.&quot;&nbsp; If the Connection has not been put into &quot;Raw Byte Mode&quot; by calling rawByteMode, no data can be retrieved from this function.</div></div>",186:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype186\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> debugMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Puts the connection into &quot;Debug Mode.&quot;  &quot;Debug Mode Mode&quot; adds an additional container that gets filled when any write or read operations occur.&nbsp; Once debug mode is enabled, you can access this data with the getDebugData function.&nbsp; This does not interfere with standard data collection.</div></div>",187:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype187\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> getDebugData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ConnectionDebugDataVec&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">timeout</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Gets the ConnectionDebugData that have been collected when the Connection is in &quot;Debug Mode.&quot;&nbsp; If the Connection has not been put into &quot;Debug Mode&quot; by calling debugMode, no data can be retrieved from this function.</div></div>",188:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype188\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> updateBaudRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">baudRate</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Updates the serial connection baud rate. If this is not a serial connection, this function does nothing.&nbsp; Important: The connection to the port will be closed and re-opened at the new baud rate.</div></div>",189:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype189\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">template</span> &lt;typename Comm_Object&gt;</div><div class=\"CPName\">Connection_Impl</div></div></div><div class=\"TTSummary\">An Abstract Base Class for various connection types.&nbsp; This class uses a template for the Comm Object and contains default functionality for connection types.</div></div>",191:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype191\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> ~Connection_Impl()</div><div class=\"TTSummary\">Destroys the Connection_Impl object</div></div>",193:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype193\" class=\"NDPrototype NoParameterForm\">std::unique_ptr&lt; BoostCommunication&lt;Comm_Object&gt; &gt; m_comm</div><div class=\"TTSummary\">A BoostCommunication object used for actual read/write operations.</div></div>",194:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype194\" class=\"NDPrototype NoParameterForm\">std::unique_ptr&lt;boost::asio::io_context&gt; m_ioContext</div><div class=\"TTSummary\">The boost::asio::io_context object.</div></div>",195:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype195\" class=\"NDPrototype NoParameterForm\">std::unique_ptr&lt;Comm_Object&gt; m_ioPort</div><div class=\"TTSummary\">The actual boost communication object (ex. boost::asio::serial_port, tcp::socket, etc.)</div></div>",196:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype196\" class=\"NDPrototype NoParameterForm\">std::unique_ptr&lt;std::thread&gt; m_readThread</div><div class=\"TTSummary\">The thread used to run the operation of reading in bytes from the BaseStation.</div></div>",197:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype197\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_established</div><div class=\"TTSummary\">true if the connection has been established, false otherwise.</div></div>",198:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype198\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">std::<span class=\"SHKeyword\">function</span>&lt;<span class=\"SHKeyword\">void</span>(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">DataBuffer&amp;</td></tr></table></td><td class=\"PAfterParameters\">)&gt; m_parseFunction</td></tr></table></div><div class=\"TTSummary\">The function to call to parse data that is read in.</div></div>",199:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype199\" class=\"NDPrototype NoParameterForm\">Connection::ConnectionType m_type</div><div class=\"TTSummary\">The Connection::ConnectionType of this connection.</div></div>",200:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype200\" class=\"NDPrototype NoParameterForm\">boost::circular_buffer_space_optimized&lt;<span class=\"SHKeyword\">uint8</span>&gt; m_rawByteBuffer</div><div class=\"TTSummary\">The circular buffer to store data when in &quot;Raw Byte Mode.&quot;</div></div>",201:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype201\" class=\"NDPrototype NoParameterForm\">boost::circular_buffer_space_optimized&lt;ConnectionDebugData&gt; m_debugDataBuffer</div><div class=\"TTSummary\">The circular buffer to store data when in &quot;Debug Mode.&quot;</div></div>",202:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype202\" class=\"NDPrototype NoParameterForm\">std::condition_variable m_rawByteBufferCondition</div><div class=\"TTSummary\">Allows the raw byte buffer to know when data has been added.</div></div>",203:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype203\" class=\"NDPrototype NoParameterForm\">std::condition_variable m_debugBufferCondition</div><div class=\"TTSummary\">Allows the debug data buffer to know when data has been added.</div></div>",204:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype204\" class=\"NDPrototype NoParameterForm\">mutable <span class=\"SHKeyword\">bool</span> m_connectionError</div><div class=\"TTSummary\">true if an error has occurred with the connection, false otherwise.</div></div>",205:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype205\" class=\"NDPrototype NoParameterForm\">mutable <span class=\"SHKeyword\">int</span> m_errorCode</div><div class=\"TTSummary\">The error code of the connection error, if there was a connection error.</div></div>",206:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype206\" class=\"NDPrototype NoParameterForm\">mutable std::<span class=\"SHKeyword\">string</span> m_errorMsg</div><div class=\"TTSummary\">The error message of the connection error, if there was a connection error.</div></div>",207:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype207\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_rawByteMode</div><div class=\"TTSummary\">true if the connection is in &quot;Raw Byte Mode&quot;, false otherwise.</div></div>",208:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype208\" class=\"NDPrototype NoParameterForm\">std::mutex m_rawDataMutex</div><div class=\"TTSummary\">The mutex used to access the &quot;Raw Byte Mode&quot; buffer.</div></div>",209:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype209\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_debugMode</div><div class=\"TTSummary\">true if the connection is in &quot;Debug Mode&quot;, false otherwise.</div></div>",210:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype210\" class=\"NDPrototype NoParameterForm\">std::mutex m_debugDataMutex</div><div class=\"TTSummary\">The mutex used to access the &quot;Debug Mode&quot; buffer.</div></div>",212:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype212\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> establishConnection() = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Initializes and opens the current connection.</div></div>",213:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype213\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> description() = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets a description of the connection as a string.</div></div>",214:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype214\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> Connection::ConnectionType type() <span class=\"SHKeyword\">override</span></div><div class=\"TTSummary\">Gets the Connection::ConnectionType.</div></div>",215:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype215\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> disconnect() <span class=\"SHKeyword\">override</span></div><div class=\"TTSummary\">Closes the current connection.</div></div>",216:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype216\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> reconnect() <span class=\"SHKeyword\">override</span></div><div class=\"TTSummary\">Reopens a connection that has been disconnected.</div></div>",217:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype217\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> registerParser(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">function</span>&lt;<span class=\"SHKeyword\">void</span>(DataBuffer&amp;)&gt;&nbsp;</td><td class=\"PName last\">parseFunction</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">final</span></td></tr></table></div><div class=\"TTSummary\">Registers a function to handle the parsing of data when it is read in.</div></div>",218:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype218\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> unregisterParser() <span class=\"SHKeyword\">final</span></div><div class=\"TTSummary\">Unregisters the function to handle the parsing of data when it is read in.</div></div>",219:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype219\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> throwIfError() <span class=\"SHKeyword\">final</span></div><div class=\"TTSummary\">Throws an exception if a connection error has occurred.</div></div>",220:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype220\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> write(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ByteStream&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const final</span></td></tr></table></div><div class=\"TTSummary\">Writes bytes to the port via the BoostCommunication object.</div></div>",221:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype221\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> write(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">bytes</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const final</span></td></tr></table></div><div class=\"TTSummary\">Writes the given bytes to the port via the BoostCommunication object.</div></div>",222:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype222\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> clearBuffer() <span class=\"SHKeyword\">final</span></div><div class=\"TTSummary\">Clears the read buffer.</div></div>",223:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype223\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::size_t byteReadPos() <span class=\"SHKeyword\">const final</span></div><div class=\"TTSummary\">Gets the read position from the byte buffer.</div></div>",224:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype224\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::size_t byteAppendPos() <span class=\"SHKeyword\">const final</span></div><div class=\"TTSummary\">Gets the append position from the byte buffer.</div></div>",225:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype225\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> startIoThread()</div><div class=\"TTSummary\">Starts the main thread for reading in all the data and handling write commands</div></div>",226:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype226\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> stopIoThread()</div><div class=\"TTSummary\">Stops the main thread, canceling all reading and writing</div></div>",227:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype227\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> rawByteMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">final</span></td></tr></table></div><div class=\"TTSummary\">Puts the connection into &quot;Raw Byte Mode.&quot;  &quot;Raw Byte Mode&quot; stops the data from being sent/parsed from any attached devices (BaseStation, InertialNode, etc.)&nbsp; and instead sends all data into a raw circular data buffer that can be accessed by calling getRawBytes on this Connection object.&nbsp; Disabling this mode will start sending all data back to the previous attached device, if still available.</div></div>",228:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype228\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> rawByteMode() <span class=\"SHKeyword\">final</span></div><div class=\"TTSummary\">Checks if raw byte mode is enabled (true) or disabled (false)</div></div>",229:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype229\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> getRawBytes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">bytes,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName\">timeout&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName\">maxBytes&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName\">minBytes&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">final</span></td></tr></table></div><div class=\"TTSummary\">Gets all of the raw bytes that are available that have been collected when the Connection is in &quot;Raw Byte Mode.&quot;&nbsp; If the Connection has not been put into &quot;Raw Byte Mode&quot; by calling rawByteMode, no data can be retrieved from this function.</div></div>",230:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype230\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> debugMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">final</span></td></tr></table></div><div class=\"TTSummary\">Puts the connection into &quot;Debug Mode.&quot;  &quot;Debug Mode Mode&quot; adds an additional container that gets filled when any write or read operations occur.&nbsp; Once debug mode is enabled, you can access this data with the getDebugData function.&nbsp; This does not interfere with standard data collection.</div></div>",231:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype231\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> debugMode() <span class=\"SHKeyword\">final</span></div><div class=\"TTSummary\">Checks if debug mode is enabled (true) or disabled (false)</div></div>",232:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype232\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> getDebugData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ConnectionDebugDataVec&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">timeout</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">final</span></td></tr></table></div><div class=\"TTSummary\">Gets the ConnectionDebugData that have been collected when the Connection is in &quot;Debug Mode.&quot;&nbsp; If the Connection has not been put into &quot;Debug Mode&quot; by calling debugMode, no data can be retrieved from this function.</div></div>",233:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype233\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> collectRawData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">The function to be sent to the communication object to parse data for &quot;Raw Byte Mode.&quot;</div></div>",234:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype234\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> collectDebugData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td></td><td class=\"PName last\">isRead</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">The function to be sent to the communication object to parse data for &quot;Debug Mode.&quot;</div></div>"});