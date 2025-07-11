
 // 実行

 function setRun(){

	if( set_input_file ){
	}else{
		throw 'Input file.\n\n ファイルを入力して下さい';
	//	alert('\nATTENTION\n\n Input file.\n\n ファイルを入力して下さい\n\n');
	//	return;
	};

	document.getElementById('id_form_button').disabled = true;
	try{
		try{
			setJoin();
		//	setDataDownload( set_file_1.bytes, set_file_1.name, set_file_1.type );
		}catch(e){
			throw e;
		};
	}catch(e){
		if( e === 'stop' ){
		}else{
			alert('\nATTENTION\n\n'+ e + '\n\n');
		};
	};
	document.getElementById('id_form_button').disabled = false;
 };

 function setJoin(){
	var total_num = document.getElementById('id_total_num').value; total_num = parseInt( total_num );

	// 合計サイズ

	var total_size = 0;

	for( var i=1; i<=total_num; i++ ){

		try{
			var size = 0;

			if( set_input_file[i].size ){
				size = parseInt( set_input_file[i].size );
			};

			total_size += size;

		}catch(e){
		};
	};

	// 確認

	if( total_size > 128000000 ||  total_size > 1 ){

		if( window.confirm('\nCONFIRM\n\n The total size of the file is large. Do you want to run as it is ?\n\n ファイルの合計サイズが大きいです。このまま実行しますか？\n\n') ){
		}else{
			return;
		};
	};

	// 実行

	var file_name ='';
	var file_type ='';

	var set_data = [];

	var total_size = 0;

	for( var i=1; i<=total_num; i++ ){

		try{
			if( file_name ){
			}else if( set_input_file[i].name ){
				file_name = set_input_file[i].name;
			};
			if( file_type ){
			}else if( set_input_file[i].type ){
				file_type = set_input_file[i].type;
			};

			var size = 0;

			if( set_input_file[i].size ){
				size = parseInt( set_input_file[i].size );
			};

			for( var j=0; j<size; j++ ){
				set_data[total_size+j] = set_input_file[i].bytes[j];
			};

			total_size += size;

		}catch(e){
		};
	};

	set_data = new Uint8Array( set_data );

	// ファイル名

	var name_array = file_name.split('.');// 分割

	var plainname ='';
	var extension ='';

	if( file_name.match(/\./) ){
		for( var i=0; i<name_array.length-1; i++ ){
			if( i == 0 ){
			}else{
				plainname += '.';
			};
			plainname += name_array[i];
		};

		extension = name_array[name_array.length-1];// 配列の最後
	}else{
		plainname = file_name;
		extension ='';
	};

	file_name = plainname +' (join).'+ extension;

	// ダウンロード

	setDataDownload( set_data, file_name, file_type );
 };

 function setInputFileAdd( plusminus ){//
	var total_num = document.getElementById('id_total_num').value; total_num = parseInt( total_num );
	if( total_num == 1 && plusminus == -1 || total_num == 10 && plusminus == 1 ){
	}else if( plusminus == 0 ){
	}else if( plusminus == 1 ){
		total_num++;
		var form = setInputFileAddForm( total_num );
		document.getElementById('id_input_file_add_'+ total_num ).innerHTML = form;
	}else if( plusminus == -1 ){
		document.getElementById('id_input_file_add_'+ total_num ).innerHTML ='';
		total_num--;
	};
	document.getElementById('id_total_num').value = total_num;
 };

 function setInputFileAddForm( num ){//
	var next = num +1;
	var form ='';
	form += '<span style="display:block; height:4px;"></span>';
	form += '<span align="left" class="input_block" style="">';
	form += '	<span style="display:inline-block; text-align:center; vertical-align:middle; color:gray; line-height:110%;"><b style="letter-spacing:1px;">JOIN FILE</b> ('+ num +')<br></span>';
	form += '	<span style="display:inline-block; vertical-align:middle;">';
	form += '		<span style="display:inline-block; vertical-align:middle; transform:rotate(-90deg); -webkit-transform:rotate(-90deg); color:#CCCCCC; font-size:smaller;">▼</span>';
	form += '		<input type="file" id="id_input_file_'+ num +'" name="input_file_'+ num +'" accept="" onchange="setFormInputFile1Check(this.value); setFormInputFile('+ num +'); return true;" style="vertical-align:middle; cursor:pointer;" title="'+ num +'">';
	form += '	</span><br>';
	form += '</span>';
	form += '<span id="id_input_file_add_'+ next +'"></span>';
	return form;
 };

 function setInputFileAddFormReset(){//;
	document.getElementById('id_input_file_add_2').innerHTML ='';
	document.getElementById('id_total_num').value = 1;
 };

 var set_input_file =[];

 function setFormInputFile( num ){//
	setFormInputFileRead( num );
 };
 function setFormInputFileRead( num ){//
	var input_file = document.getElementById('id_input_file_'+ num ).files[0];
	var reader = new FileReader();
	reader.onload = function() {
		set_input_file[ num ] = { bytes: this.result, name: input_file.name, type: input_file.type, size: input_file.size };
		set_input_file[ num ].bytes = new Uint8Array( set_input_file[ num ].bytes );
	};
	reader.readAsArrayBuffer(input_file);
 };
