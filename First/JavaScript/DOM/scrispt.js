let primer ='';

function equal() {
	let res = eval(primer)
	$('#test').text(res)
	primer = '';
}

function eraseCompletely(){
	primer = eval('0')
	$('#test').text(primer)
	primer = '';
}
function erase() {
	arr = primer.split("")
	console.log(arr)
	arr.pop()
	primer = arr.join("")
	$('#test').text(primer)
	if(primer == ''){
		$('#test').text(eval('0'))
	}
	
}

function paste(symbol) {
	let id = '#' + symbol
	primer += $(id).text()
	$('#test').text(primer)

}
