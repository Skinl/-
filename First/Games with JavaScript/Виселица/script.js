

function checkName(str) {
	let error = $('#tabu')
	error.css('display', 'none')
	
	let new_str = str.replace(new RegExp( ' ', 'g'), '')
	const len = new_str.length
	new_str = new_str.toLowerCase()
	
	const len2 = new_str.length
	const len3 = new_str.length
	str = $('#name').val()
	let tabu = ['@', '/', '*', ':', '#', 'виселица']	
	let isTabu = false
	for(let i = 0; i < tabu.length; i++) {
		let index = new_str.indexOf(tabu[i])
		if (index != -1) {
			isTabu = true
			
			error.text('В имени не должны присутствовать:' + tabu.join(' ,  ') + '!')
			error.css('display', 'block')
			error.css({
			'font-size': '25px'

		})
		}
	}

	
	let skip = $('#skip:checked')

	if ( (len2 > 0 && len3 < 10 && !isTabu) || skip.length != 0 ) {
		$('#play').prop('disabled', false)
		$('#play').addClass('play')
	}
	else {
		$('#play').prop('disabled', true)
		$('#play').removeClass('play')
	}
} 



function getName() {
	// body...
	let inp = $('#name').val()
	let skip = $('#skip:checked')	
	console.log(skip.length)
	if (skip.length == 0) {
		return inp
	}
	return "Инкогнито"
}

function LetWord() {
	let arr = ['ежедневник', 'субботник', 'календарь', 'леопард', 'валенок', 'сковородка', 'букет', 'драма', 'издательство', 'сауна', 'леденец', 'получка', 'шашлык','люля-кебаб', 'клаустрофобия', 'зубочистка', 'енот', 'клоп', 'блоха', 'корпоратив', 'акушерка']
	let W = arr.length
	let N = Math.floor(Math.random()*W)
	return arr[N]
}

let name;
let word = LetWord()
let secret = new Array(word.length).fill('_')
// Осталось угадать
let guess = secret.length
// Массив неправельных букв
let wrong = []
let errors = 1
function main() {
	//Получаем имя игрока
	 name = getName()
	// Удаляем со страницы ненужные элементы и вставляем новые
	$('body').empty()
	$('body').css({
		'background-image': "url(https://bgfons.com/uploads/notebook/notebook_texture2465.jpg)"
	})
	
	let div = $('<div class="wrapper">').appendTo('body')
	$('<h1 id="secret">'+secret.join(' ')+'</h1>').appendTo(div)
	let inp = $('<input type="text" maxlength="1" id="letter"> ').appendTo(div)
	$('<button id="game" onclick="game()">Проверить букву</button>').appendTo(div)
	$('<p id="wrong">').appendTo(div)
	let canv = $('<canvas id="canv" Не поддерживается Канвас>').appendTo('body')
	canv.attr({
		width: '500',
		height: '800'
	});
	inp.focus();
}
function game() {

	let letter = $('#letter').val()
	console.log(letter)
	let isGuessed = false;
	for(let i = 0; i < word.length; i++) {
		if (word[i] == letter.toLowerCase()) {
			secret[i] = letter.toUpperCase()
			isGuessed = true
			guess--
		}
	}

	if (guess == 0) {
	// Победа
		HappyEnd()

	}
	else if(errors == 10) {
		//Поражение
		End()
	}

	if (!isGuessed) {
		let i = wrong.indexOf(letter.toUpperCase())
		if (i == -1) {

			wrong.push(letter.toUpperCase())
			drawV(errors)
			errors++
			console.log(errors)
		}

	}

	$('#secret').text(secret.join(' '))
	$('#letter').val('')
	$('#letter').focus()
	$('#wrong').text('Неправильные буквы, цифры и символы:' + wrong.join(', '))
	
}
function drawV(n) {

	var canv = document.querySelector('#canv')
	var ctx = canv.getContext('2d')
	
	ctx.strokeStyle = "red";
	ctx.lineWidth = '5';
	if (n == 1) {
		ctx.moveTo(50, 500);
		ctx.lineTo(150, 500);
		ctx.stroke();
	}
	if (n == 2) {
		ctx.beginPath();
		ctx.moveTo(100, 100);
		ctx.lineTo(100, 500);
		ctx.closePath();
		ctx.stroke();
	}
	if (n == 3) {
		ctx.moveTo(100, 100);
		ctx.lineTo(200, 100);
		ctx.stroke();
	}
	if (n == 4) {
		ctx.moveTo(200, 100);
		ctx.lineTo(200, 200);
		ctx.stroke();
	}
	ctx.strokeStyle = "green";
	if (n == 5) {
		ctx.beginPath();
		ctx.arc(200, 220, 20, 0, 360, false);
		ctx.stroke();
		ctx.closePath();
	}
	if (n == 6) {
	ctx.moveTo(200, 240);
	ctx.lineTo(200, 330);
	ctx.stroke();
	}

	if (n == 7) {
		ctx.moveTo(200, 260);
		ctx.lineTo(170, 300);
		ctx.stroke();
	}

	if (n == 8) {
		ctx.moveTo(200, 260);
		ctx.lineTo(230, 300);
		ctx.stroke();
	}
	
	if (n == 9) {
	ctx.moveTo(200, 330);
	ctx.lineTo(170, 380);
	ctx.stroke();

	}
	
}
function End() {

	var canv = document.querySelector('#canv')
	var ctx = canv.getContext('2d')
	ctx.moveTo(200, 330);
	ctx.lineTo(230, 380);
	ctx.stroke();
		ctx.strokeStyle = "black";
	$('#canv').drawLine({
		strokeStyle : 'black',
		strokeWidh: 10,
		startArrow: true,
		rounded: true,
		arrowAngle: 90,
		arrowRadius: 15,
		x1: 200, y1: 180,
		x2: 300, y2: 50
	}).drawText({
		strokeStyle : 'black',
		strokeWidh: 5,
		fontSize: 20,
		fontFamily: 'Verdana, sans-serif',
		x: 300, y:50,
		text: name
	})

	$(".wrapper").remove()
	$('body').append('<h1 id="end">Вы проиграли!!!!!! <br> YOU LOSE!')
	
}

function HappyEnd() {
	$("#letter").remove()
	$("#game").remove()
	$("#wrong").remove()
	$('body').append('<h1 id="happy-end">Вы победили!!!!!! <br> YOU WIN!')
}







