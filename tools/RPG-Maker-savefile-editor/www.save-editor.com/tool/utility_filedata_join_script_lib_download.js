
 function setDataDownload( data, file_name, type ){

	var blob = new Blob( [data], { type: type || 'application/octet-stream' } );

	if( window.navigator.msSaveBlob ){
		// IE
		window.navigator.msSaveBlob( blob, file_name );
		window.navigator.msSaveOrOpenBlob( blob, file_name );
	}else{
		if( navigator.userAgent.match(/Trident|Edge|Chrome|Safari/) ){
		}else if( navigator.userAgent.match(/Windows/) && navigator.userAgent.match(/MSIE/) ){
			// IE11�����΍� (�_�E�����[�h���Ή��̏ꍇ)
			alert('\nUNSUPPORTED BROWSER (DOWNLOAD ERROR)\n\n');
		}else{
		};

		// IE�ȊO
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

