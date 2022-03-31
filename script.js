const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach ((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value)
    })    
})

let prevNumber = ''
let calculatorOperator = ''
let currentNumber ='0'

numbers.forEach ((number) => {
    number.addEventListener ("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

const inputOperators = (operators) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    } 
    calculatorOperators = operators
    currentNumber = '0'
}

const operators = document.querySelectorAll(".operator")

operators.forEach ((operators) => {
    operators.addEventListener("click", (event) => {
        console.log(event.target.value);
        inputOperators(event.target.value);
    })
})

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ''
    switch(calculationOperators) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseInt(prevNumber) - parseInt(currentNumber)
            break
        case "*":
            result = parseInt(prevNumber) * parseInt(currentNumber)
            break
        case "/":
            result = parseInt(prevNumber) / parseInt(currentNumber)
            break
        default:
            break
    }
    currentNumber = result
    calculatorOperators = ''
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperators = ''
    currentNumber = '0'
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}
