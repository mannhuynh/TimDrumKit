

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
}

//add event listener to all document. use "keydown" keyword to detect a keydown from keyboard and run keyStroke function
document.addEventListener("keydown", keyStrock);

//keyStroke function call makeSound function and use event parameter which is colect whenever a key is press down 
function keyStrock(event) {
    //passing event.key argument to makeSound function, this argument is used to detect keystroke event and pass key parameter from makeSound 
    makeSound(event.key);
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