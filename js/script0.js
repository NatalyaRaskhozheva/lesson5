function month(numberMonth) {
	let result
	switch (numberMonth) {
		case 12:
		case 1:
		case 2: result = 'Зима'
			break;
		case 3:
		case 4:
		case 5: result = 'Весна'
			break;
		case 6:
		case 7:
		case 8: result = 'Літо'
			break;
		case 9:
		case 10:
		case 11: result = 'Осінь'
			break;
		default: result = ' Error'
			break;
	}
	return result
}
let numberMonth = parseInt(prompt('Введіть номер місяця', '0'))
let message = month(numberMonth)


document.write(`${message}`)