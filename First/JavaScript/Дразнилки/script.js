let randAnimals = ['свиньи','жирафа','птицы',"бегемота","выдры",'слона','волка','сурка',"гориллы","чукчи"]

let randPril = ['кривой','большой','тупой','вонючий','страшный','угрюмый','маленький','ущербный','отсталый','некрасивый']

let randBody = ['рот','мозг','нос','лоб','череп','палец','пузяка','затылок','торс','пояс']

let randBodyAnimals = ['зуб','хвост','шерсть','язык','нос']

let name = prompt('Введите ваше имя...')

if (name != null) {

	for(let i = 0; i < 10; i++) {

		let randA = Math.floor(Math.random()*randAnimals.length)

		let randP = Math.floor(Math.random()*randPril.length)

		let randB = Math.floor(Math.random()*randBody.length)

		let randBAn = Math.floor(Math.random()*randBodyAnimals.length)

		let str = name + ' у тебя ' + randBody[randB] + ' еще более ' + randPril[randP] + ' чем '+ randBodyAnimals[randBAn] + ' у ' +randAnimals[randA] + '!';

		alert(str)

}
}
else{
	alert('Ну и ладно')
}

// Спрашиваем человека, хочет он играть или нет
v = confirm('Хочешь сыграть в "орёл или решка"?');
// Если он не хочет
if(v == false) {
alert('Ну как хочешь')
}
else {
// если он захочет спрашиваем
let r = prompt('Орёл или решка');
// если он нажал отмена
if(r == null) {
alert('Ну ладно')
}
else {
// если он ничего не написал
if(r == '') {
alert('Почему ты ничего не написал?')
}
else {
n = r.indexOf('орёл', 'решка')

if(n == -1) {
alert('Не правильно')
}
// Если он написал орёл или решка
else {
// Добавляем ответы
let otvet = ['орёл', 'решка'];
let randA = Math.floor(Math.random()*otvet.length);
// Если он выиграл
if(r == otvet[randA]) {
let str = 'И выпадает: ' + otvet[randA] + '!' + ' Ты выиграл';
alert(str)
}
// Если он проиграл
else {
let str = 'И выпадает: ' + otvet[randA] + '!' + ' Ты проиграл';
alert(str)
}
}
}
}
}