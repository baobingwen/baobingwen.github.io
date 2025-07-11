
 function setFormEncode( str ){
	str = str.replace(/&/g, '&amp;');// 置換
	str = str.replace(/</g, '&lt;');// 置換
	str = str.replace(/>/g, '&gt;');// 置換
	str = str.replace(/"/g, '&quot;');// 置換
	str = str.replace(/'/g, '&apos;');// 置換
	return str;
 };

 function getFormInput( data, name ){
	var html ='';
	html +='<span id="" style="display:none;">';
	html +='<form action="../tool/rpg_tkool_mz_save_system_input.cgi" method="post" target="" id="id_input_form" name="input" onSubmit="" enctype="multipart/form-data" class="" style="">';
	html +='<input type="hidden" id="id_input_edit" name="select_edit" value="" >';
	html +='<input type="hidden" id="id_input_mode" name="select_mode" value="" >';
	html +='<input type="hidden" id="id_input_name" name="file_name" value="" >';
	html +='<input type="hidden" id="id_input_data" name="file_data" value="" >';
	html +='</form>';
	html +='</span>';
	return html;
 };

 function getFormOutput( data, name ){
	var html ='';
	html +='<span id="" style="display:none;">';
	html +='<form action="../tool/rpg_tkool_mz_save_system_output.cgi" method="post" target="" id="id_output_form" name="output" onSubmit="" enctype="multipart/form-data" class="" style="">';
	html +='<input type="hidden" id="id_output_edit" name="select_edit" value="" >';
	html +='<input type="hidden" id="id_output_mode" name="select_mode" value="" >';
	html +='<input type="hidden" id="id_output_name" name="file_name" value="" >';
	html +='<input type="hidden" id="id_output_data" name="file_data" value="" >';
	html +='</form>';
	html +='</span>';
	return html;
 };

 (function(){ 
	var html ='';
	html += getFormInput();
	html += getFormOutput();
	document.write(html);
 })(); 
