function main() {
	// body...
	let name = $('#name').val()
	let email = $('#email').val()
	let msg = $('#msg').val()
	console.log(name)
	console.log(email)
	console.log(msg)

	$('#name').remove()
	$('#email').remove()
	$('#msg').remove()
	$('.send').remove()
	$('.input').append('<div class="msg">Ваше сообщение успешно отправлено!<div>')
	return false
}

