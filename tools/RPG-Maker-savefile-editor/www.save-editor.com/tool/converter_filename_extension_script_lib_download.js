
 function setDataDownload( data, file_name, type ){

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

