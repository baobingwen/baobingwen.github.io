
 // 書換 (入力フォーム)
 function setRunRewrite(){
	setRunRewriteReset();
	document.getElementById('id_rewrite_form_input').style.display='block';
 };

 function setRunRewriteReset(){
	document.getElementById('id_rewrite_form_input').style.display='none';
	document.getElementById('id_rewrite_form_output').style.display='none';
	document.getElementById('id_search_form_input').style.display='none';
	document.getElementById('id_search_form_output').style.display='none';
 };

 // 表示
 function setRunRewriteDisplay(){

	var input_address      = document.getElementById('id_rewrite_input_address').value;
	var select_baseaddress = document.getElementById('id_rewrite_select_baseaddress').value;
	var input_baseaddress  = document.getElementById('id_rewrite_input_baseaddress').value;
	var select_size        = document.getElementById('id_rewrite_select_size').value;

	var checkbox_display ='';
	if( document.getElementById('id_rewrite_checkbox_display').checked == true ){
		checkbox_display ='yes';
	}else{
		checkbox_display ='no';
	};

	if( input_address.match(/^0x/i) ){
		input_address = input_address.replace(/^0x/i, '');// 置換
	}else if( input_address.match(/h$/i) ){
		input_address = input_address.replace(/h$/i, '');// 置換
	}else{
	};
	if( input_address.match(/[^0-9a-fA-F]/i) ){
		input_address = 0;
	}else if( input_address.match(/[0-9a-fA-F]/i) ){
		input_address = parseInt( input_address, 16); // 変換 (10進数化)
	}else{
		input_address = 0;
	};

	if( input_baseaddress.match(/^0x/i) ){
		input_baseaddress = input_baseaddress.replace(/^0x/i, '');// 置換
	}else if( input_baseaddress.match(/h$/i) ){
		input_baseaddress = input_baseaddress.replace(/h$/i, '');// 置換
	}else{
	};
	if( input_baseaddress.match(/[^0-9a-fA-F]/i) ){
		input_baseaddress = 0;
	}else if( input_baseaddress.match(/[0-9a-fA-F]/i) ){
		input_baseaddress = parseInt( input_baseaddress, 16); // 変換 (10進数化)
	}else{
		input_baseaddress = 0;
	};

	var address = 0;
	if(       select_baseaddress.match(/plus/) ){	address = input_address + input_baseaddress;
	}else if( select_baseaddress.match(/minus/) ){	address = input_address - input_baseaddress;
	}else if( select_baseaddress.match(/mcr/) ){	address = input_address + 0;
	}else if( select_baseaddress.match(/vmp/) ){	address = input_address + parseInt('80', 16);
	}else if( select_baseaddress.match(/psv/) ){	address = input_address - parseInt('1F7C', 16);
	}else if( select_baseaddress.match(/mcs/) ){	address = input_address - parseInt('1F80', 16);
	}else{
	};
	if( address < 0 ){
		address = 0;
	};

	select_size = parseInt( select_size );// 整数化

	// アドレスの数値

	var get_data ='';

	for( var i=0; i<select_size; i++ ){
		var num = set_file_1.bytes[address+i];

		var hex = num.toString(16).toUpperCase();// 変換 (16進数化) (大文字)

		if( hex.length % 2 ){
			hex ='0'+ hex;
		};

		get_data +=''+ hex;
	};

//	alert( get_data );// test

	document.getElementById('id_rewrite_output_value').value = get_data;// 数値

	document.getElementById('id_rewrite_output_address').value = address;// アドレス

	// アドレスの範囲

	var address_start = address;
	var address_end   = address + select_size -1;
	address_start = address_start.toString(16).toUpperCase();// 変換 (16進数化) (大文字)
	address_end   = address_end.toString(16).toUpperCase();// 変換 (16進数化) (大文字)
	if( address_start.length % 2 ){
		address_start ='0'+ address_start;
	};
	if( address_end.length % 2 ){
		address_end ='0'+ address_end;
	};
	document.getElementById('id_rewrite_output_address_start').innerHTML = address_start;
	document.getElementById('id_rewrite_output_address_end').innerHTML = address_end;

	// 前の数値

	var before_size = 4;

	var before_address = address - before_size;

	if( before_address < 0 ){
		before_size += before_address;
		before_address = 0;
	};

	var before_data ='';

	for( var i=0; i<before_size; i++ ){
		var num = set_file_1.bytes[before_address+i];

		var hex = num.toString(16).toUpperCase();// 変換 (16進数化) (大文字)

		if( hex.length % 2 ){
			hex ='0'+ hex;
		};

		before_data +=''+ hex;
	};

	if( checkbox_display.match(/yes/i) ){
		document.getElementById('id_rewrite_output_before_block').style.display ='inline-block';// 表示
		document.getElementById('id_rewrite_output_before').value = before_data;
	}else{
		document.getElementById('id_rewrite_output_before_block').style.display ='none';// 非表示
	};

	// 後の数値

	var after_size = 4;

	var after_address = address + select_size;

	var after_data ='';

	for( var i=0; i<after_size; i++ ){
		var num = set_file_1.bytes[after_address+i];

		var hex = num.toString(16).toUpperCase();// 変換 (16進数化) (大文字)

		if( hex.length % 2 ){
			hex ='0'+ hex;
		};

		after_data +=''+ hex;
	};

	if( checkbox_display.match(/yes/i) ){
		document.getElementById('id_rewrite_output_after_block').style.display ='inline-block';// 表示
		document.getElementById('id_rewrite_output_after').value = after_data;
	}else{
		document.getElementById('id_rewrite_output_after_block').style.display ='none';// 非表示
	};

	// 表示

	document.getElementById('id_rewrite_form_output').style.display='block';
	document.getElementById('id_rewrite_form_download').style.display='none';

 };

 // 編集
 function setRunRewriteEdit(){

	var address = document.getElementById('id_rewrite_output_address').value;

	address = parseInt( address );// 整数化

	var select_size = document.getElementById('id_rewrite_select_size').value;

	select_size = parseInt( select_size );// 整数化

	var address_value = document.getElementById('id_rewrite_output_value').value;

	if( address_value.match(/[^0-9a-fA-F]/i) ){
		alert('\nNOTICE\n\n16進数以外の文字が含まれています\n');// ERROR
		return;
	}else if( address_value.length/2 != select_size ){
		alert('\nNOTICE\n\n元の数値と同じ長さを入力して下さい\n');// ERROR
		return;
	}else{
	};

	for( var i=0; i<select_size; i++ ){

		var hex = address_value.substring(i*2,i*2+2);

		var num = parseInt( hex, 16);// 変換 (10進数化)

		set_file_1.bytes[address+i] = num;
	};

	document.getElementById('id_rewrite_form_download').style.display='block';
 };

 // ダウンロード
 function setRunRewriteDownload(){

	setDataDownload( set_file_1.bytes, set_file_1.name, set_file_1.type );
 };

