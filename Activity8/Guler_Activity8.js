var button = document.querySelector("#movingbutton");
var count = 0;
var speed = 500;


button.addEventListener("mouseover",()=>setTimeout(change,speed),false);

var m_button = document.getElementById("movingbutton");

m_button.onclick = function(){
	count++;
	console.log('here',count);
	if(count==3){
		alert("Level 2")
		timeout = timeout-100; // decrease the timeout by 100ms
	}
	if(count==6){
		alert("Level 3")
		timeout = timeout-100;
	}
	if(count==9){
		alert("Level 4")
		timeout = timeout-100;
	}
	if(count==12){
		alert("Level 5")
		timeout = timeout-100;
	}
	if(count==15){
		alert("Level 6")
		timeout = timeout-100;
	}
}

function change()
{
let i = Math.floor(Math.random()*300)+1;
let j = Math.floor(Math.random()*300)+1;
    button.style.left = i + "px";
    button.style.top = j + "px";
	
};