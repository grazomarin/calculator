const bar = document.querySelector('.bar')
const buttons = document.querySelectorAll('button')
const signs = document.querySelectorAll('.sign')
const equal = document.querySelector('.equal')
const numbers = document.querySelectorAll('.number')
const ac = document.querySelector('.AC')
const dot = document.querySelector('.dot')
const plusMinus = document.querySelector('.plusMinus')
const del = document.querySelector('.del')
const perc = document.querySelector('.perc')

let result = 0;
let session = [];
let clickCount = 0;
let signCount = 0;
let dotCount = 0;
let abuseCount = 0;

function math () {
    pressedNumber();
    pressedSign();
    evaluate();
}

function pressedNumber () {
    numbers.forEach(number => {
        number.addEventListener('click', () => {
            abuseCount = 0;
            signs.forEach(sign => {sign.classList.remove('clicked')});
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
            dotCount = 0
            signs.forEach(sign => sign.classList.remove('clicked')); // 
            sign.classList.toggle('clicked')
            if (abuseCount === 0) {
                if (signCount === 0) {
                    clickCount = 0;
                    session.push(Number(bar.textContent));
                    session.push(sign.textContent);
                    signCount += 1
                    abuseCount += 1
                } else {
                    session.push(Number(bar.textContent));
                    evaluate();
                    session.push(Number(bar.textContent));
                    session.push(sign.textContent);
                } 
            }
        })
    })
};



function evaluate() {
        clickCount = 0;
        if (session[1] === '+') {result = add(session[0], session[2])}
        else if(session[1] === '-') {result = minus(session[0], session[2])}
        else if(session[1] === '*') {result = multiply(session[0], session[2])}
        else if (session[1] === '/') {result = divide(session[0], session[2])}
        else if (session[1] === '%') {result = remainder(session[0], session[2])}
        session = []
        bar.textContent = parseFloat(result.toFixed(3))
        if (bar.textContent == 'NaN' || bar.textContent == 'Infinity') {bar.textContent = 'ERROR';}
}


equal.addEventListener('click', () => {
    signs.forEach(sign => sign.classList.remove('clicked'));
    dotCount = 0
    session.push(Number(bar.textContent));
    evaluate();
    signCount = 0;
});

function add (a, b) {return a + b};
function minus (a, b) {return a - b};
function multiply (a, b) {return a * b};
function divide (a, b) {return a / b};
function remainder (a, b) {return a % b}; //

math();

ac.addEventListener('click', () => {
    signs.forEach(sign => sign.classList.remove('clicked')); 
    dotCount = 0
    signCount = 0;
    clickCount = 0;
    abuseCount = 0;
    bar.textContent = '0';
    session = [];
})

dot.addEventListener('click', () => {
    signs.forEach(sign => sign.classList.remove('clicked')); 
    if (dotCount === 0) {
        bar.textContent += '.';
        dotCount += 1;
    }
});

plusMinus.addEventListener('click', () => {
    signs.forEach(sign => sign.classList.remove('clicked')); 
    const barAray = Array.from(bar.textContent)
    if (barAray[0] == '-') {
        barAray.splice(0,1);
        bar.textContent = `${barAray.join('')}`;
    } else {
        barAray.unshift('-');
        bar.textContent = `${barAray.join('')}`;
    }
});

del.addEventListener('click', () => {
    const barAray = Array.from(bar.textContent)
    barAray.pop()
    bar.textContent = barAray.join()
})


const root = document.documentElement
const theme = document.querySelector('.theme')

let themeVal = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light'
if (themeVal === 'dark') {
    root.className = 'dark';
    theme.textContent = 'Light Theme'
} else {
    root.className = 'light';
    theme.textContent = 'Dark Theme'
}

theme.addEventListener('click', () => {
    if (themeVal === 'dark') {
        themeVal = 'light'
        root.className = 'light'
        theme.textContent = 'Dark Theme'
    } else {
        themeVal = 'dark'
        root.className = 'dark'
        theme.textContent = 'Light Theme'
    }
})
/* if dark mode pref matches change txt to  */