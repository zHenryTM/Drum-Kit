function playSound(character) {
    switch (character) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3')
            audio.play()
            break;

        case "a":
            var audio = new Audio('sounds/tom-2.mp3')
            audio.play()
            break

        case "s":
            var audio = new Audio('sounds/tom-3.mp3')
            audio.play()
            break

        case "d":
            var audio = new Audio('sounds/tom-4.mp3')
            audio.play()
            break

        case "j":
            var audio = new Audio('sounds/snare.mp3')
            audio.play()
            break

        case "k":
            var audio = new Audio('sounds/crash.mp3')
            audio.play()
            break

        case "l":
            var audio = new Audio('sounds/kick-bass.mp3')
            audio.play()
            break

        default: 
            console.log(buttonInnerHTML)
    }
}


function buttonAnimation(character) {

    var botao = document.querySelector("." + character).classList

    botao.add("pressed")
    
    function stopAnimation() {
        botao.remove("pressed")
    }

    setTimeout(stopAnimation, 100)

}


var numeroDeBotoes = document.querySelectorAll(".drum").length;
for (controle = 0 ; controle < numeroDeBotoes ; controle++) {
    document.querySelectorAll(".drum")[controle].addEventListener("click", function () {
            playSound(this.innerHTML);
            buttonAnimation(this.innerHTML);
    });
}


document.addEventListener("keypress", function (event) {
    playSound(event.key);
    buttonAnimation(event.key);
})