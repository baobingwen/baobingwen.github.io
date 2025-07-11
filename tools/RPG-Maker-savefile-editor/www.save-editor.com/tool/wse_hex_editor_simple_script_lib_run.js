
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
			setRunForm();

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

 function setRunDownload( data ){

	setDataDownload( data, set_file_1.name, set_file_1.type );

	return;
 };

 function setRunSelect(){

	document.getElementById('id_select_form').style.display='block';

	setPageScrollAuto('id_select_form');

	return ;
 };

 function setRunReset(){

	document.getElementById('id_select_form').style.display='none';

	setRunSearchReset();
	setRunRewriteReset();

	setFormInputFileReset();

	return ;
 };

 // リトルエンディアン

 function setLittleEndian( data ){

	var size = data.length;

	if( size % 2 ){
		data ='0'+ data;
	};

	size = data.length / 2;

	var array = [];
	for( var i=0; i<size; i++ ){
		array[i] = data.substring(i*2,i*2+2);
	};

	var new_data ='';
	for( var i=array.length-1; i>=0; i-- ){
		new_data = new_data +''+ array[i];
	};

	return new_data;
 };

 // ゼロパディング

 function setZeroPadding( data, length, pos ){

	// pos (left/right)

	var data_length = data.length;// 文字数

	if(       length == data_length ){
	}else if( length >= data_length ){

		var num = length - data_length;

		var zero ='';
		for( var i=0; i<num; i++ ){
			zero +='0';
		};

		if( pos.match(/right/i) ){
			data = data +''+ zero;
		}else{
			data = zero +''+ data;
		};

	}else if( length <= data_length ){
	}else{
	};

	return data;
 };

