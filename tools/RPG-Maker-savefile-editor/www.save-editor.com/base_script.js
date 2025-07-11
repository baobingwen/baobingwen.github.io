

 function goLink(url){//
	location.href = url;//
 };//

 function goLinkBlank(url){//
	url=encodeURIComponent(url);// エンコード
	url ='../link/href.cgi?'+ url;//
	window.open( url, '_blank');//
 };//

 function setFileDownloadConfirm( src ){
	try {// 通常
		if( window.confirm('対象のファイルをダウンロードしますか？') ){// 「OK」
			location.href = src;//
		}else{ };
	} catch ( err ){// 例外
		alert( err );
	} finally {// 終了
	};
 };//


 function getQueryParams() {
	var qs=location.search;
	if (qs) {
		var qsa=qs.substring(1).split('&');
		var params={};
		for(var i=0, len=qsa.length; i<len; i++) {
			var pair=qsa[i].split('=');
			pair[1] = pair[1].replace(/\+/g,' ');// 置換 (全対象) (正規表現)
			params[pair[0]]=decodeURIComponent( pair[1] );// UTF-8
		};
		return params;
	};
	return '';
//	return null;
 };//


 function setOpen(id, p){//
	try {//
		if(p=='open'){
			document.getElementById(id).style.display='';
		}else if(p=='close'){
			document.getElementById(id).style.display='none';
		}else if(document.getElementById(id).style.display=='none'){
			document.getElementById(id).style.display='';
		}else{
			document.getElementById(id).style.display='none';
		}

	} catch ( err ){// 例外処理 (エラー検知)
	} finally {// 終了処理
	};
 };//

 function setOpenInline(id, p){//
	try {//
		if(p=='open'){
			document.getElementById(id).style.display='inline';
		}else if(p=='close'){
			document.getElementById(id).style.display='none';
		}else if(document.getElementById(id).style.display=='none'){
			document.getElementById(id).style.display='inline';
		}else{
			document.getElementById(id).style.display='none';
		}
	} catch ( err ){// 例外処理 (エラー検知)
	} finally {// 終了処理
	};
 };//
 function setOpenInlineBlock(id, p){//
	try {//
		if(p=='open'){
			document.getElementById(id).style.display='inline-block';
		}else if(p=='close'){
			document.getElementById(id).style.display='none';
		}else if(document.getElementById(id).style.display=='none'){
			document.getElementById(id).style.display='inline-block';
		}else{
			document.getElementById(id).style.display='none';
		}
	} catch ( err ){// 例外処理 (エラー検知)
	} finally {// 終了処理
	};
 };//
 function setOpenBlock(id, p){//
	try {//
		if(p=='open'){
			document.getElementById(id).style.display='block';
		}else if(p=='close'){
			document.getElementById(id).style.display='none';
		}else if(document.getElementById(id).style.display=='none'){
			document.getElementById(id).style.display='block';
		}else{
			document.getElementById(id).style.display='none';
		}
	} catch ( err ){// 例外処理 (エラー検知)
	} finally {// 終了処理
	};
 };//


 function getBrowserScreenWidth() {// BrowserWindowSize(x) 表示可能領域の横幅
	var width = (document.compatMode && document.compatMode != "BackCompat" ? document.documentElement : document.body ).clientWidth;
	return width;
 };
 function getBrowserScreenHeight() {// BrowserWindowSize(y) 表示可能領域の縦幅
	var height = (document.compatMode && document.compatMode != "BackCompat" ? document.documentElement : document.body ).clientHeight;
	return height;
 };
 function getBrowserInnerWidth() {// BrowserInnerSize(x) 表示領域の横幅
	return window.innerWidth;
 };
 function getBrowserInnerHeight() {// BrowserInnerSize(y) 表示領域の縦幅
	return window.innerHeight;
 };
 function getBrowserScrollWidth() {// スクロール可能な横幅
	if(navigator.userAgent.indexOf("MSIE") != -1 && document.compatMode == 'BackCompat'){// IE 後方互換モード
		var num1=0; num1=getBrowserScreenWidth();
		var num2=0; num2=getBrowserScrollLeft();
		var num=0; num = num1 + num2;
		return num;
	}else{
		var width = document.documentElement.scrollWidth || document.body.scrollWidth;//
		return width;
	};
 };//
 function getBrowserScrollHeight() {// スクロール可能な縦幅
	if(navigator.userAgent.indexOf("MSIE") != -1 && document.compatMode == 'BackCompat'){// IE 後方互換モード
		var num1=0; num1=getBrowserScreenHeight();
		var num2=0; num2=getBrowserScrollTop();
		var num=0; num = num1 + num2;
		return num;
	}else{
		var height = document.documentElement.scrollHeight || document.body.scrollHeight;//
		return height;
	};
 };//
 function getBrowserScrollLeft() {// スクロールした横幅
	return (document.documentElement.scrollLeft || document.body.scrollLeft);
 };//
 function getBrowserScrollTop() {// スクロールした縦幅
	return (document.documentElement.scrollTop || document.body.scrollTop);
 };//


 function setPageScrollUp() {
	window.scroll( getBrowserScrollLeft(), 0 );
 }
 function setPageScrollDown() {
	var top = getBrowserScreenHeight() + getBrowserScrollHeight();
	window.scroll( getBrowserScrollLeft(), top );
 }
 function setPageScroll( target ) {

	var ele = document.getElementById( target );
	var rect = ele.getBoundingClientRect();
//	var target_x = rect.left;
	var target_y = rect.top;
	target_y += getBrowserScrollTop();

	window.scroll( getBrowserScrollLeft() , target_y );
 }
 function setPageScrollAuto( target ) {

	var ele = document.getElementById( target );
	var rect = ele.getBoundingClientRect();
//	var target_x = rect.left;
	var target_y = rect.top;
	target_y += getBrowserScrollTop();

	if( getBrowserScrollTop() > target_y ){
		setPageScrollAutoUp( getBrowserScrollLeft() , getBrowserScrollTop(), target_y );
	}else{
		setPageScrollAutoDown( getBrowserScrollLeft() , getBrowserScrollTop(), target_y );
	}
 }
 function setPageScrollAutoUp( x , y , top ) {

	if( y > top ){
		      if( y      == top ){
		}else if( y -1000 > top ){ y-=500;
		}else if( y - 500 > top ){ y-=300;
		}else if( y - 300 > top ){ y-=250;
		}else if( y - 200 > top ){ y-=200;
		}else if( y - 150 > top ){ y-=150;
		}else if( y - 100 > top ){ y-=100;
		}else if( y -  50 > top ){ y-=50;
		}else if( y -  20 > top ){ y-=20;
		}else if( y -  10 > top ){ y-=10;
		}else if( y -   5 > top ){ y-=5;
		}else{ y = top;
		}
	}else{	y = top;
	}

	      if(y == top){
		window.scroll( x , y );
	}else if(y != top){
		window.scroll( x , y );
		setTimeout('setPageScrollAutoUp('+ x +','+ y +','+ top +')', 50);// タイムアウト (繰り返し)
	}else{
		window.scroll( x , y );
	}
 }
 function setPageScrollAutoDown( x , y , top ) {

	if( y < top ){
		      if( y      == top ){
		}else if( y +1000 < top ){ y+=500;
		}else if( y + 500 < top ){ y+=300;
		}else if( y + 300 < top ){ y+=250;
		}else if( y + 200 < top ){ y+=200;
		}else if( y + 150 < top ){ y+=150;
		}else if( y + 100 < top ){ y+=100;
		}else if( y +  50 < top ){ y+=50;
		}else if( y +  20 < top ){ y+=20;
		}else if( y +  10 < top ){ y+=10;
		}else if( y +   5 < top ){ y+=5;
		}else{ y = top;
		}
	}else{	y = top;
	}

	      if(y == top){
		window.scroll( x , y );
	}else if(y != top){
		window.scroll( x , y );
		setTimeout('setPageScrollAutoDown('+ x +','+ y +','+ top +')', 50);// タイムアウト (繰り返し)
	}else{
		window.scroll( x , y );
	}
 }


 function setIconFinger( id ){//
	var html='';
	html +='<div id="" class="" style="position:relative; z-index:5;">';// 基準座標
	html +='<div id="" class="" style="position:absolute; z-index:5; left:-10px; top:10px;">';// 相対座標
	html +='<img src="../../info/img/icon_ff_finger.gif" border="0" style="" alt="" title="">';
	html +='</div></div>';
	id.innerHTML=html;
 };//
 function setIconHome( id ){//
	var html='';
	html +='<div id="" class="" style="position:relative; z-index:5;">';// 基準座標
	html +='<div id="" class="" style="position:absolute; z-index:5; left:-8px; top:12px;">';// 相対座標
	html +='<img src="../../info/img/logo_16.gif" border="0" width="16" height="16" style="" alt="ウェブGP" title="WEBゲームプラットフォーム">';
	html +='</div></div>';
	id.innerHTML=html;
 };//
 function setIconFamicom( id ){//
	var html='';
	html +='<div id="" class="" style="position:relative; z-index:5;">';// 基準座標
	html +='<div id="" class="" style="position:absolute; z-index:5; left:-8px; top:12px;">';// 相対座標
	html +='<img src="../../info/img/fc_hard_16.gif" border="0" width="16" height="16" style="" alt="ファミコン" title="ファミコン">';
	html +='</div></div>';
	id.innerHTML=html;
 };//
 function setIconSuperFamicom( id ){//
	var html='';
	html +='<div id="" class="" style="position:relative; z-index:5;">';// 基準座標
	html +='<div id="" class="" style="position:absolute; z-index:5; left:-8px; top:12px;">';// 相対座標
	html +='<img src="../../info/img/sfc_hard.gif" border="0" width="16" height="16" style="" alt="スーパーファミコン" title="スーパーファミコン">';
	html +='</div></div>';
	id.innerHTML=html;
 };//
 function setIconClose( id ){//
	id.innerHTML='';
 };//


