function table(amountLines, amountColumns) {
	document.write('<table border="1px"><tbody>')
	for (let i = 0; i < amountLines; i++) {
		document.write('<tr>')
		for (let a = 1; a <= amountColumns; a++) {
			document.write(`<td>${a}</td>`)
		}
		document.write('</tr>')
	}
	document.write('</tbody></table>')
}
let amountLines = parseInt(prompt('Введіть кількість рядків', '0'))
let amountColumns = parseInt(prompt('Введіть кількість стовпців', '0'))
table(amountLines, amountColumns)
