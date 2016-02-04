NDSummary.OnToolTipsLoaded("File:Communication/BoostCommunication.h",{148:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype148\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">template</span> &lt;typename IO_Object&gt;</div><div class=\"CPName\">BoostCommunication</div></div></div><div class=\"TTSummary\">The BoostCommunication object that is used for actual read/write communication for all Connection objects</div></div>",150:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype150\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BoostCommunication(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">unique_ptr&lt;boost::asio::io_service&gt;&nbsp;</td><td class=\"PName last\">ioService,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">unique_ptr&lt;IO_Object&gt;&nbsp;</td><td class=\"PName last\">ioObj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Initializes the BoostCommunication object</div></div>",151:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype151\" class=\"NDPrototype NoParameterForm\">~BoostCommunication()</div><div class=\"TTSummary\">Destroys the BoostCommunication object</div></div>",153:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype153\" class=\"NDPrototype NoParameterForm\">std::unique_ptr&lt;boost::asio::io_service&gt; m_ioService</div><div class=\"TTSummary\">Boost io_service needed in communication</div></div>",154:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype154\" class=\"NDPrototype NoParameterForm\">std::unique_ptr&lt;IO_Object&gt; m_ioObject</div><div class=\"TTSummary\">Boost io_object used to communicate (serial_port, ip::tcp::socket, etc.)</div></div>",155:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype155\" class=\"NDPrototype NoParameterForm\">DataBuffer m_readBuffer</div><div class=\"TTSummary\">The DataBuffer to hold all the bytes read in</div></div>",156:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype156\" class=\"NDPrototype NoParameterForm\">BufferWriter m_bufferWriter</div><div class=\"TTSummary\">The BufferWriter used to write bytes to the DataBuffer</div></div>",157:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype157\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">std::<span class=\"SHKeyword\">function</span>&lt;<span class=\"SHKeyword\">void</span>(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">DataBuffer&amp;</td></tr></table></td><td class=\"PAfterParameters\">)&gt; m_parseDataFunction</td></tr></table></div><div class=\"TTSummary\">The function to send all the read in data to. If null, the data will be thrown out.</div></div>",158:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype158\" class=\"NDPrototype NoParameterForm\">std::recursive_mutex m_parseFunctionMutex</div><div class=\"TTSummary\">The mutex used to access/change the parse data function.</div></div>",160:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype160\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> write(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">vector&lt;<span class=\"SHKeyword\">uint8</span>&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Uses boost to write bytes to the io_object. Blocks until the write completes</div></div>",161:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype161\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> clearBuffer()</div><div class=\"TTSummary\">Clears the read buffer.</div></div>",162:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype162\" class=\"NDPrototype NoParameterForm\">std::size_t byteReadPos() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the read position from the byte buffer.</div></div>",163:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype163\" class=\"NDPrototype NoParameterForm\">std::size_t byteAppendPos() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the append position from the byte buffer.</div></div>",164:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype164\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> startReadLoop()</div><div class=\"TTSummary\">Starts the main read loop that reads in all data using boost</div></div>",165:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype165\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> readSome()</div><div class=\"TTSummary\">Performs the actual port read of bytes.</div></div>",166:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype166\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> readLoopHandler(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> boost::system::</td><td class=\"PType\">error_code&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">error,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td></td><td class=\"PName last\">bytes_transferred</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">The read handler for the read loop, called when data comes in or the read operation has been canceled</div></div>",167:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype167\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> stopIoService()</div><div class=\"TTSummary\">Stops the current boost::asio::io_service so no more reads or writes will happen</div></div>",168:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype168\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> stopIoServiceError(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">errorCode</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Stops the current boost::asio::io_service due to an error</div></div>",169:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype169\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setParseFunction(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">function</span>&lt;<span class=\"SHKeyword\">void</span>(DataBuffer&amp;)&gt;&nbsp;</td><td class=\"PName last\">fn</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the function to be called when data is read in.</div></div>"});