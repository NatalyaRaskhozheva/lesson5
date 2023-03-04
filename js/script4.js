function math(numberOne, numberTwo, numberThree) {
	let result
	let amountTwin = 0
	let amountPositive = 0
	let amountOver = 0
	if (numberOne % 2 == 0) { amountTwin++ }
	if (numberTwo % 2 == 0) { amountTwin++ }
	if (numberThree % 2 == 0) { amountTwin++ }
	if (numberOne > 0) { amountPositive++ }
	if (numberTwo > 0) { amountPositive++ }
	if (numberThree > 0) { amountPositive++ }
	if (numberOne >= 100) { amountOver++ }
	if (numberTwo >= 100) { amountOver++ }
	if (numberThree >= 100) { amountOver++ }

	return result = document.write(`${amountTwin}, ${amountPositive}, ${amountOver}.`);
}

const numberOne = parseInt(prompt(`Введіть перше число`, '1'))
const numberTwo = parseInt(prompt(`Введіть друге число`, '1'))
const numberThree = parseInt(prompt(`Введіть третє число`, '1'))

const message = math(numberOne, numberTwo, numberThree)

//document.write(`${message}`)