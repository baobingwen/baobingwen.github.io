
 // ファイル読み込み (FileAPI)
 window.addEventListener('load',function(){

    document.getElementById('input_save').addEventListener('change', function(event){

	// 選択されたファイルにアクセス
	var files = document.getElementById('input_save').files;

	var file = files[0];// 0番目のファイル

	var data = new FileReader();// FileReaderを生成

//	data.readAsBinaryString(file);// ファイルをバイナリで読む (IE未対応)
	data.readAsArrayBuffer(file);// ファイルをバイナリで読む

	// 読込完了時の処理
	data.addEventListener('load', function(event){
		var data = event.target.result;// バイナリデータを取得

		setSaveNameCheck( file.name );// ファイル名を確認
	}, true);

	// エラー時の処理
	data.addEventListener('error', function(event){
		alert('ERROR : ファイル読み込み中にエラーが発生しました');
	}, true);
    }, true);


    document.getElementById('input_param_sfo').addEventListener('change', function(event){

	// 選択されたファイルにアクセス
	var files = document.getElementById('input_param_sfo').files;

	var file = files[0];// 0番目のファイル

	var data = new FileReader();// FileReaderを生成

//	data.readAsBinaryString(file);// ファイルをバイナリで読む (IE未対応)
	data.readAsArrayBuffer(file);// ファイルをバイナリで読む

	// 読込完了時の処理
	data.addEventListener('load', function(event){
		var data = event.target.result;// バイナリデータを取得

		setParamSfoNameCheck( file.name, file.size );// ファイル名を確認

		setParamSfoDataCheck( data );// バイナリデータを確認
	}, true);

	// エラー時の処理
	data.addEventListener('error', function(event){
		alert('ERROR : ファイル読み込み中にエラーが発生しました');
	}, true);
    }, true);

 }, true);


 // ファイル名を確認
 function setSaveNameCheck( name ){
	if( name.match(/^PARAM.*?\.SFO|^PARAM.*?\.PFD/i) || name.match(/\.AT3$|\.PNG$|\.JPG$/i) ){
		alert('\nCAUTION\n\nPlease select SAVE DATA\n\nセーブデータのファイルを選択して下さい\n\n');
	}else if( name.match(/./) ){
	}else{
	};
 };//


 // ファイル名を確認
 function setParamSfoNameCheck( name, size ){
	if( name.match(/^PARAM.*?\.SFO/i) && size == 4912 ){
	}else if( name.match(/./) ){
		alert('\nCAUTION\n\nPlease select PARAM.SFO\n\nPARAM.SFOを選択して下さい\n\n');
	}else{
	};
 };//


 // バイナリデータを確認
 function setParamSfoDataCheck( data ){

	data = setJavaScriptFileBinToHex( data );// 変換 (バイナリ→16進数)

	data = data.toUpperCase();// 変換 (大文字化)

	var ver = data.substring(4528*2,4528*2+2);// 0x11B0

	var id=document.getElementById('id_flag_supported_ver');

	if( ver.match(/41/) ){
		id.value ='OK';
	}else{
		id.value ='NG';
	};

 //	alert( ver +' '+ id.value );// test
 };//


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
	return set;
 };//

