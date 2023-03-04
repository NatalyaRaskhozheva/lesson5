function dayWeek(userDay) {
	let result
	if ((userDay < 6) && (userDay > 0)) result = "Робочий день"
	else if ((userDay > 5) && (userDay < 8)) result = "Вихідний день"
	else result = "Некоректні дані"
	return result
}

const userDay = parseInt(prompt(`Введіть номер дня тижня, '1'`))
const message = dayWeek(userDay)

document.write(`${message}`)
