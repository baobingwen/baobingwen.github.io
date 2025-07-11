
 function setFormInputFile1Check( value ){
	if( value.match(/\.zip$|\.rar$|\.7z$|\.lzh$/i) ){
		alert('\nATTENTION\n\n Please uncompress the input file.\n\n ファイルを解凍してから入力して下さい\n\n');
	}else if( value.match(/\.[a-zA-Z0-9]+$/i) ){
	}else{
		alert('\nATTENTION\n\n Input file.\n\n ファイルを入力して下さい\n\n');
	};
 };

 function setFormInputFile2Check( value ){
 };
