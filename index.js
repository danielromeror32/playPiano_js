let numberOfButton = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnnerHTML = this.innerHTML; // get value button   
    makeSound(buttonInnnerHTML);  
    buttonAnimation(buttonInnnerHTML);  
    });
    }

document.addEventListener("keydown", function(event) {
    let key = event.key;
    makeSound(key);
    buttonAnimation(key);   
    });




function makeSound (key){
    switch (key) {
        case "a":
            var key1 = new Audio("./sounds1/c.mp3");
            key1.play(); 
            break;
        case "s":
            var key2 = new Audio("./sounds1/d.mp3");
            key2.play(); 
            break;
        case "d":
            var key3 = new Audio("./sounds1/e.mp3");
            key3.play(); 
            break;
        case "f":
            var key4 = new Audio("./sounds1/f.mp3");
            key4.play(); 
            break;
        case "c":
            var key4 = new Audio("./sounds1/g.mp3");
            key4.play(); 
            break;
        case "h":
            var key4 = new Audio("./sounds1/a.mp3");
            key4.play(); 
            break;
        case "j":
            var key5 = new Audio("./sounds1/b.mp3");
            key5.play(); 
            break;
        case "k":
            var key6 = new Audio("./sounds1/cc.mp3");
            key6.play(); 
            break;
        case "l":
            var key7 = new Audio("./sounds1/dd.mp3");
            key7.play(); 
            break;
        case "n":
            var key8 = new Audio("./sounds1/ee.mp3");
            key8.play(); 
            break;
        default:
            
            break;
    }
}

function buttonAnimation (currentKey){
 let activeButton = document.querySelector("." + currentKey);
 activeButton.classList.add("pressed")

 setTimeout(function(){
    activeButton.classList.remove("pressed")
 }, 100);
}