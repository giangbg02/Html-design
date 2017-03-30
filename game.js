var score = 0;
var start_game = false;
var game_over;





var block = new Array;
var block_random = new Array;


var num_of_block;

function creat_block_for_game(){
	

	for(var k=0; k<=99; k++){
		block_random[k] = Math.round(Math.random()*3);
	}


	for(var i=0; i<= block_random.length - 1; i++){
		num_of_block = i;

		block[i] = document.createElement("p");
		
		block[i].innerHTML = "B";
		block[i].style.color = "black";
		block[i].id = "block_" + i;

		block[i].style.top = -(i*100) -100 +"px";
		block[i].style.left = (block_random[i]*100) + "px"

		block[i].style["background-color"] = "black";
		block[i].style.position = "absolute"
		block[i].style["text-align"] = "center";
		block[i].style.width = "100px";
		block[i].style.height = "100px";
		block[i].setAttribute("click_ok","true");
		/*block[i].onclick = (function(){
			
			//alert(a.getAttribute("click_ok"));
		})    (num_of_block);*/
		(function(ii){
			block[ii].onclick = function (){	//console.log(ii);
												if(pause_flag == 0){
													score_add(ii);
													hide_block(ii);
												//del_block_del(ii);
												}
											};
		})(i)

		
		document.getElementById("game_block_div").appendChild(block[i]);	
	}
}
/*
function del_block_del(i){
	var del_block = document.getElementById("game_block_div");
		childList = del_block.childNodes;
		del_block.removeChild(childList[i]);	
		//alert("hello")
		// var buff;
		// 	buff = num_of_block;

		// 	 alert(buff);
			// var a = document.getElementById("block_" + i);
			//console.log(i);
}
*/
function hide_block(i){
	var a = document.getElementById("block_" + i);
	a.style.display = "none";
	a.setAttribute("click_ok" , "false");
}

function score_add(i){
	var a = document.getElementById("block_" + i);
	var click_state = a.getAttribute("click_ok");
	if(click_state == "true"){
		score = score + 1;
	}
}

function del_all_block(){
	var bbbbb = document.getElementById("game_block_div");
	childList = bbbbb.childNodes;

	{
		for(var i = childList.length - 1; i >= 0; i--) { 
		  bbbbb.removeChild(childList[i]); 
		  //document.getElementById("ylxb_"+i).innerHTML = "";
		}
	}
}


function start_alert(){
	alert("Please start game!");
}


var pause_flag = 0;
function start(){
	var Start_1 = document.getElementById("Start_1");

	if(start_game == false){
		var start_log = document.getElementById("start_log");
		start_log.style.display = "none";
		start_game = true;
		set_timer = setInterval(timer,100);
		click_img = 0;

	}
	else if(start_game == true){
		if(Start_1.innerHTML == "Start"){
			Start_1.innerHTML = "Pause";
			clearInterval(set_timer);
			pause_flag = 1;

		}
		else{
			Start_1.innerHTML ="Start";
			set_timer = setInterval(timer,100);
			pause_flag = 0;
		}
	}
	
}


function game_over_button(){
	if(start_game == true){
		game_over();
	}
}

function game_over(){
	var score_text_1 = document.getElementById("Score");
	var ID_timeText_1 = document.getElementById("timeText");
	var Start_1 = document.getElementById("Start_1");
	alert("Game Over!! Score: " + score);
	del_all_block();
	creat_block_for_game();

	clearInterval(set_timer);
	px_change = 0;
	start_log.style.display = "block";
	score = 0;
	start_game = false;
	score_text_1.innerHTML = "Score: " + score;
	time_c = 0;
	time_min = 0;
	time_sec = 0;
	pause_flag = 0;
	click_img = 1;
	Start_1.innerHTML ="Start";
	ID_timeText_1.innerHTML = "总用时: " + time_min + "分" + time_sec + "秒";
}

function restart(){
	if(start_game == true){
		game_over();
		start();
	}
}


var time_c = 0;
var time_min;
var time_sec;
var px_change = 0;

function timer(){
	var ID_timeText_1 = document.getElementById("timeText");
	var score_text_1 = document.getElementById("Score");
	time_c = time_c + 1;
	px_change = px_change + 10;
	time_min = parseInt(time_c/600);
	time_sec = parseInt((time_c/10) % 60);

	ID_timeText_1.innerHTML = "总用时: " + time_min + "分" + time_sec + "秒";
	score_text_1.innerHTML = "Score: " + score;
	block_change();
}


function block_change(){
	var block_div_set;
	if(start_game == true){
		//set_timer = setInterval(timer,1000);
		for(var i=0; i<= block_random.length - 1; i++){
			block_div_set = document.getElementById("block_" + i);
			block_div_set.style.top = -(i*100) + px_change*speed_sel +"px";

			var click_on_state = block_div_set.getAttribute("click_ok");
			if(click_on_state == "true"){
				if((-(i*100) + px_change*speed_sel ) >=300 ){
					game_over();
				}
			}


		}
		if((-(99*100) + px_change) >=400 ){
					game_over();
				}


	}
}

var speed_sel = 1;

function speed_selet(){
	//console.log("hello")
	var aaaa=document.getElementById("speed_sel_text");
	switch(speed_sel){
		case(1): {speed_sel = 2;break;}
		case(2): {speed_sel = 3;break;}
		case(3): {speed_sel = 1;break;}
		default: {speed_sel = 1;break;}
	}

	 aaaa.innerHTML = "Speed Level: " + speed_sel;
}


//白块*************************************//
var score_buf = 0;
var click_img = 1;
function game_over_sel_block(){
	score_buf = score_buf + 1;
	if(click_img == 0){
		if(score_buf > (score)){
			game_over();
			score_buf = 0;
		}
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
var game_sel = "bcbk";
function change_game(){
	var game_bcbk = document.getElementById("All_Game");
	var game_ptyx = document.getElementById("ALL");
	var biecaibaikuai_title = document.getElementById("biecaibaikuai_title");
	if(game_sel == "bcbk"){
		game_bcbk.style.display = "none";
		game_ptyx.style.display = "block";
		game_sel = "ptyx";
		biecaibaikuai_title.style.display = "none";
	}
	else if(game_sel == "ptyx"){
		game_bcbk.style.display = "block";
		game_ptyx.style.display = "none";
		biecaibaikuai_title.style.display = "block";
		game_sel = "bcbk";
	}

}







