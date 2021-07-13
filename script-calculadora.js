let display = document.querySelector("#display")
let formula

SetDisplay = (numberClick) => {
    display.value += numberClick
    document.querySelector("#display").style.color = "#000000"
}

Result = () => {
    
    if (Number.isInteger((eval(display.value))) == false) {
        display.value = (eval(display.value)).toFixed(2)
        document.querySelector("#display").style.color = "#008000"
    } else {
        display.value = (eval(display.value))
        document.querySelector("#display").style.color = "#008000"
    }
}

BackSpace = () => {
    formula = display.value
    formula = formula.substring(0, formula.length-1)
    display.value = formula
    document.querySelector("#display").style.color = "#000000"
}

Clear = () => {
    display.value = ''
    document.querySelector("#display").style.color = "#000000"
}



