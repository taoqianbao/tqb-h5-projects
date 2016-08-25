//监控
//1、
var gDomain="sdc.pingan.com";	// SDC Production Mode Domain
var gDcsId="dcs5w0txb10000wocrvqy1nqm_6n1p";
var gFpc="WT-FPC";
var gConvert=true;
var gWTIDJS=window.document.createElement("script");
window.document.getElementsByTagName("head")[0].appendChild(gWTIDJS);
if ((typeof(gConvert)!="undefined")&&gConvert&&(document.cookie.indexOf(gFpc+"=")==-1)&&(document.cookie.indexOf("WTLOPTOUT=")==-1)){
  gWTIDJS.src="http"+(window.location.protocol.indexOf('https:')==0?'s':'')+"://"+gDomain+"/"+gDcsId+"/wtid.js";
}

//2、 
function setsdcjs(){
	//var jDomain="m.pingan.com";  
	//var js_path="/app_js/sdc/prd/sdc_wap.js";
	var js_path="/app_js/wap/v30/c2/weixin/app_js/sdc_wap.js";
	//var domain="http"+(window.location.protocol.indexOf('https:')==0?'s':'')+"://"+jDomain;
	var SDC_js=document.createElement("script");
	//SDC_js.src=domain+js_path;
	SDC_js.src=js_path;
	var headElem=document.getElementsByTagName("head")[0];
	headElem.appendChild(SDC_js);
}
setTimeout('setsdcjs()',0);

function blockScreen(){
	$("#block").css("position","absolute");
	$("#block").css("z-index",9999);
	$("#block").css("background","url(/weixin/app_images/loading.gif) no-repeat center 40%");
	$("#block").css("height","100%");
	$("#block").css("width","100%");
	$("#block").css("display","block");
}

function unlock(){
	$("#block").css("display","none");
}