

 // ファイル読み込み (FileAPI)

 window.addEventListener('load',function(){

    document.getElementById('input_file').addEventListener('change', function(event){

	// 選択されたファイルにアクセス
	var files = document.getElementById('input_file').files;

	var file = files[0];// 0番目のファイル

	var data = new FileReader();// FileReaderを生成

	if( document.getElementById('id_select_file_txt').checked == true ){

		if(       document.getElementById('id_character_code').value =='utf8' ){
			data.readAsText(file);// ファイルをテキストで読む
		}else if( document.getElementById('id_character_code').value =='sjis' ){
			data.readAsArrayBuffer(file);// ファイルをバイナリで読む
		}else{
			data.readAsText(file);// ファイルをテキストで読む
		};
	}else{
	//	data.readAsBinaryString(file);// ファイルをバイナリで読む (IE未対応)
		data.readAsArrayBuffer(file);// ファイルをバイナリで読む
	};

	// 読込完了時の処理
	data.addEventListener('load', function(event){
		var data = event.target.result;// バイナリデータを取得

		if( file.size > 1000000 ){
			if( window.confirm('ファイルの容量が大きいですが、読み込みを実行しますか？') ){
			}else{
				return;
			};
		};

		if( document.getElementById('id_select_file_txt').checked == true ){

			// 文字コード SJIS
			if(       document.getElementById('id_character_code').value =='utf8' ){
			}else if( document.getElementById('id_character_code').value =='sjis' ){
				document.getElementById('input_file_code').value ='sjis';
				document.getElementById('input_file_type').value ='txt';
				document.getElementById('upload_file_name').value = file.name;
				setJavaScriptFileCcharacterCcodeConvertAjax( data );
				exit;
			}else{
			};

			//文字コード UTF-8
			document.getElementById('input_file_code').value ='utf8';
			document.getElementById('input_file_type').value ='txt';
			document.getElementById('output_file').value = data;// テキスト
		}else{
			document.getElementById('input_file_type').value ='bin';
			setJavaScriptOutputFileBinary( data );// バイナリ
		};

		document.getElementById('upload_file_name').value = file.name;

	}, true);

	// エラー時の処理
	data.addEventListener('error', function(event){
		alert('ERROR : ファイル読み込み中にエラーが発生しました');
	}, true);
    }, true);

 }, true);

 // バイナリデータを出力
 function setJavaScriptOutputFileBinary( data ){

	data = setJavaScriptFileBinToHex( data );// 変換 (バイナリ→16進数)

	document.getElementById('output_file').value = data;
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
	set = set.toUpperCase();// 変換 (大文字化)
	return set;
 };//

 // 読込
 function setJavaScriptFileRead(){
	return document.getElementById('output_file').value;
 };//

 // 書換
 function setJavaScriptFileRewrite( data ){
	document.getElementById('output_file').value = data;
 };//

 // 実行
 function setJavaScriptRun(){
	var script = document.getElementById('input_script').value;

	try {
		var data = setJavaScriptFileRead();// ファイル読込

		if( data.length==0 ){
			if( window.confirm('ファイルを取得できませんでした。\n\nこのまま実行しますか？') ){
			}else{
				return;
			};
		}else{
		}

		eval( script );

		data = setJavaScript( data );

		setJavaScriptFileRewrite( data );// ファイル書換

		alert('実行しました');
	} catch ( err ){
		alert('ERROR\n\n'+ err );
	} finally {
	};
 };//

 // ダウンロード
 function setJavaScriptFileDownload(){
	if( document.getElementById('output_file').value ){
		document.form_output.submit();
	}else{
		alert('ERROR : NO FILE');
	};
 };//

 // 文字コード変換
 function setJavaScriptFileCcharacterCcodeConvertAjax( file ){

//	file = encodeURIComponent( file );
//	file = EscapeUTF8( file );
//	file = EscapeSJIS( file );

	file = setJavaScriptFileBinToHex( file );// 変換 (バイナリ→16進数)

	var method= 'POST';// 送信形式 (GET・POST)
	var url   = 'wse_javascript_run_character_code_convert.cgi';// 送信先 (CGIだと文字化けする、HTMLだと文字化けしない)
	var query = '?mode=get'; url = url + query;
	var data  = 'file_data='+ file;// 送信データ (POST)
	var result= 'sjis';
	setCcharacterCcodeConvertRequestData( data, method, url, true, result );// Ajax (送信データ, 送信形式, 送信先, 非同期フラグ)
	exit;
 };//

