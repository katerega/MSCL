NDSummary.OnToolTipsLoaded("CClass:ByteStream",{4242:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4242\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ByteStream</div></div></div><div class=\"TTSummary\">A stream of bytes that is used to easily store and retrieve data</div></div>",4244:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4244\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ByteStream(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">bigEndian</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Default constructor to create a ByteStream object</div></div>",4245:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4245\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> ByteStream(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Bytes&nbsp;</td><td class=\"PName\">bytesToCopy,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">bigEndian</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructor to create a ByteStream object, passing in the bytes to store in the stream</div></div>",4246:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4246\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> ~ByteStream()</div><div class=\"TTSummary\">Default destructor for the ByteStream object</div></div>",4248:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4248\" class=\"NDPrototype NoParameterForm\">Bytes m_bytes</div><div class=\"TTSummary\">The data stream object that holds all the bytes</div></div>",4249:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4249\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_bigEndian</div><div class=\"TTSummary\">Whether the ByteStream is big endian (true) or little endian (false)</div></div>",4251:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Accesses a single byte of the ByteStream</div></div>",4252:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Checks that two ByteStream objects are equal by comparing their data vectors</div></div>",4254:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4254\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> append_uint8(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Appends a 1-byte unsigned integer to the byte stream</div></div>",4255:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4255\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> append_int16(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Appends a 2-byte signed integer to the byte stream</div></div>",4256:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4256\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> append_uint16(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Appends a 2-byte unsigned integer to the byte stream</div></div>",4257:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4257\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> append_uint32(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Appends a 4-byte unsigned integer to the byte stream</div></div>",4258:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4258\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> append_float(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Appends a 4-byte float to the byte stream</div></div>",4259:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4259\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> append_double(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Appends an 8-byte double to the byte stream</div></div>",4260:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4260\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> append_string(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">str</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Appends a string to the byte stream.</div></div>",4261:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4261\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> appendBytes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">bytes</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Appends a vector of bytes (uint8) to the end of the current ByteStream</div></div>",4262:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4262\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> appendByteStream(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ByteStream&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">otherStream</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Appends the entire contents of a ByteStream to the end of the current ByteStream</div></div>",4263:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4263\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int8</span> read_int8(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">position</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads a 1-byte signed integer from the byte stream</div></div>",4264:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4264\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint8</span> read_uint8(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">position</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads a 1-byte unsigned integer from the byte stream</div></div>",4265:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4265\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int16</span> read_int16(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">position</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads a 2-byte signed integer from the byte stream</div></div>",4266:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4266\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> read_uint16(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">position</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads a 2-byte unsigned integer from the byte stream</div></div>",4267:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4267\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> read_uint32(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">position</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads a 4-byte unsigned integer from the byte stream</div></div>",4268:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4268\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> read_float(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">position</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads a 4-byte float from the byte stream</div></div>",4269:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4269\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">double</span> read_double(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">position</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads an 8-byte double from the byte stream</div></div>",4270:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4270\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">std::<span class=\"SHKeyword\">string</span> read_string(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">position,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">length</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads a string of the specified length from the byte stream</div></div>",4271:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4271\" class=\"NDPrototype NoParameterForm\">Bytes&amp; data()</div><div class=\"TTSummary\">Gets the byte stream as a vector of bytes (Bytes)</div></div>",4272:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4272\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Bytes&amp; data() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the byte stream as a vector of bytes (Bytes)</div></div>",4273:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4273\" class=\"NDPrototype NoParameterForm\">std::size_t size() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the size of the byte stream (equivalent of std::vector.size())</div></div>",4274:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4274\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> clear()</div><div class=\"TTSummary\">Clears the byte stream (equivalent of std::vector.clear())</div></div>",4275:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4275\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> empty()</div><div class=\"TTSummary\">Checks whether the vector is empty. (equivalent of std::vector::empty())</div></div>",4276:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4276\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> resize(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">size</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Resizes the byte stream (equivalent of std::vector.resize())</div></div>",4277:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4277\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void set</span>(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">bytes</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the underlying bytes to the given Bytes.</div></div>",4278:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4278\" class=\"NDPrototype NoParameterForm\">Bytes::iterator begin()</div><div class=\"TTSummary\">Gets an iterator referring to the first element in the ByteStream (equivalent of std::vector::begin())</div></div>",4279:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4279\" class=\"NDPrototype NoParameterForm\">Bytes::iterator end()</div><div class=\"TTSummary\">Gets an iterator referring to the &quot;past-the-end&quot; element in the ByteStream. (equivalent of std::vector::begin())</div></div>",4280:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4280\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> calculateSimpleChecksum(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">from,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">to</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Calculates the simple checksum (simple addition of bytes)on the ByteStream</div></div>",4281:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4281\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> calculateFletcherChecksum(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">from,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">to</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Calculates the Fletcher checksum (position dependent checksum) on the ByteStream</div></div>",4282:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4282\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> verifyBytesInStream(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">position,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">length</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks that the current bytestream can read the requested data</div></div>"});