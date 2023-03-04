function getTemperature(amount) {
	let amountNegative = 0
	for (let i = 0; i < amount; i++) {
		let temperature = parseFloat(prompt('Введіть значення температури', '0'))
		if (temperature < 0) amountNegative++
	}
	return amountNegative
}

const amount = parseInt(prompt('Скільки буде значень?', '0'))
const messageTemperature = getTemperature(amount)

document.write(`Всього було введено ${messageTemperature} значень темпаратури нижче 0`)