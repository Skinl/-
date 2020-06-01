question = prompt('Спроси у шара, всё что захочет твоя душа, (не забудь знак "?")');

let N = question.indexOf('?');

while(N == -1){
	question = prompt('Спроси у шара, всё что захочет твоя душа, (не забудь знак "?")');
		if(question!= null){
			N = question.indexOf('?')
		}
		else{
			randindex = answers.length - 1;
			break;
		}
    
}
if(question == null) {
	alert('Ну и ладно');
}

else{
	let answers = ['Да, абсолютно точно.',
			       'Скорее да, чем нет.', 
			       'Нет, исключено.', 
			       'Скорее нет, чем да.', 
			       'Даже не знаю такое...',
			       'Зря не задал вопрос...'
];
	let randindex = Math.floor(Math.random()*(answers.length - 1));
	alert(answers[randindex]);
}


 

 

 
