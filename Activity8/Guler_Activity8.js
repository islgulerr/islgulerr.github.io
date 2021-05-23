var count = 0;
var speed = 500;
var button = document.querySelector("#movingbutton");

button.addEventListener("mouseover",()=>setTimeout(change,speed));

var m_button = document.getElementById("movingbutton");

m_button.onclick = function(){
	count++;
	console.log('here',count);
	if(count==3){
		alert("Level 2")
		speed = speed-100;
	}else if(count==6){
		alert("Level 3")
		speed = speed-100;
	}else if(count==9){
		alert("Level 4")
		speed = speed-100;
	}else if(count==12){
		alert("Level 5")
		speed = speed-100;
	}else if(count==15){
		alert("Level 6")
		speed = speed-100;
	}
}

function change()
{
let i = Math.floor(Math.random()*300)+1;
let j = Math.floor(Math.random()*300)+1;
    button.style.left = i + "px";
    button.style.top = j + "px";
	
};