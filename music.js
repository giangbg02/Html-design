

var nihonn_music = 0;
function hello(){
	var hello_button = document.getElementById("hello_button");
	if(nihonn_music == 0){
		nihonn_music = 1;
		hello_button.innerHTML = "Normal";
	}
	else if(nihonn_music == 1){
		nihonn_music = 0;
		hello_button.innerHTML = "NHM";
	}
}


var ylxb = new Array;



//****************************js创造歌词***********************//
function creat_lrc_ylxb(){
	
	var bbbbb = document.getElementById("lrc_div");
	//alert(typeof eval(music_title.innerHTML));
	lrc = eval(music_title.innerHTML);

	/*
	
*/

	for(var i=0; i<=lrc.length - 1; i++){
		ylxb[i] = document.createElement("p");
		
		ylxb[i].innerHTML = lrc[i][1];
		ylxb[i].id = "ylxb_"+ music_title.innerHTML + i;

		ylxb[i].style.top = (i*70)+ 250 +"px";
		ylxb[i].style.left = "0px"
		ylxb[i].style.position = "absolute"
		ylxb[i].style["text-align"] = "center";
		ylxb[i].style.width = "450px";
		ylxb[i].style.color = "green";
		ylxb[i].style["font-size"] = "30px";
		ylxb[i].style["font-weight"] = "900"  ;//加粗
		document.getElementById("lrc_div").appendChild(ylxb[i]);
	}
	bbbbb.style.display = "block";
}


function creat_js_lrc(){
	var name = eval(music_title.innerHTML);
	var block_html = document.createElement("script");
	block_html.src = "Javascript/"+ music_title.innerHTML +".js";
	block_html.type="text/javascript";
	block_html.id = music_title.innerHTML;
	console.log(music_title.innerHTML);
}


function del_lrc_ylxb(){
	//if(ylxb.length >0)
	//alert( ylxb);
	var bbbbb = document.getElementById("lrc_div");
	childList = bbbbb.childNodes;

	{
		for(var i = childList.length - 1; i >= 0; i--) { 
		  bbbbb.removeChild(childList[i]); 
		  //document.getElementById("ylxb_"+i).innerHTML = "";
		}
	}
}


//*************************************************************//
/*
function lrc_change_none(){
	
	
	//document.getElementById("lrc_box").style.display = "none";
	for(var i = 0;i<document.getElementById("lrc_box").length;i++){
            document.getElementById("lrc_box")[i].style.display = "none";
        }


	for(var j=0; j<= eval(music_title.innerHTML).length - 1; j++){
		var a = document.getElementById("ylxb_"+ music_title.innerHTML + j);
		//alert("ylxb_" + music_title.innerHTML + i);
		a.style.display = "block";
	}
	

	document.getElementById("lrc_box_img").style.display = "block";
	document.getElementById("lrc_box_back").style.display = "block";
}
*/

function Lock(){
	var lock_button = document.getElementById("lock_button");
	if(allow_music_out){
		allow_music_out = false;
		lock_button.innerHTML = "Open";
	}
	else if(!allow_music_out){
		allow_music_out = true;
		lock_button.innerHTML = "Lock";
	}
}

var allow_music_out;

function change_music(){
	//alert(change_music_1.value + ".mp3");
	var music_in_store;
	if(change_music_1.value != ""){
		if(music_title.innerHTML != change_music_1.value){

			if(allow_music_out == false){
				for(var k=0; k<= music_store.length - 1; k++){
					if(change_music_1.value == music_store[k])
						 music_in_store = true;
				}
			}
			else if (allow_music_out == true){
				music_in_store = true;
			}

			
			if(music_in_store == true){


				music_title.innerHTML = change_music_1.value;

				del_lrc_ylxb();
				//creat_js_lrc();
				//if((change_music_1.value !="一路向北") & (change_music_1.value !="星晴")){
					//audio_current_time.src = "music/" + change_music_1.value + ".mp3";
					//del_lrc_ylxb();
					//creat_lrc_ylxb();
					//creat_lrc_ylxb();
					
					//for(var i=0; i<=ylxb.length - 1; i++){
						//ylxb[i].style.display = "none";
					//}*/
						//lrc_box_img.src = "img/" + change_music_1.value + ".jpg"

				//}

				//else if(change_music_1.value == "一路向北" || change_music_1.value == "星晴")
				//{
				if(nihonn_music == 0){
					audio_current_time.src = "music/" + change_music_1.value + ".mp3";
				}
				else if(nihonn_music == 1){
					audio_current_time.src = "music/nihonn/" + change_music_1.value + ".mp3";
				}
				//del_lrc_ylxb();
				for(var k=0; k<= music_store.length - 1; k++){
					if(change_music_1.value == music_store[k])
					creat_lrc_ylxb();     //为了防止库里面没有的array出现问题
				}
				
				//lrc_change_none();

				/*for(var j=0; j<=56; j++){
					//ylxb[j].style.display = "block";
					//lrc_box_back.style.display = "none";
				}*/
				lrc_box_img.src ="img/" + change_music_1.value +  ".jpg";
				lrc_box_img.style.display = "block";
				music_in_store = false;
				audio_current_time.play();
				//}
			}
		}
		audio_current_time.play();
	}
}

function change_music_auto(){
	
	var a = Math.round(Math.random()*8 +1  );
	if(single == 1){
		del_lrc_ylxb();



		if(nihonn_music == 0){
			a = Math.round(Math.random()*11 +1  );
			switch(a){

				case(1): {
					audio_current_time.src = "music/" + "一路向北.mp3";
					
						//ylxb[j].style.display = "block";
						
					music_title.innerHTML = "一路向北";
					del_lrc_ylxb();
					creat_lrc_ylxb();
					
					lrc_box_img.src = "img/" + "一路向北.jpg";
					
					lrc_box_img.style.display = "block";
					//lrc_box_back.style.display = "none";
					break;
				}

				case(2):{
					audio_current_time.src = "music/" + "告白气球.mp3";
					music_title.innerHTML = "告白气球";
					del_lrc_ylxb();
					creat_lrc_ylxb();
					//for(var j=0; j<=56; j++){
						//ylxb[j].style.display = "none";
						
					//lrc_change_none();
					//}
					lrc_box_img.src ="img/" + music_title.innerHTML +  ".jpg";
					//lrc_box_back.style.display = "block";
					break;
					//lrc_box_img.src = "光盘.jpg";
				}

				case(3):{
					audio_current_time.src = "music/" + "江南.mp3";
					music_title.innerHTML = "江南";
					del_lrc_ylxb();
					creat_lrc_ylxb();
					//for(var j=0; j<=56; j++){
						//ylxb[j].style.display = "none";
						
					//lrc_change_none();
					//lrc_box_back.style.display = "block";
					//lrc_box_img.src = "光盘.jpg";
					//}
					lrc_box_img.src ="img/" + music_title.innerHTML +  ".jpg";
					break;
				}

				case(4):{
					audio_current_time.src = "music/" + "霍元甲.mp3";
					music_title.innerHTML = "霍元甲";
					del_lrc_ylxb();
					creat_lrc_ylxb();
					//for(var j=0; j<=56; j++){
						//ylxb[j].style.display = "none";
						
					//lrc_change_none();
					//lrc_box_back.style.display = "block";
					//lrc_box_img.src = "光盘.jpg";
					//}

					lrc_box_img.src ="img/" + music_title.innerHTML +  ".jpg";
					break;
				}

				case(5):{
					audio_current_time.src = "music/" + "菊花台.mp3";
					music_title.innerHTML = "菊花台";
					del_lrc_ylxb();
					creat_lrc_ylxb();
					//for(var j=0; j<=56; j++){
						//ylxb[j].style.display = "none";
						
					//lrc_change_none();
					//lrc_box_img.src = "光盘.jpg";
					//}
					lrc_box_img.src ="img/" + music_title.innerHTML +  ".jpg";
					//lrc_box_back.style.display = "block";
					break;
				}

				case(6):{
					audio_current_time.src = "music/" + "七里香.mp3";
					music_title.innerHTML = "七里香";
					del_lrc_ylxb();
					creat_lrc_ylxb();
					//for(var j=0; j<=56; j++){
						//ylxb[j].style.display = "none";
						
					//lrc_change_none();
					//lrc_box_img.src = "光盘.jpg";
					//}
					lrc_box_img.src ="img/" + music_title.innerHTML +  ".jpg";
					//lrc_box_back.style.display = "block";
					break;
				}

				case(7):{
					audio_current_time.src = "music/" + "彩虹.mp3";
					music_title.innerHTML = "彩虹";
					del_lrc_ylxb();
					creat_lrc_ylxb();
					//for(var j=0; j<=56; j++){
						//ylxb[j].style.display = "none";
						
					//lrc_change_none();
					//lrc_box_img.src = "光盘.jpg";
					//}
					lrc_box_img.src ="img/" + music_title.innerHTML +  ".jpg";
					//lrc_box_back.style.display = "block";
					break;
				}

				case(8):{
					audio_current_time.src = "music/" + "星晴.mp3";
					//for(var j=0; j<=56; j++){
						//ylxb[j].style.display = "none";
						
					music_title.innerHTML = "星晴";
					del_lrc_ylxb();
					creat_lrc_ylxb();
						//lrc_change_none();
					//lrc_box_img.src = "光盘.jpg";
					//}
					lrc_box_img.src ="img/" + music_title.innerHTML +  ".jpg";
					//lrc_box_back.style.display = "block";
					break;
				}
				case(9):{
					audio_current_time.src = "music/" + "发如雪.mp3";
					music_title.innerHTML = "发如雪";
					del_lrc_ylxb();
					creat_lrc_ylxb();
					//for(var j=0; j<=56; j++){
						//ylxb[j].style.display = "none";
						
					//lrc_change_none();
					//lrc_box_img.src = "光盘.jpg";
					//}
					lrc_box_img.src ="img/" + music_title.innerHTML +  ".jpg";
					//lrc_box_back.style.display = "block";
					break;
				}
				case(10):{
					audio_current_time.src = "music/" + "龙卷风.mp3";
					music_title.innerHTML = "龙卷风";
					del_lrc_ylxb();
					creat_lrc_ylxb();
					
					lrc_box_img.src ="img/" + music_title.innerHTML +  ".jpg";
					break;
				}
				case(11):{
					audio_current_time.src = "music/" + "明明就.mp3";
					music_title.innerHTML = "明明就";
					del_lrc_ylxb();
					creat_lrc_ylxb();
					
					lrc_box_img.src ="img/" + music_title.innerHTML +  ".jpg";
					break;
				}
				case(12):{
					audio_current_time.src = "music/" + "有何不可.mp3";
					music_title.innerHTML = "有何不可";
					del_lrc_ylxb();
					creat_lrc_ylxb();
					
					lrc_box_img.src ="img/" + music_title.innerHTML +  ".jpg";
					break;
				}
			};
		}
		else if(nihonn_music == 1){
			a = Math.round(Math.random()*19  );
			var bbbbb = document.getElementById("lrc_div");
			
			del_lrc_ylxb();
			switch(a){

				case(1): {
					audio_current_time.src = "music/nihonn/" + "ふわふわ時間.mp3";
					
						//ylxb[j].style.display = "block";
						
					music_title.innerHTML = "ふわふわ時間";
					del_lrc_ylxb();
					creat_lrc_ylxb();
					
					lrc_box_img.src = "img/" + "ふわふわ時間.jpg";
					
					lrc_box_img.style.display = "block";
					//lrc_box_back.style.display = "none";
					break;
				}

				case(2):{
					audio_current_time.src = "music/nihonn/" + "冒険でしょでしょ.mp3";
					music_title.innerHTML = "冒険でしょでしょ";
					del_lrc_ylxb();
					creat_lrc_ylxb();
					
					lrc_box_img.src ="img/" + music_title.innerHTML +  ".jpg";
					break;
				}
				case(3):{
					audio_current_time.src = "music/nihonn/" + "止マレ.mp3";
					music_title.innerHTML = "止マレ";
					del_lrc_ylxb();
					creat_lrc_ylxb();
					
					lrc_box_img.src ="img/" + music_title.innerHTML +  ".jpg";
					break;
				}
				case(4):{
					audio_current_time.src = "music/nihonn/" + "羽.mp3";
					music_title.innerHTML = "羽";
					del_lrc_ylxb();
					creat_js_lrc();
					creat_lrc_ylxb();
					
					lrc_box_img.src ="img/" + music_title.innerHTML +  ".jpg";
					break;
				}
				case(5):{
					audio_current_time.src = "music/nihonn/" + "天使にふれたよ.mp3";
					music_title.innerHTML = "天使にふれたよ";
					del_lrc_ylxb();
					creat_lrc_ylxb();
					
					lrc_box_img.src ="img/" + music_title.innerHTML +  ".jpg";
					break;
				}
				case(6):{
					audio_current_time.src = "music/nihonn/" + "ハレ晴レユカイ.mp3";
					music_title.innerHTML = "ハレ晴レユカイ";
					del_lrc_ylxb();
					//creat_js_lrc();
					creat_lrc_ylxb();
					
					lrc_box_img.src ="img/" + music_title.innerHTML +  ".jpg";
					break;
				}
				case(7):{
					audio_current_time.src = "music/nihonn/" + "パラレル_Days.mp3";
					music_title.innerHTML = "パラレル_Days";
					del_lrc_ylxb();
					
					creat_lrc_ylxb();
					
					lrc_box_img.src ="img/" + music_title.innerHTML +  ".jpg";
					break;
				}
				case(8):{
					audio_current_time.src = "music/nihonn/" + "U_I.mp3";
					music_title.innerHTML = "U_I";
					del_lrc_ylxb();
					creat_lrc_ylxb();
					
					lrc_box_img.src ="img/" + music_title.innerHTML +  ".jpg";
					break;
				}
				case(9):{
					audio_current_time.src = "music/nihonn/" + "Super_Driver.mp3";
					music_title.innerHTML = "Super_Driver";
					del_lrc_ylxb();
					creat_lrc_ylxb();
					
					lrc_box_img.src ="img/" + music_title.innerHTML +  ".jpg";
					break;
				}
				case(10):{
					audio_current_time.src = "music/nihonn/" + "Step_By_Step.mp3";
					music_title.innerHTML = "Step_By_Step";
					del_lrc_ylxb();
					creat_lrc_ylxb();
					
					lrc_box_img.src ="img/" + music_title.innerHTML +  ".jpg";
					break;
				}
				case(11):{
					audio_current_time.src = "music/nihonn/" + "Rage_your_dream.mp3";
					music_title.innerHTML = "Rage_your_dream";
					del_lrc_ylxb();
					creat_lrc_ylxb();
					
					lrc_box_img.src ="img/" + music_title.innerHTML +  ".jpg";
					break;
				}
				case(12):{
					audio_current_time.src = "music/nihonn/" + "Mysterious_Eyes.mp3";
					music_title.innerHTML = "Mysterious_Eyes";
					del_lrc_ylxb();
					creat_lrc_ylxb();
					
					lrc_box_img.src ="img/" + music_title.innerHTML +  ".jpg";
					break;
				}
				case(13):{
					audio_current_time.src = "music/nihonn/" + "Lost_my_music.mp3";
					music_title.innerHTML = "Lost_my_music";
					del_lrc_ylxb();
					creat_lrc_ylxb();
					
					lrc_box_img.src ="img/" + music_title.innerHTML +  ".jpg";
					break;
				}
				case(14):{
					audio_current_time.src = "music/nihonn/" + "Gravity.mp3";
					music_title.innerHTML = "Gravity";
					del_lrc_ylxb();
					creat_lrc_ylxb();
					
					lrc_box_img.src ="img/" + music_title.innerHTML +  ".jpg";
					break;
				}
				case(15):{
					audio_current_time.src = "music/nihonn/" + "God_knows.mp3";
					music_title.innerHTML = "God_knows";
					del_lrc_ylxb();
					creat_lrc_ylxb();
					
					lrc_box_img.src ="img/" + music_title.innerHTML +  ".jpg";
					break;
				}
				case(16):{
					audio_current_time.src = "music/nihonn/" + "Irony.mp3";
					music_title.innerHTML = "Irony";
					del_lrc_ylxb();
					creat_lrc_ylxb();
					
					lrc_box_img.src ="img/" + music_title.innerHTML +  ".jpg";
					break;
				}
				case(17):{
					audio_current_time.src = "music/nihonn/" + "secret_2.mp3";
					music_title.innerHTML = "secret_2";
					del_lrc_ylxb();
					creat_lrc_ylxb();
					
					lrc_box_img.src ="img/" + "Irony" +  ".jpg";
					break;
				}
				case(18):{
					audio_current_time.src = "music/nihonn/" + "メルル.mp3";
					music_title.innerHTML = "メルル";
					del_lrc_ylxb();
					creat_lrc_ylxb();
					
					lrc_box_img.src ="img/" + music_title.innerHTML +  ".jpg";
					break;
				}
				case(0):{
					audio_current_time.src = "music/nihonn/" + "Cagayake_girls.mp3";
					music_title.innerHTML = "Cagayake_girls";
					del_lrc_ylxb();
					creat_lrc_ylxb();
					
					lrc_box_img.src ="img/" + music_title.innerHTML +  ".jpg";
					break;
				}
				bbbbb.style.display = "block";
			}
		}
	}
	audio_current_time.play();
}



//******************歌词同步*************************************//
/*
var audio_current_time = document.getElementById("music_box")
audio_current_time.ontimeupdate = function(){

	alert(audio_current_time.currentTime);
	
}*/


function lrc_change(){

		lrc = eval(music_title.innerHTML);
		//alert(lrc)
		//lrc = 一路向北;

		 for(var i=lrc.length - 1; i>= 0; i--){
				
				if(audio_current_time.currentTime >= lrc[i][0]){
					for(var j=0; j<=lrc.length - 1; j++){
						{
							ylxb[j].style.top = ((j-i)*70)+ 150 +"px";
							ylxb[j].style.left = "0px";
							ylxb[j].style.position = "absolute";
							ylxb[j].style["text-align"] = "center";
							ylxb[j].style.width = "450px";
							ylxb[j].style.color = "green";
							ylxb[j].style["font-size"] = "30px";
							ylxb[j].style["font-weight"] = "900"; //加粗
						}
					}
					ylxb[i].style.color = "red";
					break;
				}
	  		}

}



function search_music(){
	if(change_music_1.value != "")
	window.open("http://music.baidu.com/search?key=" + change_music_1.value);
}

function search_music_title(){
	if(music_title.innerHTML != "")
	window.open("http://music.baidu.com/search?key=" + music_title.innerHTML);
}


var single = 1;  //初始化为random
function one_circulation_f(){
	if(single == 1)
	{
		single = 0;
		one_circulation.innerHTML = "随机模式";
	}
	else if(single == 0)
	{
		single = 1;
		one_circulation.innerHTML = "单曲模式";
	}
}

//*********************音乐库*********************************//

var music_store = new Array;

music_store = [

"一路向北" ,
"告白气球",
"江南",
"霍元甲",
"菊花台",//
"七里香",
"星晴",
"彩虹",
"发如雪",
"ふわふわ時間",
"冒険でしょでしょ",
"天使にふれたよ",
"止マレ",
"羽",//
"ハレ晴レユカイ",
"パラレル_Days",//
"U_I",
"Super_Driver",
"Step_By_Step",
"Rage_your_dream",
"Mysterious_Eyes",
"Lost_my_music",
"Gravity",//
"God_knows",
"Cagayake_girls",
"Irony",
"secret_2",//
"メルル",//
'龙卷风',
'明明就',
'有何不可',
]



function parseLyric(text) {
    lyric = text.split('\n'); //先按行分割
    var _l = lyric.length; //获取歌词行数
    //console.log(lyric);

    lrc = new Array(); //新建一个数组存放最后结果
    for(i=0;i<_l;i++) {
        var d = lyric[i].match(/\[\d{2}:\d{2}((\.|\:)\d{2})\]/g);  //正则匹配播放时间
        var t = lyric[i].split(d); //以时间为分割点分割每行歌词，数组最后一个为歌词正文
        if(d != null) { //过滤掉空行等非歌词正文部分
            //换算时间，保留<a href="https://www.baidu.com/s?wd=%E4%B8%A4%E4%BD%8D%E5%B0%8F%E6%95%B0&tn=44039180_cpr&fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1YLnW0zPWD1PHmkP1bznjFB0ZwV5Hcvrjm3rH6sPfKWUMw85HfYnjn4nH6sgvPsT6KdThsqpZwYTjCEQLGCpyw9Uz4Bmy-bIi4WUvYETgN-TLwGUv3EPWc1PHmznWT1n1bsnjmdPW0Y" target="_blank" class="baidu-highlight">两位小数</a>
            var dt = String(d).split(':'); 
            var _t = Math.round(parseInt(dt[0].split('[')[1])*60+parseFloat(dt[1].split(']')[0])); 
            lrc.push([_t, t[1]]);
        }
    
    } //console.log(lrc);
    return lrc;
}










