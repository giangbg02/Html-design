


var input_google;
var Title_google_baidu = new Array;
var Buttun_google_baidu ;
var Title_log_baidu;
var new_Title_log_baidu;
var audio_current_time;
var change_music_1;
var music_title;
var lrc_box_img;
var lrc_box_back;
var one_circulation;
var lrc = new Array;


window.onload=function(){

	input_google = document.getElementById("googleinput");
	Title_google_baidu[0] = document.getElementById("span_g_1");
	Title_google_baidu[1] = document.getElementById("span_g_2");
	Title_google_baidu[2] = document.getElementById("span_g_3");
	Title_google_baidu[3] = document.getElementById("span_g_4");
	Title_google_baidu[4] = document.getElementById("span_g_5");
	Title_google_baidu[5] = document.getElementById("span_g_6");
	Buttun_google_baidu = document.getElementById("button_b_g");
	change_music_1 = document.getElementById("change_music_1");
	music_title = document.getElementById("music_title");
	lrc_box_img = document.getElementById("lrc_box_img");
	lrc_box_back = document.getElementById("lrc_box_back");
	one_circulation = document.getElementById("one_circulation");
	lrc = eval(music_title.innerHTML);

	{
		var aaaaa = document.createElement("div");
		aaaaa.id =  "lrc_div";
		document.getElementById("lrc_box").appendChild(aaaaa);
	}
    

	creat_img();
	change_to_google();
	Title_log_baidu = document.getElementById("baidu_log");
	audio_current_time = document.getElementById("music_box");

	///////////////////////////////////////////////////////////
	creat_lrc_ylxb();
	//change_music_1.value = "一路向北";
	//change_music();
	audio_current_time.ontimeupdate = function(){lrc_change();};
	audio_current_time.onended = function(){change_music_auto();};
	audio_current_time.play();
	//audio_current_time.addEventListener("ended", change_music_auto());
	//audio_current_time.loop=false;



}



function creat_img(){
	new_Title_log_baidu = document.createElement("img");
	new_Title_log_baidu.id = "baidu_log";
	new_Title_log_baidu.src = "img/baidu.png";
	new_Title_log_baidu.width = "250";
	new_Title_log_baidu.height = "90";
	new_Title_log_baidu.style.display = "none";
	new_Title_log_baidu.style.opacity = 0.8;
	
  	
  	
	document.getElementById("title_b_g").appendChild(new_Title_log_baidu);
}

function OpenGoogle(){
	if(Title_google_baidu[0].innerHTML == "G")
	window.open("http://www.google.com.hk");
	else
	window.open("http://www.baidu.com");
}

function baidu_zhidao(){
	window.open("http://baike.baidu.com/link?url=6Jb02zfUcxFnqiW8LYdJFnZjNrc5Jc1wgo5K3Do9htsD5GFZf1ndvxIqNb4RvT0NAOBYByMS64qaM7A5axZFcQDCHcry580SQ0R3aiYwTRYtqTXuR7OnlHze66dKJHo7n6Jl3XrmP4TWlJxqCcRa_K");
}

function Google(){
	if(Title_google_baidu[0].innerHTML == "G")
	window.open("http://www.google.com.hk/#safe=strict&q=" + input_google.value);
	else 
	window.open("http://www.baidu.com.cn/s?wd=" + input_google.value);
}

function change_to_baidu(){
	var baidu_array = ["","","","","",""];
	Title_log_baidu.style.display = "block";
	for(var i=0; i<=5;i++){
		Title_google_baidu[i].innerHTML= baidu_array[i];
	}
	


	Buttun_google_baidu.innerHTML= "Baidu!";

	input_google.placeholder="Baidu here.";
}

function change_to_google(){
	document.getElementById("baidu_log").style.display = "none";
	var google_array = ["G","o","o","g","l","e"];
	for(var i=0; i<=5;i++){
		Title_google_baidu[i].innerHTML= google_array[i];
	}
	


	Buttun_google_baidu.innerHTML= "Google!";
	input_google.placeholder="Google here.";
}


function H_Google(){
	window.open("http://www.google.com.hk");
}
function H_Baidu(){
	window.open("http://www.baidu.com");
}
function H_Ceek(){
	window.open("http://www.ceek.jp");
}
function H_Wiki(){
	window.open("http://www.wikipedia.org/");
}
function H_Zhihu(){
	window.open("http://www.zhihu.com/");
}
function H_Jianshu(){
	window.open("http://www.jianshu.com/");
}
function H_Fanyi(){
	window.open("http://fanyi.baidu.com/?aldtype=16047#auto/zh/");
}
function H_Xueshu(){
	window.open("http://scholar.google.com/");
}
function H_Bilibili(){
	window.open("http://www.bilibili.com/");
}


/*
document.onkeydown=function(e){
  var keycode=document.all?event.keyCode:e.which;
  if(keycode==13){
   	window.open("http://www.google.com.hk/#safe=strict&q=" + input_google.value);
  }
 }
*/




