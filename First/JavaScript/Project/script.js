let f1 = {
	'Название': 'Титаник',
	"Год выпуска": 1997,
	"Рейтинг": 8.0,
	"Режиссер": 'Джеймс Кемерон',
	"Актёры": ['Леонардо Ди Каприо', 'Кейт Уинслет'],
	'Жанр': 'Мелодрама'
}

let f2 = {
	'Название': 'Джентельмены',
	"Год выпуска": 2020,
	"Рейтинг": 8.5,
	"Режиссер": 'Гай Ричи',
	"Актёры": ['Меттью МакКохани','Чарли Ханнэм'],
	'Жанр': 'Боевик'
}
let f3 = {
	'Название': 'Мстители: Финал',
	"Год выпуска": 2020,
	"Рейтинг": 7.6,
	"Режиссер": 'Джо Руссо, Энтони Руссо',
	"Актёры": ['Скарлетт Йоханссон','Роберт Дауни — младший','Элизабет Олсен','Бри Ларсон ','Крис Эванс'],
	'Жанр': 'Боевик'
}

let films = [f1, f2, f3]
let option = prompt('1 посмотреть все фильмы\n2 вывести фильмы по жанру\n3 найти фильм по названию')
if(option =='1') {
	printFilms(films)
}
else if (option == '2') {
	let g = prompt('Введите жанр...')
	if(g == ''){
		alert('Вы ничего не ввели!')
	}
	if(g == -1) {
		alert('Ну и ладно')
	}
else if (g != -1){
	let g_films = [];

	for(let i = 0; i<films.length; i++) {
		if(films[i]['Жанр'] == g){
			g_films.push(films[i])
	}
	}
	if (g_films.length == 0){
		alert('Нет фильма с таким жанром')
	}	
else{
	printFilms(g_films)
}
}
}
else if(option == 3) {
	let g = prompt('Введите название фильма...')
	if(g == ''){
		alert('Вы ничего не ввели!')
	}
	if(g == -1) {
		alert('Ну и ладно')
	}
else if (g != -1){
	let name_films = [];

	for(let i = 0; i<films.length; i++) {
		if(films[i]['Название'] == g){
			name_films.push(films[i])
	}
	}
	if (name_films.length == 0){
		alert('Нет фильма с таким названием')
	}	
else{
	printFilms(name_films)
}
}
	}

else{
	alert('Такого фильма у меня нет ;(')
}

function printFilms(films_array) {

	for(let i = 0; i< films_array.length; i++){
		let str = '';
		let f = Object.keys(films_array[i])

	for(let j = 0; j < f.length; j++ ){
		let prop =  f[j]
		str += prop + ': ' + films_array[i][prop] + '\n';
		}

		alert(str)
	}
}
