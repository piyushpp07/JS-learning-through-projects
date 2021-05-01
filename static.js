function ageInDays() {
    var days = prompt("in which year you were born");
    var ageInDays = (2021 - days) * 365;
    console.log(ageInDays);
    var h1 = document.createElement('h1'); //CREATE ELEMENT USING JS
    var textAnswer = document.createTextNode('You are ' + ageInDays + ' days Old'); //CREATING TEXT FOR HTML
    h1.setAttribute('id', 'ageInDays'); //SETTING ID FOR THE AGE
    h1.appendChild(textAnswer); //ADDING TO H1 THE TEXT GENRATED
    document.getElementById('flexbox-result').appendChild(h1); //ADDING THE H1 TO THE RESULT
}

function result() {
    document.getElementById('ageInDays').remove();
}

//cat generation]
function generateCat() {
    var image = document.createElement('img');
    var div = getElementById('flexbox-container-2');
    image.src = "https://cdn2.thecatapi.com/images/8gi.gif";
    div.appendChild(image);

}
//challenge 3 rps
function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanchoice, botchoice;
    humanchoice = yourChoice.id;
    botchoice = numberToChoice(randToRps());
    console.log(botchoice);
    results = decideWinner(humanchoice, botchoice);
    console.log(results);
    message = finalMessage(results); //{'message}:'you won!' ,'color':''}
    console.log(message);
    rpsFrontEnd(yourChoice, botchoice, message);
}

function randToRps() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissor'][number];
}

function decideWinner(yourchoice, botchoice) {
    var rpsDatabase = {
        'rock': {
            'scissor': 1,
            'rock': 0.5,
            'paper': 0
        },
        'paper': {
            'rock': 1,
            'paper': 0.5,
            'scissor': 0
        },
        'scissor': {
            'scissor': 0.5,
            'rock': 0,
            'paper': 1
        }
    }
    var yourscore = rpsDatabase[yourchoice][botchoice];
    var computerscore = rpsDatabase[botchoice][yourchoice];
    return [yourscore, computerscore];
}

function finalMessage([yourScore, Botscore]) {
    if (yourScore === 0) {
        return {
            'message': 'you Lost',
            'color': 'red'
        };
    } else if (yourScore === 0.5) {
        return {
            'message': 'tied',
            'color': ' yellow'
        };
    } else
        return {
            'message': 'You Won',
            'color': 'green'
        };

}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }
    //lets remove all images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();
    //create divs
    var humandiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messagediv = document.createElement('div');
    humandiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style=' box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'>";
    messagediv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size : 60px ;padding : 30px;'>" + finalMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style=' box-shadow: 0px 10px 50px rgba(243, 38, 233, 1)'>";
    document.getElementById('flex-box-rps-div').appendChild(humandiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    document.getElementById('flex-box-rps-div').appendChild(messagediv);


}
//challenge 4 : change the color of all the buttons
var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);
var copyAllButtions = [];
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtions.push(all_buttons[i].classList[1]);
}
function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === 'red')
        buttonRed();
    else if (buttonThingy.value === 'green')
        buttonGreen();
    else if (buttonThingy.value === 'reset')
        buttonColorReset();
    else if (buttonThingy.value === 'random')
        buttonColorRandom();
}
function buttonRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}
function buttonGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}
function buttonColorReset() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtions[i]);
    }
}
function buttonColorRandom() {
    var choices = ['btn-primary', 'btn-secondary', 'btn-success', 'btn-warning'];
    for (let i = 0; i < all_buttons.length; i++) {
        let randomno = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomno]);
    }
}

