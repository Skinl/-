function main() {
	// Получаем данные из формы
	let s_name = $('#s_name').val()
	let name = $('#name').val()
	let f_name = $('#f_name').val()
	let phone = $('#phone').val()
	let email = $('#email').val()

	let date = $('#date').val()
	let age = getAge(date)
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
	console.log(nowMonth)
}