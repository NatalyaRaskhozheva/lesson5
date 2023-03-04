function inch(userSantmtr) {
	let result
	result = userSantmtr * 0.393701
	return result
}
function pound(userKg) {
	let result
	result = userKg * 2.20462
	return result
}
function mile(userKm) {
	let result
	result = userKm * 0.621371
	return result
}

const userSantmtr = parseFloat(prompt('Введіть значення у сантиметрах', '0'))
const userKg = parseFloat(prompt('Введіть значення у кілограмах', '0'))
const userKm = parseFloat(prompt('Введіть значення у кілометрах', '0'))


const messageInch = inch(userSantmtr)
const messagePound = pound(userKg)
const messageMile = mile(userKm)

document.write(`${messageInch}<br> ${messagePound}<br> ${messageMile}`)