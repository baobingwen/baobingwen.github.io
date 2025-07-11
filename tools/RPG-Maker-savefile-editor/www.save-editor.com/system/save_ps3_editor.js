
 // ファイル読み込み (FileAPI)

 window.addEventListener('load',function(){

  try {// 通常

    document.getElementById('input_file_param_pfd').addEventListener('change', function(event){

	// 選択されたファイルにアクセス
	var files = document.getElementById('input_file_param_pfd').files;

	var file = files[0];// 0番目のファイル

	var data = new FileReader();// FileReaderを生成

 //	data.readAsBinaryString(file);// ファイルをバイナリで読む (IE未対応)
	data.readAsArrayBuffer(file);

	// 読込完了時の処理
	data.addEventListener('load', function(event){
		var data = event.target.result;// バイナリデータを取得
		setSaveInputFileParamPfd( data, file.name );
		// file.name;//
	}, true);

	// エラー時の処理
	data.addEventListener('error', function(event){
		alert('ERROR\n\nCould not load file\n\nファイル読み込み中にエラーが発生しました\n\n');
	}, true);
    }, true);

  } catch ( err ){// 例外 (エラー検知)
  } finally {// 終了
  };

  try {// 通常

    document.getElementById('input_file_param_sfo').addEventListener('change', function(event){

	// 選択されたファイルにアクセス
	var files = document.getElementById('input_file_param_sfo').files;

	var file = files[0];// 0番目のファイル

	var data = new FileReader();// FileReaderを生成

 //	data.readAsBinaryString(file);// ファイルをバイナリで読む (IE未対応)
	data.readAsArrayBuffer(file);

	// 読込完了時の処理
	data.addEventListener('load', function(event){
		var data = event.target.result;// バイナリデータを取得
		setSaveInputFileParamSfo( data, file.name );
		// file.name;//
	}, true);

	// エラー時の処理
	data.addEventListener('error', function(event){
		alert('ERROR\n\nCould not load file\n\nファイル読み込み中にエラーが発生しました\n\n');
	}, true);
    }, true);

  } catch ( err ){// 例外 (エラー検知)
  } finally {// 終了
  };

  try {// 通常

    document.getElementById('input_file_param_sfo_origin').addEventListener('change', function(event){

	// 選択されたファイルにアクセス
	var files = document.getElementById('input_file_param_sfo_origin').files;

	var file = files[0];// 0番目のファイル

	var data = new FileReader();// FileReaderを生成

 //	data.readAsBinaryString(file);// ファイルをバイナリで読む (IE未対応)
	data.readAsArrayBuffer(file);

	// 読込完了時の処理
	data.addEventListener('load', function(event){
		var data = event.target.result;// バイナリデータを取得
		setSaveInputFileParamSfoOrigin( data, file.name );
		// file.name;//
	}, true);

	// エラー時の処理
	data.addEventListener('error', function(event){
		alert('ERROR\n\nCould not load file\n\nファイル読み込み中にエラーが発生しました\n\n');
	}, true);
    }, true);

  } catch ( err ){// 例外 (エラー検知)
  } finally {// 終了
  };

  try {// 通常

    document.getElementById('input_file_games_conf').addEventListener('change', function(event){

	// 選択されたファイルにアクセス
	var files = document.getElementById('input_file_games_conf').files;

	var file = files[0];// 0番目のファイル
	var data = new FileReader();// FileReaderを生成
 //	data.readAsBinaryString(file);// ファイルをバイナリで読む (IE未対応)
 //	data.readAsArrayBuffer(file);// ファイルを配列で読む
	data.readAsText(file);// ファイルをテキストで読む

	// 読込完了時の処理
	data.addEventListener('load', function(event){
		var data = event.target.result;// テキストデータを取得
		setSaveInputFileGamesConf( data, file.name );
		// file.name;//
	}, true);

	// エラー時の処理
	data.addEventListener('error', function(event){
		alert('ERROR\n\nCould not load file\n\nファイル読み込み中にエラーが発生しました\n\n');
	}, true);
    }, true);

  } catch ( err ){// 例外 (エラー検知)
  } finally {// 終了
  };

 }, true);


 // ファイル入力 (読み込み) (フォーム表示)
 function setSaveFormGamesConfOpen() {
	var id = document.getElementById('set_form_games_conf');
	var button = document.getElementById('set_games_conf_button');
	if( id.style.display == 'none' ){
		id.style.display='';
		button.src ='../img/button_up.gif';
	}else{
		id.style.display='none';
		button.src ='../img/button_down.gif';
	};
 };


 // ファイル入力 (読み込み) (games.conf)
 function setSaveInputFileGamesConf( data, name ) {
	if( name == 'games.conf' ){
	}else{
		alert('ERROR : games.conf');// test
	};

	var title_id = document.getElementById('input_title_id').value;// 代入 (タイトルID)

	if( title_id =='ERROR' || title_id =='NONE' || title_id =='NG' ){
		alert('PARAM.SFO (title ID) is missing\n\nPARAM.SFO(タイトルID)がありません\n\n');
		document.getElementById('input_games_conf').value = data;// 代入
		return;
	}else if( title_id ){
	}else{
		alert('PARAM.SFO (title ID) is missing\n\nPARAM.SFO(タイトルID)がありません\n\n');
		document.getElementById('input_games_conf').value = data;// 代入
		return;
	};

	var secure_file_id ='';//
	try {// 通常処理
		secure_file_id = setSaveInputFileGamesConfSecureFileId( data, title_id );// 抽出 (Secure File Id)
	} catch ( err ){// 例外処理 (エラー検知)
	} finally {// 終了処理
	};

	if( secure_file_id ){
	}else{
		alert('Secure File ID not found\n\nSecure File IDが見つかりませんでしたので\n手動でSecure File IDを入力して下さい。\n\n');// test
		return;
	};

	document.getElementById('input_secure_file_id').value = secure_file_id;// 代入 (Secure File Id)

//	alert( secure_file_id );// test (削除可)

//	alert('TEST : games.conf読込 (開発予定)');// test
 };

 // 抽出 (Secure File Id)
 function setSaveInputFileGamesConfSecureFileId( data, title_id ) {

	var data_array = data.split( title_id );// 分割

	var split_data ='secure_file_id:*=';//

	var title_id_array = data_array[1].split( split_data );// 分割

	var secure_file_id_array = title_id_array[1].split(/\r\n|\r|\n/);// 分割 (改行コード)

	var secure_file_id = secure_file_id_array[0];

//	alert( secure_file_id.length );// test

	if( secure_file_id.length == 32 ){
		// 正常値
	}else{
		// 不正値 (ERROR)
		secure_file_id ='';// 削除 (初期化)
	};

	return secure_file_id;
 };


 // ファイル入力 (読み込み) (SAVE DATA)
 function setSaveInputFileSaveData() {
	var element_file ='';
	try { 
		element_file = document.getElementById('input_file_save_data').files;
	//	alert( element_file[0].name );// test (ファイルネーム)
	//	alert( element_file[0].size );// test (ファイルサイズ)
	//	alert( element_file[0].type );// test (ファイルタイプ)
	} catch ( err ){ 
	} finally { 
	};

	var error_comment ='\n\nSelect a save file to modify\n\n改造するセーブデータを選択して下さい\n\n';

	      if( element_file[0].name.indexOf('PARAM.PFD')!=-1 ){ alert('ERROR : PARAM.PFD'+  error_comment );//
	}else if( element_file[0].name.indexOf('PARAM.SFO')!=-1 ){ alert('ERROR : PARAM.SFO'+  error_comment );//
	}else if( element_file[0].name.indexOf('SND0.AT3') !=-1 ){ alert('ERROR : SND0.AT3' +  error_comment );//
	}else if( 
		   element_file[0].name.indexOf('ICON0.PNG')!=-1 
		|| element_file[0].name.indexOf('PIC1.PNG')!=-1 
	){ 
		alert('ERROR : IMAGE FILE'+ error_comment );//
	}else if( 
		   element_file[0].name.indexOf('.zip')!=-1 
		|| element_file[0].name.indexOf('.ZIP')!=-1 
		|| element_file[0].name.indexOf('.rar')!=-1 
		|| element_file[0].name.indexOf('.RAR')!=-1 
	){ 
		alert('ERROR\n\nUnzip the file and input\n\n解凍後に入力して下さい\n\n');//
	}else if( element_file[0].name.match(/復号|decrypt/i) ){ alert('ERROR : Already decrypted\n\n復号化されています\n\n暗号化しているセーブデータを選択して下さい\n\n');//
	}else{
	};

	setSaveInputFileParamSfoTitleUnsupportedSize();// 未対応タイトル判別 (大容量)
 };


 // ファイル入力 (読み込み) (PARAM.PFD)
 function setSaveInputFileParamPfd( data, name ) {
	if( name == 'PARAM.PFD' ){
	}else if( name.indexOf('PARAM.PFD') != -1 ){
	}else{
		alert('ERROR\n\nPlease input PARAM.PFD\n\nPARAM.PFD を入力して下さい\n\n');//
		return;
	};
 };

 // ファイル入力 (読み込み) (PARAM.PFD)
 function setSaveInputFileParamPfdOrigin( data, name ) {
	if( name == 'PARAM.SFO' ){
	}else if( name.indexOf('PARAM.SFO') != -1 ){
	}else{
		alert('ERROR\n\nPlease input PARAM.SFO\n\nPARAM.SFO を入力して下さい\n\n');//
		return;
	};
 };

 // ファイル入力 (読み込み) (PARAM.SFO)
 function setSaveInputFileParamSfo( data, name ) {
	if( name == 'PARAM.SFO' ){
	}else if( name.indexOf('PARAM.SFO') != -1 ){
	}else{
		alert('ERROR\n\nPlease input PARAM.SFO\n\nPARAM.SFO を入力して下さい\n\n');//
		return;
	};

	data = setBaseChangeBinaryToString16( data );// 変換 (バイナリデータ→16進数)

	var title_id = setSaveInputFileParamSfoTitleId( data );// 抽出 (タイトルID)

//	alert( 'TITLE_ID : '+ title_id );// test

	document.getElementById('input_title_id').value = title_id;// 代入 (タイトルID)

	// 既に games.conf が読み込んである場合
	var games_conf = document.getElementById('input_games_conf').value;
	if( games_conf ){
		var secure_file_id = setSaveInputFileGamesConfSecureFileId( games_conf, title_id );// 抽出 (Secure File Id)

		document.getElementById('input_secure_file_id').value = secure_file_id;// 代入 (Secure File Id)
	}else{
		var flag_auto ='';
		if( document.getElementById('select_secure_file_id_auto').checked == true ){
			flag_auto = document.getElementById('select_secure_file_id_auto').value;
		};

		if( flag_auto == 'auto' ){
		}else{
			return;
		};

		var file_name ='';//
		try { 
			file_name = document.getElementById('input_file_save_data').files[0].name;
		} catch ( err ){ 
		} finally { 
		};
		try { 
			var select='';

			for ( var i=0, len=document.form_save_editor.select_file_name.length; i<len; i++ ){
				if( document.form_save_editor.select_file_name[i].checked == true ){
					select = document.form_save_editor.select_file_name[i].value;// フォーム radio
				};
			};

			if( select ){
				file_name = select;
				var array = file_name.split(/\/|\\/);// 分割
				file_name = array[array.length-1];
			};
		} catch ( err ){ 
		} finally { 
		};

		// Ajax
		var method = 'POST';// 送信形式 (GET・POST)
		var url    = '../system/save_ps3_editor_games_conf.cgi';// 送信先
		var query  = '?mode=get'; url = url + query;
		var data   = '';// 送信データ (POST)
		data += '&title_id=' + encodeURIComponent( title_id );//
		data += '&file_name='+ encodeURIComponent( file_name );//
		var result = 'games_conf';// レスポンスデータ受信後に渡す情報

		setHttpRequestData( data, method, url, true, result );// Ajax (送信データ, 送信形式, 送信先, 非同期フラグ)
	};

	document.getElementById('set_title_encrypt2').style.display ='none';// 二重暗号化タイトル非表示化
	document.getElementById('set_title_checksum').style.display ='none';// チェックサム修正不可タイトル非表示化
	setSaveInputFileParamSfoTitleEncrypt2( title_id );// 二重暗号化タイトル判別
	setSaveInputFileParamSfoTitleChecksum( title_id );// チェックサム修正不可タイトル判別
	setSaveInputFileParamSfoTitleUnsupported( title_id );// 未対応タイトル判別
 };


 // 抽出 (タイトルID)
 function setSaveInputFileParamSfoTitleId( data ) {

	var start = 2408*2;// 0x968
//	var end = 2416*2;// 0x970

	var data = data.substr( start, 9*2 );// TITLE_ID (PARAM.SFO) (OFFSET:0x24) (SIZE:0x09)

	var title_id ='';

	for( var i=0; i<9; i++ ){
		var str = data.substr( i*2, 2 );// 抽出

		str = parseInt( str, 16 );// 変換 (16進数→10進数)

		str = String.fromCharCode( str );// 変換 (ASCIIコード→文字列)

		title_id += String( str );// 代入
	};

	return title_id;
 };


 // 二重暗号化タイトル判別
 function setSaveInputFileParamSfoTitleEncrypt2( title_id ) {
	if( title_id.match(/Final Fantasy XIII|MRTC00003|BLUS31164|MRTC00003|BLJM67005|BCAS25005/i) 
	 || title_id.match(/Final Fantasy XIII-2|BCAS20224|BLES01269|BLUS30776|BLJM60382|NPJB00285|BLJM61073/i) 
	 || title_id.match(/LIGHTNING RETURNS|BLUS30416|NPUB31173|BLES01811|NPEB01321|BLJM60558|NPJB00326|BCAS20279|BCAS25002|NPUB90944/i) 
	 || title_id.match(/Metal Gear Solid 4 Database|NPUB90126|NPEB00027|NPJB90113/i) 
	 || title_id.match(/Metal Gear Solid 4|BLUS30109|BLUS30148|BLES00246|BLKS25001|BLJM67004|BLKS25002|BLJM67001|BLKS25003|BLJM57001|BLJM67003|BLJM67002|BLES82001|CEJH10000|CEJH10001|CEJH10002|BLAS55002|BLAS55004/i) 
	 || title_id.match(/Metal Gear Solid: HD Collection/i) 
	 || title_id.match(/METAL GEAR SOLID V: GROUND ZEROES|BLUS31369|NPUB31318|BLES01971|NPEB01889|BLAS50697|BLAS50707|BLJM61135|NPJB00396/i) 
	 || title_id.match(/METAL GEAR SOLID V: THE PHANTOM PAIN|NPEB02140|BLES02102|BLJM61247|NPJB00673/i) 
	 || title_id.match(/RESIDENT EVIL HD Remaster|BioHazard HD Remaster/i) 
	 || title_id.match(/RESIDENT EVIL 0 HD Remaster|BioHazard 0 HD Remaster/i) 
	 || title_id.match(/RESIDENT EVIL REVELATIONS 2|BioHazard REVELATIONS 2/i) 
	 || title_id.match(/DmC: Devil May Cry/i) 
	 || title_id.match(/YAKUZA 1 & 2 HD Edition|Ryu ga Gotoku 1 & 2 HD Edition|BLJM60471|NPJB00280/i) 
	 || title_id.match(/DYNASTY WARRIORS 8: Xtreme Legends|Shin Sangoku Musou 7: Xtreme Legends|NPUB31449|NPJB00510|BLJM61128|BLJM61129|BLAS50672|BLAS50673|BLAS50695|BLES02008|NPEB01970/i) 
	 || title_id.match(/Gran Turismo 6|GT Academy 2013|BCUS98269|BCUS98296|BCES01893|BCJS37015|BCJS37016|NPUA30127|NPUA81049|NPEA00502|NPEA90124|NPJA90251|NPHA80259|BCES01977|BCAS25018/i) 
	){
		document.getElementById('set_title_encrypt2').style.display ='block';// 二重暗号化タイトル表示
		document.getElementById('set_title_checksum').style.display ='none';// チェックサム修正不可タイトル非表示
	}else{
	};

	if( title_id.match(/Final Fantasy XIII|MRTC00003|BLUS31164|MRTC00003|BLJM67005|BCAS25005/i) 
	 || title_id.match(/Final Fantasy XIII-2|BCAS20224|BLES01269|BLUS30776|BLJM60382|NPJB00285|BLJM61073/i) 
	 || title_id.match(/LIGHTNING RETURNS|BLUS30416|NPUB31173|BLES01811|NPEB01321|BLJM60558|NPJB00326|BCAS20279|BCAS25002|NPUB90944/i) 
	 || title_id.match(/METAL GEAR SOLID V: GROUND ZEROES|BLUS31369|NPUB31318|BLES01971|NPEB01889|BLAS50697|BLAS50707|BLJM61135|NPJB00396/i) 
	 || title_id.match(/Metal Gear Solid 4 Database|NPUB90126|NPEB00027|NPJB90113/i) 
	 || title_id.match(/Metal Gear Solid 4|BLUS30109|BLUS30148|BLES00246|BLKS25001|BLJM67004|BLKS25002|BLJM67001|BLKS25003|BLJM57001|BLJM67003|BLJM67002|BLES82001|CEJH10000|CEJH10001|CEJH10002|BLAS55002|BLAS55004/i) 
	 || title_id.match(/METAL GEAR SOLID V: THE PHANTOM PAIN|NPEB02140|BLES02102|BLJM61247|NPJB00673/i) 
	){
		if( window.confirm('※ 未対応タイトルなのでセーブデータは改造できません。\n\nアカウントIDを書き換えるユーザーの変更であれば対応しています。\n\nアカウントID書換システムを表示しますか？') ){
			document.location ='save_ps3_account_id.html';
		}else{
		};
	}else{
	};
 };

 // チェックサム修正不可タイトル判別
 function setSaveInputFileParamSfoTitleChecksum( title_id ) {
	if( title_id.match(/Tales of Zestiria|BLJS93020/i) 
	 || title_id.match(/Sword Art Online Lost Song|BLJS10312/i) 
	 || document.getElementById('input_secure_file_id_x').value =='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' 
	){
		document.getElementById('set_title_checksum').style.display ='block';// チェックサム修正不可タイトル表示
		document.getElementById('set_title_encrypt2').style.display ='none';// 二重暗号化タイトル非表示

		if( window.confirm('※ 未対応タイトルなのでセーブデータは改造できません。\n\nアカウントIDを書き換えるユーザーの変更であれば対応しています。\n\nアカウントID書換システムを表示しますか？') ){
			document.location ='save_ps3_account_id.html';
		}else{
		};
	}else{
	};
 };

 // 未対応タイトル判別
 function setSaveInputFileParamSfoTitleUnsupported( title_id ) {
	var file_size_save_data = 0;
	try { 
		file_size_save_data = document.getElementById('input_file_save_data').files[0].size;// セーブデータ容量
	} catch ( err ){ 
	} finally { 
	};
	if( title_id.match(/Dragon Quest Builders|BLJM61311|NPJB00765/i) ){
		// ドラゴンクエストビルダーズ アレフガルドを復活せよ
		if( file_size_save_data >= 1000 && file_size_save_data <= 20000000 ){
		}else if( file_size_save_data >= 16000000 ){
			alert('容量が大き過ぎるのでブラウザーがフリーズする可能性があります\n\n'+ '(容量: '+ file_size_save_data +' bytes)' );
		}else{
		//	alert('容量が大き過ぎるとブラウザーがフリーズする可能性があります' );
		};
	}else{
	};
 };

 // 未対応タイトル判別 (大容量)
 function setSaveInputFileParamSfoTitleUnsupportedSize() {
	var file_size_save_data = 0;
	try { 
		file_size_save_data = document.getElementById('input_file_save_data').files[0].size;// セーブデータ容量
	} catch ( err ){ 
	} finally { 
	};
	if( file_size_save_data >= 10000000 ){
		alert('容量が大き過ぎるので処理できない可能性があります\n\n'+ '(容量: '+ file_size_save_data +' bytes)' );
	}else{
	};
 };


 // 自動入力設定
 function setSaveSelectSecureFileIdAuto( lang ){

	if( document.getElementById('input_secure_file_id').placeholder.match(/./) ){
		return;
	};

	if( document.getElementById('select_secure_file_id_auto').checked == true ){

		if( navigator.userAgent.match(/MSIE [6-9]\.[0-9]/) ){
			alert('ERROR：非対応ブラウザーなので自動入力できません');
		//	alert('ERROR：非対応ブラウザー');
		//	document.getElementById('select_secure_file_id_auto').checked = false;
			return;
		}else if( 
		   navigator.userAgent.match(/Android/) && navigator.userAgent.match(/Chrome|Firefox|Opera/) 
		|| navigator.userAgent.match(/Android [5-9]\.[0-9]|Android [1-9][0-9]/) 
		){
		}else if( navigator.userAgent.match(/Android [1-4]\.[0-9]/) ){
			alert('自動入力に非対応の可能性があります');
		//	document.getElementById('select_secure_file_id_auto').checked = false;
		//	return;
		}else{
		};

		if( document.getElementById('input_title_id').value ){
			if( lang.match(/en/i) ){
				document.getElementById('input_secure_file_id').placeholder ='Automatic input';
			}else{
				document.getElementById('input_secure_file_id').placeholder ='自動入力';
			};
		}else{
			if( lang.match(/en/i) ){
				document.getElementById('input_secure_file_id').placeholder ='Auto input (After input PARAM.SFO)';
			}else{
				document.getElementById('input_secure_file_id').placeholder ='自動入力 ( PARAM.SFOを選択後 )';
			};
		//	alert('自動入力を設定しました');// test
		};
	}else{
		document.getElementById('input_secure_file_id').placeholder ='';

		if( document.getElementById('input_title_id').value ){
		}else{
			alert('自動入力を解除しました');//
		};
	};
 };//
 window.onload = function() {
	if( navigator.userAgent.match(/MSIE [6-9]\.[0-9]/) ){
		document.getElementById('select_secure_file_id_auto').checked = false;
	}else if( 
	   navigator.userAgent.match(/Android/) && navigator.userAgent.match(/Chrome|Firefox|Opera/) 
	|| navigator.userAgent.match(/Android [5-9]\.[0-9]|Android [1-9][0-9]/) 
	){
		if( window.location.hostname.match(/www.save-editor.com/i) ){
			setSaveSelectSecureFileIdAuto('en');
		}else{
			setSaveSelectSecureFileIdAuto('ja');
		};
	}else if( navigator.userAgent.match(/Android [1-4]\.[0-9]/) ){
		document.getElementById('select_secure_file_id_auto').checked = false;
	}else{
		if( window.location.hostname.match(/www.save-editor.com/i) ){
			setSaveSelectSecureFileIdAuto('en');
		}else{
			setSaveSelectSecureFileIdAuto('ja');
		};
	};
 };


 // バイナリデータから16進数に変換
 function setBaseChangeBinaryToString16( get_data ){
	var set_string ='';
	var u8array = new Uint8Array( get_data );
	for(var i=0, len=u8array.length; i<len; i++){
		var str = u8array[i].toString(16);// 16進数に変換
		var num = parseInt( u8array[i] );// 型変換 (文字列→整数化)
		if( num <= 15 ){ str ='0'+ str; };// 10進数で15以下の数字を、0を付け加えて2桁の16進数にする
		set_string += str;//
	};
	return set_string;
 };//


