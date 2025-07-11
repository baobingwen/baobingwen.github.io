
 // バイナリデータから16進数に変換
 function setJavaScriptFileBinToHex( data ){
	var set ='';
	var u8array = new Uint8Array( data );
	for( var i=0, len=u8array.length; i<len; i++ ){
		var str = u8array[i].toString(16);// 変換 (バイナリ→16進数)
		var num = parseInt( u8array[i] );// 型変換 (文字列→整数化)
		if( num <= 15 ){ str ='0'+ String( str ); };// 10進数で15以下の場合に、16進数に0を付け加えて2桁にする
		set += str;
	};
	set = set.toUpperCase();// 変換 (大文字化)
	return set;
 };//

