
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//----------------------------------------- Detect button press -----------------------------------------
for (var i = 0; i < numberOfDrumButtons; i++) {
   document.querySelectorAll(".drum")[i].addEventListener("click", function () {

      var buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
   });
}

//----------------------------------------- Detect key press -----------------------------------------
document.addEventListener("keypress", function(event){
   makeSound(event.key);
   buttonAnimation(event.key);
});


//----------------------------------------- Make sound section -----------------------------------------
function makeSound(key){

   switch (key) {
      case "a":
         var tom1 = new Audio("/sounds/tom-1.mp3");
         tom1.play();
         break;

      case "s":
         var tom2= new Audio("/sounds/tom-2.mp3");
         tom2.play();
         break;

      case "d":
         var tom3 = new Audio("/sounds/tom-3.mp3");
         tom3.play();
         break;

      case "j":
         var snare = new Audio("/sounds/snare.mp3");
         snare.play();
         break;

      case "k":
         var kick = new Audio("/sounds/kick.mp3");
         kick.play();
         break;

      case "l":
         var crash = new Audio("/sounds/crash.mp3");
         crash.play();
         break;

      default:
         // setTimeout(function(){
         //    alert("!! Invalid Key !!");
         // }, 100);
         break;
   }
}


// ---------------- function to add animation to clicking of button -------------

function buttonAnimation(currentKey){

   var activeButton = document.querySelector("."+currentKey);
   activeButton.classList.add("pressAnimation");

   // remove annimation effect

   setTimeout(function(){
      activeButton.classList.remove("pressAnimation");
   }, 100);  
}

