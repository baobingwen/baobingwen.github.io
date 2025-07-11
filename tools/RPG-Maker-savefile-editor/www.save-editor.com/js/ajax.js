
//	{
//	var method= 'POST';// 送信形式 (GET・POST)
//	var url   = 'http://～';// 送信先 (CGIだと文字化けする、HTMLだと文字化けしない)
//	var query = '?mode=get'; url = url + query;
//	var data  = '';// 送信データ (POST)
//	setHttpRequestData( data, method, url, true );// Ajax (送信データ, 送信形式, 送信先, 非同期フラグ)
//	}


 // XMLHttpRequestオブジェクト生成
 function setAjaxObject(){// Ajax (XHR)
	if(window.ActiveXObject){// Win IE用
		try {
			return new ActiveXObject("Msxml2.XMLHTTP");// MSXML2以降用
		} catch (e) {
			try {
				return new ActiveXObject("Microsoft.XMLHTTP");// 旧MSXML用
			} catch (e2) {
				return null;
			};
		};
	} else if(window.XMLHttpRequest){
		return new XMLHttpRequest();// Win IE以外のXMLHttpRequestオブジェクト実装ブラウザ用
	} else {
		return null;
	};
 };//


 // 接続先に要求して受信内容を確認 (リクエスト処理)
 function setHttpRequestData( data, method, url, async, result ) {// Ajax (XHR)
	// XMLHttpRequestオブジェクト生成
	var obj = setAjaxObject();

		// 受信時に起動するイベント
		obj.onreadystatechange = function() {

			if( obj.readyState==4 && obj.status==200 ){// readyState値は4で受信完了、status値は200でOK
				setHttpResponseData( obj, result );// コールバック関数
			}else if( obj.status==404 || obj.status==500 || obj.status==503 ){//
				setHttpRequestError('error '+ obj.status, result );// サーバーエラー (接続エラー)
			};
		};
		// open メソッド
		obj.open( method, url, async );
		// リクエストヘッダー設定
		obj.setRequestHeader('User-Agent','AJAX/'+ navigator.userAgent);//
		// send メソッド
		obj.send( data );
 };//


 function setHttpRequestError( error, result ) {// Ajax (XHR)
	alert('Error : '+ result );// test
	setAjaxError( error, result );
 };//


 // コールバック関数 (レスポンス処理)
 function setHttpResponseData( obj, result ) {// Ajax (XHR)

	var data = obj.responseText;// 取得データ

	try {//
	//	alert( data );// test
		eval( data );// 取得データのコードを実行

	} catch ( err ){// 例外 (エラー検知)
		alert( 'Error (Ajax) : '+ err );
	} finally {// 終了
	};
 };//


 function getAjaxParams( qs ) {
	if (qs) {
		var qsa=qs.substring(1).split('&');
		var params={};
		for(var i=0, len=qsa.length; i<len; i++) {
			var pair=qsa[i].split('=');
			params[pair[0]]=decodeURIComponent(pair[1]);// UTF-8
		};
		return params;
	};
	return '';
//	return null;
 };//

