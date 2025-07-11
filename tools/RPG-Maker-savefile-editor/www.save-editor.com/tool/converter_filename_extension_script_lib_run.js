
 // 実行

 function setRun(){

	if( set_file_1 ){
	}else{
		throw 'Input file.\n\n ファイルを入力して下さい';
	//	alert('\nATTENTION\n\n Input file.\n\n ファイルを入力して下さい\n\n');
	//	return;
	};

	document.getElementById('id_form_button').disabled = true;
	try{
		try{
			setForm( set_file_1.name );
		//	var file_name = setName( set_file_1.name );
		//	setDataDownload( set_file_1.bytes, file_name, set_file_1.type );
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

 function setForm( name ){

	var name_array = name.split('.');// 分割

	var filename ='';
	var filename_extension ='';

	if( name.match(/\./) ){
		for( var i=0; i<name_array.length-1; i++ ){
			if( i == 0 ){
			}else{
				filename += '.';
			};
			filename += name_array[i];
		};

		filename_extension = name_array[name_array.length-1];// 配列の最後
	}else{
		filename = name;
		filename_extension ='FILENAME EXTENSION NONE';
	};

	document.getElementById('id_filename').innerHTML = filename;
	document.getElementById('id_input_filename').value = filename;
	document.getElementById('id_input_filename_extension').value = filename_extension;

	document.getElementById('set_execution_block').style.display ='none';
	document.getElementById('set_execution_result_block').style.display ='block';
 };

 function setRename(){

	var filename = document.getElementById('id_input_filename').value;
	var filename_extension = document.getElementById('id_output_filename_extension').value;

	setDataDownload( set_file_1.bytes, filename +'.'+ filename_extension, set_file_1.type );
 };
