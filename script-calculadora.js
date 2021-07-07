let display = document.getElementById('display')
let formula

SetDisplay = (numberClick) => {
    display.value += numberClick
}

Result = () => {
    
    if (Number.isInteger((eval(display.value))) == false) {
        display.value = (eval(display.value)).toFixed(2)
    } else {
        display.value = (eval(display.value))
    }
}

BackSpace = () => {
    formula = display.value
    formula = formula.substring(0, formula.length-1)
    display.value = formula
}

Clear = () => {
    display.value = ''
}



