//loop for adding EventListener to all buttons

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
	
document.querySelectorAll(".drum")[i].addEventListener("click",respondOnClick);


}


// function plays sound on click as a response using innerHtml of buttons

function respondOnClick(){

  var buttonInnerHtml = this.innerHTML;
  createSound(buttonInnerHtml);
  buttonAnimation(buttonInnerHtml);
  
 }

//  -----------------function plays sound on keypress as a response using key-events ---------------

 document.addEventListener("keydown",respondOnkey);


 function  respondOnkey(event)
 {

    createSound(event.key);
    buttonAnimation(event.key);

 }



// --------------check for clicks and keys----and ----- palys sound------

function createSound(key){

	switch (key)

   {
   
   	case "w" :
  		var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
  		break;

    case "a" :
  		var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
  		break;

  	case "s" :
  		var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
  		break;

  	case "d" :
  		var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
  		break;
  	
    case "j" :
  		var snare = new Audio("sounds/snare.mp3");
        snare.play();
  		break;

  	case "k" :
  		var crash = new Audio("sounds/crash.mp3");
        crash.play();
  		break;
    
    case "l" :
  		var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
  		break;

  	default : alert("worng key");

 
    }

}


//-----------fuction adds the animation to button when called--------------


function buttonAnimation(currentkey){

   var activeKey = document.querySelector("."+currentkey);
   
   activeKey.classList.add("pressed");


   setTimeout(function() {activeKey.classList.remove("pressed");}, 100);
   
}

