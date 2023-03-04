function sum(numberOne, numberTwo, numberThree, numberFour) {
	let result
	result = numberOne + numberTwo + numberThree + numberFour
	return result
}
function product(numberOne, numberTwo, numberThree, numberFour) {
	let result
	result = numberOne * numberTwo * numberThree * numberFour
	return result
}
function averageValue(numberOne, numberTwo, numberThree, numberFour) {
	let result
	result = (numberOne + numberTwo + numberThree + numberFour) / 4
	return result
}
function minValue(numberOne, numberTwo, numberThree, numberFour) {
	let result
	let min = numberOne
	if (numberTwo <= min) { result = numberTwo }
	else if (numberThree <= min) { result = numberThree }
	else if (numberFour <= min) { result = numberFour }
	else result = numberOne
	return result
}


const numberOne = parseInt(prompt(`Введіть перше число`, '1'))
const numberTwo = parseInt(prompt(`Введіть друге число`, '1'))
const numberThree = parseInt(prompt(`Введіть третє число`, '1'))
const numberFour = parseInt(prompt(`Введіть четверте число`, '1'))

const messageSum = sum(numberOne, numberTwo, numberThree, numberFour)
const messageProduct = product(numberOne, numberTwo, numberThree, numberFour)
const messageAverageValue = averageValue(numberOne, numberTwo, numberThree, numberFour)
const messageMinValue = minValue(numberOne, numberTwo, numberThree, numberFour)


document.write(`${messageSum}, ${messageProduct}, ${messageAverageValue}, ${messageMinValue}`)