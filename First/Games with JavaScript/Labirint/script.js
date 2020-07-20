function mapGen(w, h) {
	function player() {

	}

	let canv = document.querySelector('#canv')
	let ctx = canv.getContext('2d')
	canv.width = 13 * w + 3;
	canv.height = 13 * h + 3;
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canv.width, canv.height);
	//Объявляем массивы для значения множества
	//для хранения клетки справа и клетки снизу
	let column =  Array(w)
	let right = Array(w)
	let button = Array(w)
	//Номер клетки в множестве
	let quan = 1

	for( let str = 0; str < h; str++) {
		//Создание клеточек
		for( let stolb = 0; stolb < w; stolb++) {
			//делаем клетку
			ctx.clearRect(13*stolb + 3, 13*str + 3, 10, 10);
		}
	}
	}


function play() {
	$('#play').remove()
	$('<canvas id="canv">Canvas не поддерживается</canvas>').appendTo('body')
	mapGen(20, 20)
}