//Javascript da calculadora!
var btnElement = document.getElementById('botao');
var n1 = parseInt(document.getElementById('number').value);
var n2 = parseInt(document.getElementById('number2').value);

console.log(n1+n2);
btnElement.onclick = function(){
    alert(n1+n2);
}
