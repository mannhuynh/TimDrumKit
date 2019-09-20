

//Seclect length of 6 classes .drum from HTML file and put to drumButtons variable
var drumButtons = document.querySelectorAll(".drum").length;

//Using for loop to loop through 6 buttons to run mouseClick function in every iters
for (var i = 0; i < drumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", mouseClick);
}

//This function will call makeSound function to play sound by mouse clicks
function mouseClick() {  
    //"this" objects is from the .drum classes called from the for loop. Reference: https://www.w3schools.com/js/js_this.asp
    var buttonInnerHTML = this.innerHTML;
    //call makeSound function and use buttonInnerHTML as argument. 
    makeSound(buttonInnerHTML);
    //call buttonAnimation function to add animation while clicking mouse
    buttonAnimation(buttonInnerHTML);
}

//add event listener to all document. use "keydown" keyword to detect a keydown from keyboard and run keyStroke function
document.addEventListener("keydown", keyStrock);

//keyStroke function call makeSound function and use event parameter which is colect whenever a key is press down 
function keyStrock(event) {
    //passing event.key argument to makeSound function, this argument is used to detect keystroke event and pass key parameter from makeSound 
    makeSound(event.key);
    //call buttonAnimation function to add animation while pressing keys
    buttonAnimation(event.key);
}

//this function will pair each sound to a specific key/ button using switch statement
function makeSound(key) {

    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3"); s
            crash.play();
            break;

        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        default:
            console.log(buttonInnerHTML);
    }

}

//This function is to add animation to the key/ button while they are pressed/ clicked
function buttonAnimation(currentKey){
    //get the active button by selecting by key trigged and concatenating with "."
    var activeButton = document.querySelector("." + currentKey);
    //add press class to apply the .press class from CSS file
    activeButton.classList.add("pressed");
    //built-in function to set time out of an event
    setTimeout( function() { //anonymous function
        activeButton.classList.remove("pressed");
    }, 100); // set time out .1 sec
}



// Pressed class animation from CSS file:
// .pressed {
//     box-shadow: 0 3px 4px 0 #DBEDF3;
//     opacity: 0.5;
//   }
  