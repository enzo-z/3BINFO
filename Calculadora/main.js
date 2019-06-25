//Javascript da calculadora!
var btnElement = document.getElementById('botao');
btnElement.onclick = function(){
	var n1 = parseInt(document.getElementById('number').value);
	var n2 = parseInt(document.getElementById('number2').value);
    alert(n1+n2);
}

