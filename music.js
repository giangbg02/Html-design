





var ylxb = new Array;

//****************************js创造歌词***********************//
function creat_lrc_ylxb(){
	
	
	//alert(typeof eval(music_title.innerHTML));
	lrc = eval(music_title.innerHTML);

	/*
	
*/

	for(var i=0; i<=lrc.length - 1; i++){
		ylxb[i] = document.createElement("p");
		
		ylxb[i].innerHTML = lrc[i][1];
		ylxb[i].id = "ylxb_"+ music_title.innerHTML + i;

		ylxb[i].style.top = (i*45)+ 150 +"px";
		ylxb[i].style.left = "0px"
		ylxb[i].style.position = "absolute"
		ylxb[i].style["text-align"] = "center";
		ylxb[i].style.width = "450px";
		ylxb[i].style.color = "green";
		ylxb[i].style["font-size"] = "30px";
		ylxb[i].style["font-weight"] = "900"  ;//加粗
		document.getElementById("lrc_div").appendChild(ylxb[i]);
	}
	
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



function change_music(){
	//alert(change_music_1.value + ".mp3");
	
	if(change_music_1.value != ""){
		if(music_title.innerHTML != change_music_1.value){
			music_title.innerHTML = change_music_1.value;
			del_lrc_ylxb();

			if((change_music_1.value !="一路向北") & (change_music_1.value !="星晴")){
				audio_current_time.src = "music/" + change_music_1.value + ".mp3";
				//del_lrc_ylxb();
				//creat_lrc_ylxb();
				
				
				for(var i=0; i<=ylxb.length - 1; i++){
					ylxb[i].style.display = "none";
				}
					lrc_box_img.src = "img/" + change_music_1.value + ".jpg"

			}

			else if(change_music_1.value == "一路向北" || change_music_1.value == "星晴"){

				audio_current_time.src = "music/" + change_music_1.value + ".mp3";
				//del_lrc_ylxb();
				creat_lrc_ylxb();
				//lrc_change_none();

				/*for(var j=0; j<=56; j++){
					//ylxb[j].style.display = "block";
					//lrc_box_back.style.display = "none";
				}*/
				lrc_box_img.src ="img/" + change_music_1.value +  ".jpg";
				lrc_box_img.style.display = "block";
			}
		}
		audio_current_time.play();
	}
}

function change_music_auto(){
	
	var a = Math.round(Math.random()*8 +1  );
	if(single == 1){
		del_lrc_ylxb();

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
				del_lrc_ylxb();
				//for(var j=0; j<=56; j++){
					//ylxb[j].style.display = "none";
					
				music_title.innerHTML = "告白气球";//lrc_change_none();
				//}
				lrc_box_img.src ="img/" + music_title.innerHTML +  ".jpg";
				//lrc_box_back.style.display = "block";
				break;
				//lrc_box_img.src = "光盘.jpg";
			}

			case(3):{
				audio_current_time.src = "music/" + "江南.mp3";
				del_lrc_ylxb();
				//for(var j=0; j<=56; j++){
					//ylxb[j].style.display = "none";
					
				music_title.innerHTML = "江南";//lrc_change_none();
				//lrc_box_back.style.display = "block";
				//lrc_box_img.src = "光盘.jpg";
				//}
				lrc_box_img.src ="img/" + music_title.innerHTML +  ".jpg";
				break;
			}

			case(4):{
				audio_current_time.src = "music/" + "霍元甲.mp3";
				del_lrc_ylxb();
				//for(var j=0; j<=56; j++){
					//ylxb[j].style.display = "none";
					
				music_title.innerHTML = "霍元甲";//lrc_change_none();
				//lrc_box_back.style.display = "block";
				//lrc_box_img.src = "光盘.jpg";
				//}

				lrc_box_img.src ="img/" + music_title.innerHTML +  ".jpg";
				break;
			}

			case(5):{
				audio_current_time.src = "music/" + "菊花台.mp3";
				del_lrc_ylxb();
				//for(var j=0; j<=56; j++){
					//ylxb[j].style.display = "none";
					
				music_title.innerHTML = "菊花台";//lrc_change_none();
				//lrc_box_img.src = "光盘.jpg";
				//}
				lrc_box_img.src ="img/" + music_title.innerHTML +  ".jpg";
				//lrc_box_back.style.display = "block";
				break;
			}

			case(6):{
				audio_current_time.src = "music/" + "七里香.mp3";
				del_lrc_ylxb();
				//for(var j=0; j<=56; j++){
					//ylxb[j].style.display = "none";
					
				music_title.innerHTML = "七里香";//lrc_change_none();
				//lrc_box_img.src = "光盘.jpg";
				//}
				lrc_box_img.src ="img/" + music_title.innerHTML +  ".jpg";
				//lrc_box_back.style.display = "block";
				break;
			}

			case(7):{
				audio_current_time.src = "music/" + "彩虹.mp3";
				del_lrc_ylxb();
				//for(var j=0; j<=56; j++){
					//ylxb[j].style.display = "none";
					
				music_title.innerHTML = "彩虹";//lrc_change_none();
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
				del_lrc_ylxb();
				//for(var j=0; j<=56; j++){
					//ylxb[j].style.display = "none";
					
				music_title.innerHTML = "发如雪";//lrc_change_none();
				//lrc_box_img.src = "光盘.jpg";
				//}
				lrc_box_img.src ="img/" + music_title.innerHTML +  ".jpg";
				//lrc_box_back.style.display = "block";
				break;
			}
		};
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
							ylxb[j].style.top = ((j-i)*45)+ 150 +"px";
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




