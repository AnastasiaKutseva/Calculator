function insert (num){
	document.form.textview.value = document.form.textview.value + num;
}

function operator(num){
	// Записать строку из поля в переменную.
	let str = document.form.textview.value;

	// Если последний символ не дублируется.
	if(str.slice(str.length-1) != num){
		// Добавить новый символ.
		str = str + num;
	}

	// Записать из перемнной в строку.
	document.form.textview.value = str;
}

function clean(){
	document.form.textview.value = '';
}

function delete_(){
	let x = document.form.textview.value;
	document.form.textview.value = x.slice(0, x.length-1);
}

function equall(){
	let x = document.form.textview.value;
	if(x){
		document.form.textview.value = eval(x); //беру значения из строк и считаю//
	}
}