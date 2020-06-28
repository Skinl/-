// Находим холст на странице
let canv = document.querySelector('#canv');
// Берем констекст холста
let ctx = canv.getContext('2d')

//Прямоугольники
//ctx.strokeRect(x, y, ширина, высота)
// ctx.strokeStyle = 'green'
let gradient = ctx.createLinearGradient(100, 100, 150, 300);
gradient.addColorStop('0','magenta')
gradient.addColorStop('0.5','blue')
gradient.addColorStop('1','red')
ctx.strokeStyle = gradient
ctx.lineWidh = '5';
// ctx.strokeRect(100, 100, 50, 200)

ctx.fillStyle = gradient;	
// ctx.fillRect(300,100, 150, 100)

// ctx.clearRect(120, 120, 250, 100);

ctx.closePath()
// Линии и дуги
ctx.strokeStyle = "black";
ctx.fillStyle = "white"
ctx.beginPath();
for(let i = 0; i < 3; i++) {
 const	y = 400
ctx.arc(250, y-145*i, 75-5*i, 0, 360, false);	
}

ctx.fill()
// ctx.moveTo(55, 30);
// ctx.lineTo(300, 20);
// ctx.lineTo(300, 400);

ctx.stroke();
ctx.beginPath();
for (let i = 0;  i < 2; i++) {
	ctx.fillStyle = "black"
	ctx.fillRect(265-i*40, 80, 10, 10)

}
ctx.closePath()
ctx.arc(250, 110, 5, 0, 360, false);
ctx.fill();
for (let i = 0;  i < 10; i++) {
	ctx.fillStyle = "black"
	ctx.fillRect(262-4*i, 140, 10, 10)

}
ctx.beginPath();
ctx.moveTo(185, 228);
ctx.lineTo(95, 332);
ctx.moveTo(315, 228);
ctx.lineTo(400, 145);
ctx.moveTo(390, 155);
ctx.lineTo(390, 141);
ctx.moveTo(390, 155);
ctx.lineTo(405, 155);
ctx.moveTo(105, 321);
ctx.lineTo(107, 335);
ctx.moveTo(105, 321);
ctx.lineTo(92, 321);




// ctx.closePath();
ctx.stroke();
// ctx.beginPath();
// ctx.strokeStyle = "green";
// ctx.moveTo(0, 0);
// for(let i = 0; i < 10; i++) {
// 	let x = Math.round(Math.random()*500)
// 	let y = Math.round(Math.random()*500)
// 	ctx.lineTo(x, y);
// }
// // ctx.bezierCurveTo(25, 79, 100, 220, 100, 100);
// ctx.stroke();
// ctx.fill();
canv.onmousemove = function(event) {
	 let target = canv.getBoundingClientRect()
	 let x = event.clientX -target.left
	 let y = event.clientY -target.top
	 const pixel = ctx.getImageData(x,y,1,1)
	 let r = pixel.data[0]
	 let g = pixel.data[1]
	 let b = pixel.data[2]
	 let a = pixel.data[3]

	 console.log(pixel)
	 $('#info').text('X:'+ x + ' Y:' + y)
	 $('#color-Code').text('rgba' + '( R:'+ r + ' G:' + g + ' B:' + b + ' A:' + a +')')
	 $('#color').css({
	 	'background-color': 'rgba('+r+','+g+','+b+')',
	 	transition: '0.5s'
	 })

}