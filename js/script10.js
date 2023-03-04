function getTemperature(userAmount) {
	let sum = 0
	let plus = 0
	for (let i = 0; i < userAmount; i++) {
		let temperature = parseFloat(prompt('Введіть значення температури', '0'))
		if (temperature > 0) {
			sum = sum + temperature
			plus++
		}
	}
	return sum / plus
}

const userAmount = parseInt(prompt('Скільки показників треба ввести?', '0'))
const messageTemperature = getTemperature(userAmount)
document.write(`${messageTemperature}`)