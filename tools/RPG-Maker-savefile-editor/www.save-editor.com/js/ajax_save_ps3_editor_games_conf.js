
 function setAjaxSaveFileGamesConf( secure_file_id ){

	var sfid ='';
	try {
		sfid = document.getElementById('input_sfid').value;
	} catch ( err ){
	} finally {
	};

	if (        secure_file_id.match(/^xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx$/i) ){
			document.getElementById('input_secure_file_id_x').value = secure_file_id;// 非対応タイトル

	} else if ( secure_file_id && document.getElementById('input_secure_file_id_x').value && secure_file_id == document.getElementById('input_secure_file_id_x').value ){

	} else if ( secure_file_id && sfid && secure_file_id == sfid ){

	} else if ( secure_file_id && secure_file_id != sfid && location.search.match(/sfid=[a-fA-F0-9]{32}/) ){
		alert( '設定された Secure File ID と異なります' );

	} else if ( secure_file_id && document.getElementById('input_secure_file_id_x').value ){
		if( window.confirm('Secure File ID を 更新しますか？') ){
			document.getElementById('input_secure_file_id_x').value = secure_file_id;
			document.getElementById('input_secure_file_id').value = '********************************';
		}else{
		};
	} else if ( secure_file_id ){
			document.getElementById('input_secure_file_id_x').value = secure_file_id;
			document.getElementById('input_secure_file_id').value = '********************************';

	} else if ( document.getElementById('input_secure_file_id_x').value.match(/[a-fA-F0-9]{32}/i) ){
	} else if ( document.getElementById('input_secure_file_id').value.match(/[a-fA-F0-9]{32}/i) ){
	} else {
		alert( 'Secure File ID を 取得できませんでした' );
	};

/*
	if (        secure_file_id && document.getElementById('input_secure_file_id').value && secure_file_id == document.getElementById('input_secure_file_id').value ){
	} else if ( secure_file_id != document.getElementById('input_secure_file_id').value && location.search.match(/sfid=[a-fA-F0-9]{32}/) ){
		alert( '設定された Secure File ID と異なります' );
	} else if ( secure_file_id && document.getElementById('input_secure_file_id').value ){
		if( window.confirm('Secure File ID を 更新しますか？') ){
			document.getElementById('input_secure_file_id').value = secure_file_id;
		}else{
		};
	} else if ( secure_file_id ){
		document.getElementById('input_secure_file_id').value = secure_file_id;
	} else if ( document.getElementById('input_secure_file_id').value ){
	} else {
		alert( 'Secure File ID を 取得できませんでした' );
	};
*/

};//

