
 // 検索 (入力フォーム)
 function setRunSearch(){
	setRunSearchReset();
	document.getElementById('id_search_form_input').style.display='block';
 };

 function setRunSearchReset(){
	document.getElementById('id_search_form_input').style.display='none';
	document.getElementById('id_search_form_output').style.display='none';
	document.getElementById('id_rewrite_form_input').style.display='none';
	document.getElementById('id_rewrite_form_output').style.display='none';
 };

 // 結果
 function setRunSearchResult(){

	var input_num        = document.getElementById('id_search_input_num').value;
	var select_num       = document.getElementById('id_search_select_num').value;
	var select_endian    = document.getElementById('id_search_select_endian').value;
	var select_size      = document.getElementById('id_search_select_size').value;
//	var checkbox_display = document.getElementById('id_search_checkbox_display').value;

	//

	select_size = parseInt( select_size );// 整数化

	// 検索数値を16進数にする

	var input_hex ='';

	if( select_num.match(/10/) ){

		if( input_num.match(/[^0-9]/) ){
			input_num = 0;
		}else if( input_num.match(/[0-9]/) ){
		}else{
			input_num = 0;
		};

		input_hex = parseInt( input_num ).toString(16).toUpperCase();// 変換 (16進数化) (大文字)

	}else if( select_num.match(/16/) ){

		if( input_num.match(/^0x/i) ){
			input_num = input_num.replace(/^0x/i, '');// 置換
		}else if( input_num.match(/h$/i) ){
			input_num = input_num.replace(/h$/i, '');// 置換
		}else{
		};
		if( input_num.match(/[^0-9a-fA-F]/i) ){
			input_num = 0;
		}else if( input_num.match(/[0-9a-fA-F]/i) ){

		}else{
			input_num = 0;
		};

	//	input_hex = parseInt( input_num, 16);// 変換 (10進数化)

		input_hex = input_num;
	}else{
	};

	// リトルエンディアンに変換する

	if( select_endian.match(/big/i) ){
	}else if( select_endian.match(/little/i) ){
		input_hex = setLittleEndian( input_hex );
	}else{
	};

	// 数値の幅を揃える

	if( select_size == (input_hex.length/2) ){
	}else if( select_size >= (input_hex.length/2) ){
		if( select_endian.match(/big/i) ){
			input_hex = setZeroPadding( input_hex, select_size*2, 'left' );
		}else if( select_endian.match(/little/i) ){
			input_hex = setZeroPadding( input_hex, select_size*2, 'right' );
		}else{
		};
	}else if( select_size <= (input_hex.length/2) ){
	}else{
	};

	// 数値の幅よりも入力した数値が大きかった場合

	if( select_size <= (input_hex.length/2) ){
		select_size = input_hex.length / 2;
	};

	// 検索数値の配列化 (10進数)

	var input_array = [];// 配列

	for( var i=0; i<select_size; i++ ){

		var hex = input_hex.substring(i*2,i*2+2);

 		input_array[i] = parseInt( hex, 16);// 変換 (10進数化)
	};

	// 検索

	var file_size = set_file_1.size;

	var match_count = 0;

	var match_array = [];// 配列

	for( var i=0; i<file_size; i++ ){

		var num = set_file_1.bytes[i];

		if( num == input_array[0] ){

			var match_flag ='OK';

			for( var j=1; j<select_size; j++ ){

				var next_num = set_file_1.bytes[i+j];

				if( next_num == input_array[j] ){
				}else{
					match_flag ='NG';
				};
			};

			if( match_flag.match(/OK/i) ){
				match_array[match_count] = i;
				match_count++;
			};
		};
	};

	// 検索結果

	var result_data ='';

	for( var i=0; i<match_array.length; i++ ){

		if( i < 200 ){
			var num = i +1;

			var addr = match_array[i];

			addr = addr.toString(16).toUpperCase();// 変換 (16進数化) (大文字)

			addr = setZeroPadding( addr, 8, 'left' );

			result_data += num +'. <span style="font-family:monospace;">0x<span id="id_search_addr_'+ num +'">'+ addr +'</span></span>';
			result_data += ' <input type="text" id="id_search_num_'+ num +'" name="" value="'+ input_hex +'" style="width:160px; height:30px; margin:0px; padding:0px; padding-left:4px;"><br>';
			result_data += '<span style="display:block; height:8px;"></span>';
		};
	};

	var set_header ='';
	var set_footer ='';

	set_header +='MATCH: '+ match_count +', SEARCH: '+ input_hex +'<br>';

	if( match_count > 200 ){
		set_footer +='(200件以降省略)<br>';
	};

	document.getElementById('id_search_form_result').innerHTML = set_header + result_data + set_footer;

	document.getElementById('id_search_output_match_count').value = match_count;

	// 表示

	document.getElementById('id_search_form_output').style.display='block';
	document.getElementById('id_search_form_download').style.display='none';
 };

 // 編集
 function setRunSearchEdit(){

	var select_size = document.getElementById('id_search_select_size').value;

	select_size = parseInt( select_size );// 整数化

	var match_count = document.getElementById('id_search_output_match_count').value;

	match_count = parseInt( match_count );// 整数化

	var error_flag ='no';// エラー検知フラグ

	var error_count = 0;// エラー検知回数

	for( var i=0; i<match_count; i++ ){

		if( i < 200 ){
			var num = i +1;

			var search_num = document.getElementById('id_search_num_'+ num ).value;

			var search_addr = document.getElementById('id_search_addr_'+ num ).innerHTML;

			search_addr = parseInt( search_addr, 16);// 変換 (10進数化)

			// エラー検知
			if( search_num.match(/[^0-9a-fA-F]/i) ){
				// ERROR // 16進数以外が含まれている
				error_flag ='yes';
				error_count++;
				continue;
			}else if( search_num.length/2 != select_size ){
				// ERROR // 数値の幅が異なる
				error_flag ='yes';
				error_count++;
				continue;
			}else{
			};

			for( var j=0; j<select_size; j++ ){

				var hex = search_num.substring(j*2,j*2+2);

				var num = parseInt( hex, 16);// 変換 (10進数化)

				set_file_1.bytes[search_addr+j] = num;
			};
		};
	};

	// エラー検知
	if( error_flag.match(/yes/i) && error_count > 0 ){
		alert('\nNOTICE\n\n入力に誤りのある数値が '+ error_count +' 件 ありました\n\n誤りを検知した数値は飛ばして処理しました\n');// ERROR
	};

	document.getElementById('id_search_form_download').style.display='block';
 };

 // ダウンロード
 function setRunSearchDownload(){

	setDataDownload( set_file_1.bytes, set_file_1.name, set_file_1.type );

//	alert('test: Download ('+ set_file_1.size +')');// test
 };

