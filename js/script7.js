function img(number) {
	switch (number) {
		case 1: return document.write(`<img width="40px" src="../img/01.jpg">`);
			break;
		case 2: return document.write(`<img width="40px" src="../img/02.jpg">`);
			break;
		case 3: return document.write(`<img width="40px" src="../img/03.jpg">`);
			break;
		case 4: return document.write(`<img width="40px" src="../img/04.jpg">`);
			break;
	}
}

let number = Math.floor(Math.random() * (5 - 1) + 1)
img(number)