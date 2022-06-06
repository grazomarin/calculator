const result = document.querySelector('.result')
const buttons = document.querySelectorAll('button')
const add = document.querySelector('.add')
const subst = document.querySelector('.substract')
const multip = document.querySelector('.multiply')
const divide = document.querySelector('.divide')
const equal = document.querySelector('.equalize')

Array.from(result);

let clickCount = 0;
function showTheValue () {
        buttons.forEach( button => {
            button.addEventListener('click', () => {
                clickCount += 1
                if (clickCount <= 1) {result.textContent += button.textContent}
            })
        })
    }

showTheValue();

