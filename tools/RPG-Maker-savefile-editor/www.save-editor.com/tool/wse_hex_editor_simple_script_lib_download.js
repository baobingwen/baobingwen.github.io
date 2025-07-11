
 function setDataDownload( data, file_name, type ){

	try{
		if( data.length > 10000000 ){// 10MB以上
		}else{
			var nintendo_console =['sfc','gba','ds'];
			for( var i=0; i<nintendo_console.length; i++ ){
				var console = nintendo_console[i];
				var title = document.getElementById('id_select_checksum_'+ console ).options[document.getElementById('id_select_checksum_'+ console ).selectedIndex].value;
				if( title.match(/./) && document.getElementById('id_radio_checksum_'+ console ).checked == true ){
				//	alert('test nintendo');
					setDataUpload( data, file_name, 'nintendo' );
					return;
				};
			};
		};
	}catch( err ){
		//	alert('test err: '+ err );
	}finally{
	};

	try{
		if( data.length > 10000000 ){// 10MB以上
		}else{
			var ps1 = document.getElementById('id_select_checksum_ps1').options[document.getElementById('id_select_checksum_ps1').selectedIndex].value;
			if( ps1.match(/./) && document.getElementById('id_radio_checksum_ps1').checked == true || document.getElementById('id_checkbox_hash_fix').checked == true ){
			//	alert('test ps');
				setDataUpload( data, file_name, 'ps' );
				return;
			};
		};
	}catch( err ){
		//	alert('test err: '+ err );
	}finally{
	};

	var blob = new Blob( [data], { type: type || 'application/octet-stream' } );

	if( window.navigator.msSaveBlob ){
		// IE
		window.navigator.msSaveBlob( blob, file_name );
		window.navigator.msSaveOrOpenBlob( blob, file_name );
	}else{
		if( navigator.userAgent.match(/Trident|Edge|Chrome|Safari/) ){
		}else if( navigator.userAgent.match(/Windows/) && navigator.userAgent.match(/MSIE/) ){
			// IE11未満対策 (ダウンロード未対応の場合)
			alert('\nUNSUPPORTED BROWSER (DOWNLOAD ERROR)\n\n');
		}else{
		};

		// IE以外
		var a = document.createElement('a');
		a.href = URL.createObjectURL( blob );
		a.setAttribute('download', file_name );
		a.style.display ='none';
		document.body.appendChild(a);
		setTimeout( function(){
			a.click();
			document.body.removeChild(a);
			setTimeout( function(){ self.URL.revokeObjectURL(a.href); }, 200 );
		}, 100 );
	};
 };

 function setDataUpload( data, file_name, console ){

	// ファイルネーム

	file_name = file_name.replace(/</g, '&lt;');// 置換 (特殊文字)
	file_name = file_name.replace(/>/g, '&gt;');// 置換
	file_name = file_name.replace(/"/g, '&quot;');// 置換
	file_name = file_name.replace(/'/g, '&apos;');// 置換 

	document.getElementById('id_file_name').value = file_name;

	// ファイルデータ

	var set_data ='';
	for( var i=0; i<data.length; i++ ){
		var num = data[i];
		var hex = num.toString(16).toUpperCase();// 変換 (16進数化) (大文字)
		if( hex.length % 2 ){
			hex ='0'+ hex;
		};
		set_data +=''+ hex;
	};

	document.getElementById('id_file_data').value = set_data;

	// チェックサム＆ハッシュ

	document.getElementById('id_checksum_console').value ='';
	document.getElementById('id_checksum_title').value ='';
	document.getElementById('id_hash_fix').value ='';

	if( console.match(/nintendo/i) ){
		setDataUploadChecksumNintendo();
	}else if( console.match(/ps/i) ){
		setDataUploadChecksumPs();
	};

	// ダウンロード

	document.form_download.submit();

 };

 // NINTENDO
 function setDataUploadChecksumNintendo(){

	var nintendo_console =['sfc','gba','ds'];
	for( var i=0; i<nintendo_console.length; i++ ){
		var console = nintendo_console[i];
		var title = document.getElementById('id_select_checksum_'+ console ).options[document.getElementById('id_select_checksum_'+ console ).selectedIndex].value;
		if( title.match(/./) && document.getElementById('id_radio_checksum_'+ console ).checked == true ){
			document.getElementById('id_checksum_console').value = console;
			document.getElementById('id_checksum_title').value = title;
		};
	};
 };

 // PS
 function setDataUploadChecksumPs(){

	var title = document.getElementById('id_select_checksum_ps1').options[document.getElementById('id_select_checksum_ps1').selectedIndex].value;

	if( title.match(/./) && document.getElementById('id_radio_checksum_ps1').checked == true ){
		document.getElementById('id_checksum_console').value = 'ps1';
		document.getElementById('id_checksum_title').value = title;
		document.getElementById('id_hash_fix').value ='checksum';
	}else if( file_name.match(/\.VMP$|\.PSV$/i) && document.getElementById('id_checkbox_hash_fix').checked == true ){
		document.getElementById('id_hash_fix').value ='hash';
	};
 };

