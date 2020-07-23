let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }   
}

const inputOperator = (operator) => {
    if(calculationOperator === '') {
        prevNumber = currentNumber
    }
    
    calculationOperator = operator
    currentNumber = '0'

    // prevNumber = currentNumber
    // calculationOperator = operator
    // currentNumber = ''
}

const operators = document.querySelectorAll('.operator')
operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        // console.log(event.target.value)
        inputOperator(event.target.value)
    })
})

const calculate = () => {
    let result = ''
    switch(calculationOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = ''
}

const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', () => {
    //console.log('equal button is passed')
    calculate()
    updateScreen(currentNumber)
})

const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
    calculatorScreen.value = number
}

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () => {
    //console.log('Ac button is pressed')
    clearAll()
    updateScreen(currentNumber)
})

const inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += 0
}

const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
    // console.log(event.target.value)
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

const numbers = document.querySelectorAll('.number')
//console.log(numbers)
numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        // console.log('number is pressed')
        inputNumber(event.target.value)
        updateScreen(event.target.value)
    })
})




















