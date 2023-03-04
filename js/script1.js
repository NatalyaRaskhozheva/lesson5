function month(userValue) {
	let result
	switch (userValue) {
		case 1: result = "Січень"
			break;
		case 2: result = "Лютий"
			break;
		case 3: result = "Березень"
			break;
		case 4: result = "Квітень"
			break;
		case 5: result = "Травень"
			break;
		case 6: result = "Червень"
			break;
		case 7: result = "Липень"
			break;
		case 8: result = "Серпень"
			break;
		case 9: result = "Вересень"
			break;
		case 10: result = "Жовтень"
			break;
		case 11: result = "Листопад"
			break;
		case 12: result = "Грудень"
			break;
		default: result = "Error"
	}
	return result
}
let userValue = parseInt(prompt(`Введіть номер місяця`, '0'))

let message = (month(userValue))
document.write(`${message}`)