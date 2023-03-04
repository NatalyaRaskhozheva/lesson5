function banner(img, title, link) {
	document.write(`<a href="${link}">`)
	document.write(`<h1>${title}</h1>`)
	document.write(`<img src="${img}" alt="photo">`)
	document.write(`</a>`)
}
let img = prompt('Введіть посилання на картинку для банера')
let title = prompt('Введіть назву заголовку')
let link = prompt('Введіть посилання')
banner(img, title, link)

