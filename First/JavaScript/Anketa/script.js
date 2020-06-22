function main() {
	// Получаем данные из формы
	let s_name = $('#s_name').val()
	let name = $('#name').val()
	let f_name = $('#f_name').val()
	let phone = $('#phone').val()
	let email = $('#email').val()

	let date = $('#date').val()
	let age = getAge(date)
	// проверка если возраст -1
	if (age < 0 ) age = 0


	let genderId = $('input[name="gender"]:checked')[0].id
	let gender = $('label[for = "'+genderId+'"]').text()
	
	let city = $('#city>option:selected').text()
	if (city == 'Выберите ваш город') {
		city = 'Неизвестный'
	}

	let about = $('#about').val()
	let images = ''
	let lang = getLang()
	if (lang.length > 0) {
		images = getLogo(lang)
	}
	let pictureLink = $('#picture').attr('src');
	let color = $('#color').val()
	
	// тут писать
	$('form').remove()

	$('body').append('<main class="main">')

	let main = $('.main')

	main.append('<img id="face" src="'+pictureLink+'">')
	$('#face').css('border-color', color);

	makeDivs(main, "Фамилия:", s_name)
	makeDivs(main, "Имя:", name)
	if (f_name) makeDivs(main, "Отчество:", f_name)
	makeDivs(main, "Телефон:", phone)
	makeDivs(main, "E-mail:", email)
	makeDivs(main, "Возраст:", age)
	makeDivs(main, "Пол:", gender)
	if (city) makeDivs(main, "Город:", city)
	if (about) makeDivs(main, "О себе:", about)
	if (images.length > 0) main.append('<div><div class="line">'+images+'</div>')
}
function readURL(input) {
	if (input.files && input.files[0]) {
		let reader = new FileReader();

		reader.onload = function(e) {
			$('#picture').attr('src', e.target.result);
		}
		reader.readAsDataURL(input.files[0])
	}
}
function makeDivs(main, prop, value) {
	main.append('<div class="line"> <span class="prop">'+prop+'</span> <span class="value">'+value+'</span> </div>')
}

function night() {
	
$('body').css({
	'background-color': 'rgb(5, 10, 27)',
	'background-image': 'none',
	color: 'white',
	transition: '2s'

});
}

function day() {
	
$('body').css({
	'background-color': 'white',
	color: 'black',
	transition: '2s'

});
}

function getLogo(lang) {
	let logo = [
		{id: 'HTML', link: 'https://ru.coronalabs.com/wordpress/wp-content/uploads/2014/03/HTML5_Badge_512.png'},
		{id: 'CSS', link: 'https://vignette.wikia.nocookie.net/wikies/images/a/a9/CSS3.png/revision/latest/scale-to-width-down/340?cb=20160909123652&path-prefix=ru'},
		{id: 'JavaScript', link: 'https://w3.org.ua/wp-content/uploads/2017/01/icon.javascript.png'},
		{id: 'PHP', link: 'https://d2xzmw6cctk25h.cloudfront.net/basiccourse/4/image/medium-66392eb922325c581f538a3a4f1d1559.png'},
		{id: 'Pascal', link: 'https://besplatnye-programmy.com/uploads/posts/2013-03/1363979645_pascal-abc.jpg'},
		{id: 'Basic', link: 'https://pbs.twimg.com/profile_images/683053362145673216/vm1InYAB.jpg'},
		{id: 'Python', link: 'https://cms-assets.tutsplus.com/uploads/users/34/posts/25689/preview_image/python.jpg'},
		{id: 'C++', link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmlSAb2ignpTwtpCYVyCBhQB_mu4iLfl6yTu5BZMPtoq8_D6ry&usqp=CAU'},
		{id: 'C#', link: 'https://miro.medium.com/max/512/1*57j81M60MP_GDtVeWrmPpQ.png'},
		{id: 'Dylan', link: 'http://www.dylanpro.com/picts/dylan_banner3.GIF'},
		{id: 'Delphi', link: 'https://habrastorage.org/getpro/habr/hub/cfe/5fe/3c2/cfe5fe3c2d7d088fd194507d92abe731.png'},
		{id: 'Erlang', link: 'https://www.computerhope.com/jargon/e/erlang.jpg'},
		{id: 'Scheme', link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Lambda_lc.svg/80px-Lambda_lc.svg.png'},
		{id: 'Haskell', link: 'https://habrastorage.org/webt/tq/9u/iw/tq9uiw8d_nbb1bbwrfdg1euyvci.png'},
		{id: 'Zonnon', link: 'https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/8345801/oberon.jpg'}
	];

	let images = ''
	for (let i = 0; i < lang.length; i++) {
		let imgLink = logo.find(item => item.id == lang[i]).link
		images += '<img class="icon" src ="'+imgLink+'">'
	}
	return images
}

function getLang() {
	let langID = []
	let checkboxes = $('input[name="lang"]:checked')
	for (let i = 0; i < checkboxes.length; i++ ) {
		langID.push(checkboxes[i].id)
	}
	return langID
}

function getAge(date) {
	//
	let tmp = date.split('-');
	let year = +tmp[0]
	let month = +tmp[1]
	let day = +tmp[2]



	const now = new Date()
	let nowYear = +now.getFullYear()
	let nowMonth = +now.getMonth()+ 1
	let nowDay = +now.getDate()
	console.log(now)

	let age = nowYear - year
	if (nowMonth < month) {
		age--;
	}
	else if (nowMonth == month) {
		if(nowDay < day){
			age--;
		}
	}

	return age
}