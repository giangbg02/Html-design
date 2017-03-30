


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
	allow_music_out = false;
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
	change_music_auto();
	///////////////////////////////////////////////////////////
	//creat_lrc_ylxb();
	//change_music_1.value = "一路向北";
	//change_music();
	audio_current_time.ontimeupdate = function(){lrc_change();};
	audio_current_time.onended = function(){change_music_auto();};
	audio_current_time.play();
	//audio_current_time.addEventListener("ended", change_music_auto());
	//audio_current_time.loop=false;


	//*********game start*********//
	creat_block_for_game();
	
	//**********ptyx**************//
	var game_ptyx = document.getElementById("ALL");
	game_ptyx.style.display = "none";
	ID_timeText_pt = document.getElementById("timeText_pt");
	ID_start_pt = document.getElementById("start_pt");
	randow_s_pt();
	//**************日期***********//
	setInterval(timer_Get_date,100);
}



function creat_img(){
	new_Title_log_baidu = document.createElement("img");
	new_Title_log_baidu.id = "baidu_log";
	new_Title_log_baidu.src = "img/百度_1.png";
	new_Title_log_baidu.width = "250";
	new_Title_log_baidu.height = "120";
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
function H_Haruhi(){
	window.open("http://www.haruhi.tv/");
}

/*
document.onkeydown=function(e){
  var keycode=document.all?event.keyCode:e.which;
  if(keycode==13){
   	window.open("http://www.google.com.hk/#safe=strict&q=" + input_google.value);
  }
 }
*/

//*******************日期********************************//
var calendar_t = new calendar_f();
function calendar_f(in_year, in_month, in_date, in_week, in_hour, in_minute, in_second){
	this.year = in_year;
	this.month = in_month;
	this.date = in_date;
	this.week = in_week;
	this.hour = in_hour;
	this.in_minute = in_minute;
	this.second = in_second;
}

function open_time(){
	window.open("http://www.baidu.com.cn/s?wd=时间");
}


function timer_Get_date(){
	var date_date = new Date();
	var Get_date_year = document.getElementById("Get_date_year");
	var Get_date_month = document.getElementById("Get_date_month");
	var Get_date_date = document.getElementById("Get_date_date");
	var Get_date_week = document.getElementById("Get_date_week");
	var Get_date_hour = document.getElementById("Get_date_hour");
	var Get_date_minute = document.getElementById("Get_date_minute");
	var Get_date_second = document.getElementById("Get_date_second");
	var Get_date_all = document.getElementById("Get_date_all");

	calendar_t.year = date_date.getFullYear();
	calendar_t.month = date_date.getMonth();
	calendar_t.date = date_date.getDate();
	calendar_t.week = date_date.getDay();
	calendar_t.hour = date_date.getHours();
	calendar_t.minute = date_date.getMinutes();
	calendar_t.second = date_date.getSeconds();


	Get_date_year.innerHTML = calendar_t.year+"-";

	if(calendar_t.month <10){
		Get_date_month.innerHTML = "0"+(calendar_t.month + 1) +"-";
	}
	else Get_date_month.innerHTML = calendar_t.month + 1 +"-";
	if(calendar_t.date <10){
		Get_date_date.innerHTML = "0"+(calendar_t.date );
	}
	else Get_date_date.innerHTML = calendar_t.date;
	

	if(calendar_t.hour <10){
		Get_date_hour.innerHTML = "0"+(calendar_t.hour) + ":";
	}
	else Get_date_hour.innerHTML = calendar_t.hour + ":";
	if(calendar_t.minute <10){
		Get_date_minute.innerHTML = "0"+(calendar_t.minute) + ":";
	}
	else Get_date_minute.innerHTML = calendar_t.minute + ":";
	if(calendar_t.second <10){
		Get_date_second.innerHTML = "0"+(calendar_t.second);
	}
	else Get_date_second.innerHTML = calendar_t.second;

	switch(calendar_t.week){
		case(0):{Get_date_week.innerHTML = "星期日";break;};
		case(1):{Get_date_week.innerHTML = "星期一";break;};
		case(2):{Get_date_week.innerHTML = "星期二";break;};
		case(3):{Get_date_week.innerHTML = "星期三";break;};
		case(4):{Get_date_week.innerHTML = "星期四";break;};
		case(5):{Get_date_week.innerHTML = "星期五";break;};
		case(6):{Get_date_week.innerHTML = "星期六";break;};
		default:{Get_date_week.innerHTML = "星期???";break;};
	}

	if(calendar_t.hour >= 6 & calendar_t.hour < 11){
		Get_date_all.innerHTML = "早"+"\n"+"上"+"\n"+"好！"
		Get_date_all.style.color = "yellow";
	}
	else if(calendar_t.hour >= 11 & calendar_t.hour < 14){
		Get_date_all.innerHTML = "中"+"\n"+"午"+"\n"+"好！"
		Get_date_all.style.color = "red";
	}
	else if(calendar_t.hour >= 14 & calendar_t.hour < 17){
		Get_date_all.innerHTML = "下"+"\n"+"午"+"\n"+"好！"
		Get_date_all.style.color = "green";
	}
	else if(calendar_t.hour >= 17 & calendar_t.hour < 20){
		Get_date_all.innerHTML = "傍"+"\n"+"晚"+"\n"+"好！"
		Get_date_all.style.color = "#1065e6";
	}
	else if(calendar_t.hour >= 20 & calendar_t.hour < 24){
		Get_date_all.innerHTML = "晚"+"\n"+"上"+"\n"+"好！"
		Get_date_all.style.color = "pink";
	}
	else if(calendar_t.hour >= 0 & calendar_t.hour < 6){
		Get_date_all.innerHTML = "凌"+"\n"+"晨"+"\n"+"好！"
		Get_date_all.style.color = "green";
	}
	
}







