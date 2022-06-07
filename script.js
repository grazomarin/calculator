const bar = document.querySelector('.bar')
const buttons = document.querySelectorAll('button')
const signs = document.querySelectorAll('.sign')
const equal = document.querySelector('.equalize')
const numbers = document.querySelectorAll('.number')

let session = []
let clickCount = 0
bar.textContent = '0'

function math () {
    let result;
    pressedNumber();
    pressedSign();
    evaluate();
}

function pressedNumber () {
    numbers.forEach(number => {
        number.addEventListener('click', () => {
            if (clickCount === 0) {
                bar.textContent = '';
                clickCount += 1;
                bar.textContent += number.textContent;
            } else{
                bar.textContent += number.textContent;
            }
        })
    });
}

function pressedSign () {
    signs.forEach(sign => {
        sign.addEventListener('click', () => {
            clickCount = 0;
            session.push(Number(bar.textContent));
            session.push(sign.textContent);
            bar.textContent = sign.textContent;
        })
    })
}

function evaluate () {
    equal.addEventListener('click', () => {
        clickCount = 0;
        session.push(Number(bar.textContent));
        if (session[1] === '+') {result = add(session[0], session[2])}
        else if(session[1] === '-') {result = minus(session[0], session[2])}
        else if(session[1] === '*') {result = multiply(session[0], session[2])}
        else if (session[1] === '/') {result = divide(session[0], session[2])}
        bar.textContent = result;
        session = []
    });
}

function add (a, b) {return a + b};
function minus (a, b) {return a - b};
function multiply (a, b) {return a * b};
function divide (a, b) {return a / b};

math();

/* numbers are pressed we are just pushing the values into the text content of result. If
not a number is pressed we will record the value of the 1st part and accept the sign. afterwards
let the user to type one more number. if the session exceeds 3 steps we equalize what we have then record
the value for further use*/