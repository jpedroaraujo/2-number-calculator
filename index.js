
function calculateOnOperatorChange(operation) {
    const firstNumber = document.querySelector('[name="num1"]').value
    const secondNumber = document.querySelector('[name="num2"]').value

    console.log(operation)
    console.log(firstNumber, secondNumber)

    if (!firstNumber || !secondNumber || isNaN(firstNumber) || isNaN(secondNumber)) {
        return
    }

    if (operation === 'add') {
        document.querySelector('[name="result"]').value = Number(firstNumber) + Number(secondNumber)
        console.log('add', Number(firstNumber) + Number(secondNumber))
    } else if (operation === 'sub') {
        document.querySelector('[name="result"]').value = Number(firstNumber) - Number(secondNumber)
        console.log('sub', Number(firstNumber) - Number(secondNumber))
    } else if (operation === 'mult') {
        document.querySelector('[name="result"]').value = Number(firstNumber) * Number(secondNumber)
        console.log('mult', Number(firstNumber) * Number(secondNumber))
    } else if (operation === 'div') {
        document.querySelector('[name="result"]').value = Number(firstNumber) / Number(secondNumber)
        console.log('div', Number(firstNumber) / Number(secondNumber))
    } else {
        document.querySelector('[name="result"]').value = ''
    }
}