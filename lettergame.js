//define variables for gameplay
let winCount = 0;
let lossCount = 0;
let guessCount = 9;
let guessedLetters = [];
let guess_div = document.getElementById('guessed');
let count_div = document.getElementById('guessCount');
const pInput = document.getElementById('pInput');
const btn = document.getElementById('btn');

const getCompChoice = () => {
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex]
};
let computerChoice = getCompChoice();
console.log(computerChoice)

const checkResult = () => {
    let inpValue = pInput.value
    const regexp = /[a-z]/g;
    console.log(pInput.value)
    
    if (!regexp.test(inpValue)) {
        clearInput(pInput);
        return alert('enter a lowercase letter');
    } else if (guessedLetters.includes(inpValue)) {
        clearInput(pInput);
        return alert('already guessed')
    } else if (inpValue == computerChoice) {    
        alert('YOU WON!')
        winCount++;
        document.getElementById('win').innerHTML = winCount;
        clearInput(pInput);
        resetGame();
        computerChoice = getCompChoice();
        console.log(computerChoice)
    } else if (guessCount == 0) {
        alert('YOU LOST');
        lossCount++;
        document.getElementById('lose').innerHTML = lossCount;
        clearInput(pInput);
        resetGame();        
    } else {
        guessedLetters += ' ' + inpValue;
        // console.log(guessedLetters)
        guess_div.innerHTML += ' ' + inpValue
        count_div.innerHTML = guessCount ;
        guessCount--;
        clearInput(pInput);
    }
};

pInput.addEventListener('keyup', e => {
    e.preventDefault();
    if (e.keyCode === 13) {
        btn.click();
    }
});

btn.onclick = checkResult;

const resetGame = () => {
    guess_div.innerHTML = [];
    count_div.innerHTML = 10;
    guessCount = 9;
    guessedLetters = [];
};

const clearInput = inp => {
   inp.value = ''; 
};


