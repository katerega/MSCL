NDSummary.OnToolTipsLoaded("CClass:Matrix",{7208:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7208\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Matrix</div></div></div><div class=\"TTSummary\">Represents a Matrix of values (varying size)</div></div>",7210:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7210\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Matrix(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName last\">rows,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName last\">columns,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">ValueType&nbsp;</td><td></td><td class=\"PName last\">storedAs,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ByteStream&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Matrix object given its size and data</div></div>",7212:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7212\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_numRows</div><div class=\"TTSummary\">The number of rows in the Matrix</div></div>",7213:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7213\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_numColumns</div><div class=\"TTSummary\">The number of columns in the Matrix</div></div>",7214:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7214\" class=\"NDPrototype NoParameterForm\">ByteStream m_data</div><div class=\"TTSummary\">A vector of vectors making the matrix that contains all the data values</div></div>",7215:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7215\" class=\"NDPrototype NoParameterForm\">ValueType m_valuesType</div><div class=\"TTSummary\">How each value within the Matrix is stored</div></div>",7216:"<div class=\"NDToolTip TVariable LC\"><div class=\"TTSummary\">The size of each values\' type within the Matrix</div></div>",7218:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7218\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> getBytePos(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">row,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">col</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the byte position to read in data from the m_data ByteStream</div></div>",7219:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7219\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> checkIndex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">row,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">col</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks that the given row and column indices (0-based) are within range, throwing an exception if not</div></div>",7220:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7220\" class=\"NDPrototype NoParameterForm\">ValueType valuesType() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets how each value within the Matrix is stored</div></div>",7221:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7221\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> rows() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of rows in the Matrix</div></div>",7222:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7222\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> columns() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of columns in the Matrix</div></div>",7223:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7223\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">double</span> as_doubleAt(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">row,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">column</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the value stored at the given row and column (0-based), as an 8-byte double</div></div>",7224:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7224\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> as_floatAt(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">row,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">column</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the value stored at the given row and column (0-based), as a 4-byte float</div></div>",7225:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7225\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> as_uint16At(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">row,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">column</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the value stored at the given row and column (0-based), as a 2-byte unsigned integer</div></div>",7226:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7226\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint8</span> as_uint8At(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">row,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">column</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the value stored at the given row and column (0-based), as a 1-byte uint8</div></div>",7227:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7227\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> str() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates a string from the Matrix</div></div>"});