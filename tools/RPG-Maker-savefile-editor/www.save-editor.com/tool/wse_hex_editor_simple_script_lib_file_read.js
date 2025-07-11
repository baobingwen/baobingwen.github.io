
 var set_file_1;//
 var set_file_2;//

 // var set_file_bytes = [];//

 function setFormInputFile1(){

	setRunReset();

	document.getElementById('id_form_button').disabled = true;
	setFormInputFile1Read();
	document.getElementById('id_form_button').disabled = false;
 };
 function setFormInputFile1Read(){
	var file = document.getElementById('id_file_1').files[0];
	var reader = new FileReader();
	reader.onload = function() {
		set_file_1 = { bytes: this.result, name: file.name, type: file.type, size: file.size };
		set_file_1.bytes = new Uint8Array( set_file_1.bytes );

	//	for( var i=0; i<set_file_1.bytes.length; i++ ){
	//		set_file_bytes[i] = set_file_1.bytes[i];
	//	};
	};
	reader.readAsArrayBuffer(file);
 };

 function setFormInputFile2(){
	document.getElementById('id_form_button').disabled = true;
	setFormInputFile2Read();
	document.getElementById('id_form_button').disabled = false;
 };
 function setFormInputFile2Read(){
	var file = document.getElementById('id_file_2').files[0];
	var reader = new FileReader();
	reader.onload = function() {
		set_file_2 = { bytes: this.result, name: file.name, type: file.type, size: file.size };
		set_file_2.bytes = new Uint8Array( set_file_2.bytes );
	};
	reader.readAsArrayBuffer(file);
 };

 function setFormInputFileReset(){
	set_file_1 ='';
	set_file_2 ='';
 };

