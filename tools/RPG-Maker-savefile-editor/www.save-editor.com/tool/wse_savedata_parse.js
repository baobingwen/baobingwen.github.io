

 /* アドレス検索 (Address Search) */
 function setSaveSearchCode(){

	// 16進数・10進数
	var decimal=0;
	if( document.getElementById('id_select_search_16').checked == true ){
		decimal = document.getElementById('id_select_search_16').value;
	};
	if( document.getElementById('id_select_search_10').checked == true ){
		decimal = document.getElementById('id_select_search_10').value;
	};

	var code = document.getElementById('save_search_code').value;
	if( code ){
	}else{
		alert('ERROR : Input value ('+ decimal +')');//
		return;
	};

	if( parseInt(decimal) == 16 ){
		if( code.match(/[^a-fA-F0-9]/) ){
			alert('ERROR : Input hex number (16進数を入力して下さい)');//
			return;
		}else{ };
	}else{
		if( code.match(/[^0-9]/) ){
			alert('ERROR : Input number (10進数を入力して下さい)');//
			return;
		}else{ };

		code = parseInt(code).toString(16);// 変換 (10進数⇒16進数)
	};
	
	code = code.toUpperCase();// 変換 (大文字化)

	if( code.length % 2 ){
		code = '0'+ code;// 文字数が奇数の場合は文字数を偶数にする
	}else{ };

	if( code ){
		setSaveSearchCodeResult( code, decimal );
	}else{
		alert('ERROR : Code Search ('+ decimal +') ('+ code +')');//
		return;
	};
 };

 function setSaveSearchCodeResult( code, decimal ){

	var data = document.getElementById('save_data_decrypted').value;// innerHTML (Chrome対策)

	var data_array = data.split( code );// 分割

	if( data_array.length <= 0 ){
		// ※ 正確には1以下を設定する
		document.getElementById('code_search_result').value = 'none';// innerHTML→value (Chrome対策)
		return;
	}else if( data_array.length > 1000 ){
		document.getElementById('code_search_result').value = '1000 Over\n\nStopped because more than 1000 matches';// innerHTML→value (Chrome対策)
	//	document.getElementById('save_search_code_copy_and_paste').style.display ='none';// 代入ボタン非侮ｦ
		return;
	}else{
	};

	var address ='';
	var data_length ='';

	var count = 0;

	for( var i=0, len=data_array.length-1; i<len; i++ ){

		data_length += data_array[i];
		if( i >= 1 ){
			data_length += ''+ code;
		};

		var num = data_length.length;//
		if( num % 2 ){
		}else{
			count++;
			num /= 2;

			if( i == 0 && count == 1 && data_array.length == 2 ){
				address += '0x'+ num.toString(16).toUpperCase();// 変換 (10進数⇒16進数) (大文字化)
			//	document.getElementById('save_search_code_copy_and_paste').style.display ='';// 代入ボタン侮ｦ
			}else{
				address += '0x'+ num.toString(16).toUpperCase() +' ('+ count +'), \n';// 変換 (10進数⇒16進数) (大文字化)
			//	document.getElementById('save_search_code_copy_and_paste').style.display ='none';// 代入ボタン非侮ｦ
			};
		};
	};

	if( count == 0 ){
		document.getElementById('code_search_result').value = 'No matching (一致した数値はありません)';// innerHTML→value (Chrome対策)
	//	document.getElementById('save_search_code_copy_and_paste').style.display ='none';// 代入ボタン非侮ｦ
		return;
	}else{
	};

	document.getElementById('code_search_result').value = address;// innerHTML→value (Chrome対策)
 //	document.getElementById('flag_edit_search').value ='yes';

 //	var set_address ='';
 //	if( count == 1 ){
 //		set_address =' アドレス:'+ address;
 //	}else if( count >= 2 ){
 //		set_address =' コード一致アドレス数:'+ count;
 //	};
 //	document.getElementById('save_edit_history').value = document.getElementById('save_edit_history').value +'▼アドレス検索\nコード:'+ document.getElementById('save_search_code').value +' ('+ decimal +')'+ set_address +'\n';// 履歴 (更新)
 };

// function setSaveSearchCodeCopyAndPaste(){
//	document.getElementById('save_edit_address').value = document.getElementById('code_search_result').value;// (innerHTML) 検索結果⇒アドレス代入
//	setOpen('set_save_edit_button','close');
//	setOpen('set_save_edit','open'); return false;
// };


 // 比較 (前後数値)
 function setSaveCompareFindValue(){

	var file = document.getElementById('file_save_compare').value;

	var value_1 = document.getElementById('save_compare_find_value_1').value;
	var value_2 = document.getElementById('save_compare_find_value_2').value;

	if( String( file ).match(/[a-fA-F0-9]/i) ){
	}else{
		alert('ERROR : Input file (比較するファイルを追加して下さい)');
	//	setPageScrollAuto('set_scroll_compare_input_file');
		return;
	};

	if(
	   value_1.length >= 1 
	&& value_2.length >= 1 
	){
	}else{
		alert('ERROR : Input value (数値を入力して下さい)');
		return;
	};

	if( 
	   String( value_1 ).match(/[^a-fA-F0-9]/i) 
	|| String( value_2 ).match(/[^a-fA-F0-9]/i) 
	){
		alert('ERROR : Input hex number (16進数を入力して下さい)');
		return;
	}else{
	};

	if( value_1 == value_2 ){
		alert('ERROR : Same input value (入力した数値が同一です)');
		return;
	}else{
	};

/*
	if( 
	   value_1.length % 2 == 0 
	&& value_2.length % 2 == 0 
	){
	}else{
		alert('ERROR : 偶数の文字列を入力して下さい');
		return;
	};
*/

	var original_value_1_length = value_1.length;
	var original_value_2_length = value_2.length;

	if( value_1.length % 2 == 0 ){
	}else{
		value_1 = '0'+ value_1;// 文字数が奇数の場合は文字数を偶数にする
	};
	if( value_2.length % 2 == 0 ){
	}else{
		value_2 = '0'+ value_2;// 文字数が奇数の場合は文字数を偶数にする
	};

	if( value_1 == value_2 ){
		alert('ERROR : Same input value (入力した数値が同一です)');
		return;
	}else{
	};

	if( value_1.length == value_2.length ){
	}else{
		alert('ERROR : String length is different (文字列の長さが異なります), ('+ original_value_1_length +','+ original_value_2_length +')' );
		return;
	};

	setSaveCompareFindValueRun();// 実行

//	alert('test:');// test
 };

 // 比較 (前後数値) (実行)
 function setSaveCompareFindValueRun(){

	var data = document.getElementById('save_data_decrypted').value;
	var file = document.getElementById('file_save_compare').value;

	data = data.toUpperCase();// 変換 (大文字赴L)
	file = file.toUpperCase();// 変換 (大文字赴L)

	var value_1 = document.getElementById('save_compare_find_value_1').value;
	var value_2 = document.getElementById('save_compare_find_value_2').value;

	if( value_1.length % 2 == 0 ){
	}else{
		value_1 = '0'+ value_1;// 文字数が奇数の場合は文字数を偶数にする
	};
	if( value_2.length % 2 == 0 ){
	}else{
		value_2 = '0'+ value_2;// 文字数が奇数の場合は文字数を偶数にする
	};

	value_1 = value_1.toUpperCase();// 変換 (大文字赴L)
	value_2 = value_2.toUpperCase();// 変換 (大文字赴L)

	var data_array = setSaveCompareFindValueArray( data, value_1 );// 配列化
	var file_array = setSaveCompareFindValueArray( file, value_2 );// 配列化

	var address_array = new Array();// 配列
	var address_array_num = 0;

	var data_length = data.length / 2;
	for( var i=0; i<data_length; i++ ){
		if( 
		   data_array[i] == value_1 
		&& file_array[i] == value_2 
		){
			address_array[address_array_num] = parseInt( i ).toString(16).toUpperCase();// 変換 (10進数⇒16進数) (大文字赴L)
			address_array_num++;
		};
		if( address_array_num > 100 ){
			document.getElementById('save_compare_find_value_result').value = 'Stopped because more than 100 matches\n100件以上と一致したので中断しました';// 結果 (中断)
			return;
		};
	};

	var result ='';
	for( var i=0; i<address_array.length; i++ ){
		result += '0x'+ address_array[i] +' \n';
	};

	if( address_array_num >= 1 ){
		document.getElementById('save_compare_find_value_result').value = result;// 結果
	}else{
		document.getElementById('save_compare_find_value_result').value = 'Not find (未検出)';// 結果
	};
 };

 // 比較 (前後数値) (配列化)
 function setSaveCompareFindValueArray( data, value ){
	var array = new Array();// 配列

	var data_length = data.length / 2;

	for( var i=0; i<data_length; i++ ){
		array[i] = data.substring( i*2, i*2+value.length );
	};

	return array;
 };


 // 比較 (差分数値)
 function setSaveCompareFindVariation(){

	var file = document.getElementById('file_save_compare').value;

	var value = document.getElementById('save_compare_find_variation').value;

	if( String( file ).match(/[a-fA-F0-9]/i) ){
	}else{
		alert('ERROR : Input file (比較するファイルを追加して下さい)');
	//	setPageScrollAuto('set_scroll_compare_input_file');
		return;
	};

	if( value.length >= 1 ){
	}else{
		alert('ERROR : Input value (数値を入力して下さい)');
		return;
	};

	if( String( value ).match(/[^a-fA-F0-9]/i) ){
		alert('ERROR : Input hex number (16進数を入力して下さい)');
		return;
	}else{
	};

	setSaveCompareFindVariationRun();// 実行

 //	alert('test:');// test
 };

 // 比較 (差分数値) (実行)
 function setSaveCompareFindVariationRun(){

	var data = document.getElementById('save_data_decrypted').value;
	var file = document.getElementById('file_save_compare').value;

	data = data.toUpperCase();// 変換 (大文字赴L)
	file = file.toUpperCase();// 変換 (大文字赴L)

	var data_array = setSaveCompareFindVariationArray( data );// 配列化 (10進数で取得)
	var file_array = setSaveCompareFindVariationArray( file );// 配列化 (10進数で取得)

	var value = document.getElementById('save_compare_find_variation').value;
	value = parseInt( value, 16 ); // 変換 (16進数⇒10進数)

	var address_array = new Array();// 配列
	var address_array_num = 0;

	var data_length = data.length / 2;
	for( var i=0; i<data_length; i++ ){

		if( data_array[i] == file_array[i] ){
		}else if( data_array[i] > file_array[i] ){
			var num = data_array[i] - file_array[i];
			if( num == value ){
				var hex = parseInt( i ).toString(16).toUpperCase();// 変換 (10進数⇒16進数) (大文字赴L)
				address_array[address_array_num] = hex +' (+)';
				address_array_num++;
			}else{
			};
		}else if( file_array[i] > data_array[i] ){
			var num = file_array[i] - data_array[i];
			if( num == value ){
				var hex = parseInt( i ).toString(16).toUpperCase();// 変換 (10進数⇒16進数) (大文字赴L)
				address_array[address_array_num] = hex +' (-)';
				address_array_num++;
			}else{
			};
		}else{
		};
		if( address_array_num > 100 ){
			document.getElementById('save_compare_find_variation_result').value = 'Stopped because more than 100 matches\n100件以上と一致したので中断しました';// 結果 (中断)
			return;
		};
	};

	var result ='';
	for( var i=0; i<address_array.length; i++ ){
		result += '0x'+ address_array[i] +' \n';
	};

	if( address_array_num >= 1 ){
		document.getElementById('save_compare_find_variation_result').value = result;// 結果
	}else{
		document.getElementById('save_compare_find_variation_result').value = 'Not find (未検出)';// 結果
	};
 };

 // 比較 (差分数値) (配列化) (10進数)
 function setSaveCompareFindVariationArray( data ){
	var array = new Array();// 配列

	var data_length = data.length / 2;

	for( var i=0; i<data_length; i++ ){

		var value = data.substring( i*2, i*2+2 );

		value = parseInt( value, 16 ); // 変換 (16進数⇒10進数)

		array[i] = value;
	};

	return array;
 };


 // 比較 (相違箇所)
 function setSaveCompareDifference(){

	var file = document.getElementById('file_save_compare').value;

	if( String( file ).match(/[a-fA-F0-9]/i) ){
	}else{
		alert('ERROR : Input file (比較するファイルを追加して下さい)');
	//	setPageScrollAuto('set_scroll_compare_input_file');
		return;
	};

	setSaveCompareDifferenceRun();// 実行

 //	alert('test:');// test
 };

 // 比較 (相違箇所) (実行)
 function setSaveCompareDifferenceRun(){

	var data = document.getElementById('save_data_decrypted').value;
	var file = document.getElementById('file_save_compare').value;

	data = data.toUpperCase();// 変換 (大文字赴L)
	file = file.toUpperCase();// 変換 (大文字赴L)

	if( data == file ){
		document.getElementById('save_compare_difference_result').value = 'Not find (相違箇所はありません)';// 結果
		return;
	};

	var data_array = setSaveCompareDifferenceArray( data );// 配列化
	var file_array = setSaveCompareDifferenceArray( file );// 配列化

	var address_array = new Array();// 配列

	var data_length = data.length / 2;
	for( var i=0; i<data_length; i++ ){

		if( data_array[i] == file_array[i] ){
			address_array[i] = '';
		}else{
			address_array[i] = data_array[i];// 一致しなかった数値を代入
		};
	};

	var result_address = new Array();// 配列
	var result_array = new Array();// 配列
	var result_array_num = 0;
	for( var i=0; i<address_array.length; i++ ){
		result_array[i] = '';
	};
	for( var i=0; i<address_array.length; i++ ){

		if( address_array[i] =='' ){
			result_array[result_array_num] += '';
		//	result_address[result_array_num] += '';
			result_array_num++;
		}else{
			result_array[result_array_num] += address_array[i];
			result_address[result_array_num] = i;
		};
	};

	var count = 0;// 1000件以上と一致するか計測
	var result ='';
	for( var i=0; i<result_array.length; i++ ){

		if( result_array[i] =='' ){
		}else{
			if( result_array[i].length > 2 ){

				var len = result_array[i].length;
				len /= 2;
				len = parseInt( len ).toString(16).toUpperCase();// 変換 (10進数⇒16進数) (大文字赴L)

				var addr_end = result_address[i];

				addr_end = parseInt( addr_end ).toString(16).toUpperCase();// 変換 (10進数⇒16進数) (大文字赴L)

				var addr_start = parseInt( result_address[i] ) - ( result_array[i].length / 2 ) + 1;

				addr_start = parseInt( addr_start ).toString(16).toUpperCase();// 変換 (10進数⇒16進数) (大文字赴L)

				result += '0x'+ addr_start +' - 0x'+ addr_end +' (0x'+ len +'byte), \n';
			}else{
				var addr = result_address[i];
				addr = parseInt( addr ).toString(16).toUpperCase();// 変換 (10進数⇒16進数) (大文字赴L)
				result += '0x'+ addr +' (0x1byte), \n';
			};
			count++;
			if( count > 1000 ){
				document.getElementById('save_compare_difference_result').value = 'Stopped because more than 1000 matches\n1000件以上と一致したので中断しました';// 結果 (中断)
				return;
			};
		};
	};

 // alert('test (ok)');//

	if( result ){
		document.getElementById('save_compare_difference_result').value = result;// 結果
	}else{
		document.getElementById('save_compare_difference_result').value = 'Not find (未検出)';// 結果
	};
 };

 // 比較 (相違箇所) (配列化)
 function setSaveCompareDifferenceArray( data ){
	var array = new Array();// 配列

	var data_length = data.length / 2;

	for( var i=0; i<data_length; i++ ){
		array[i] = data.substring( i*2, i*2+2 );
	};

	return array;
 };


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



