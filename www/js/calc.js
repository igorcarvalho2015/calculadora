
function calcNum(num) {    								// Insere o número no visor de acordo com o botão que é precionado
if (typeof gvisor == 'undefined') {       
document.calcform.visor.value = '';    
}
document.calcform.visor.value = document.calcform.visor.value + num;
gvisor = 1; 
}
 
function calcLimpar() {									// Função que limpa a calculadora e todas as variáveis existentes 
document.calcform.visor.value = '';    
delete gvalor;
delete goper;
delete gvisor;
} 

function calcOper(oper, valor1, valor2) {				// Função que executa as operações básicas da calculadora 
if (oper == "somar") {									//Soma
var valor = parseFloat(valor1) + parseFloat(valor2);
} else if (oper == "subtrair") {						//Subtração
var valor = valor1 - valor2;
} else if (oper == "multiplicar") {						//Multiplicação
var valor = valor1 * valor2;
} else if (oper == "dividir") {							//Divisão
		if ( valor1 == 0)	{		var valor = 0;  	// Zero dividido por qualquer número é 0
		} else if ( valor2 == 0)	{	var valor = "Erro"; } // Impossível divisão por 0
		else {						var valor = valor1 / valor2; } 
} else if (oper == "potencia") {
	var valor = Math.pow(valor1, valor2); }

return(valor); 
}

function turnsignal () {			// Trocar sinal do número no visor
	document.calcform.visor.value = document.calcform.visor.value * -1;
	}

function square() {					// Raiz quadrada do número no visor
	document.calcform.visor.value = Math.sqrt(document.calcform.visor.value);
}
function decimal() {				// Função que insere o ponto para números decimais
	var aux = document.calcform.visor.value; 
	var FlagNewNum = false;
if (FlagNewNum) {
aux = "0.";
FlagNewNum = false;
}	else if (aux.indexOf(".") == -1) {
	aux += ".";   }
document.calcform.visor.value = aux; }

function calcParse(oper) {			// Função do algoritmo de "passagem" das ações do usuário
var valor = document.calcform.visor.value;
delete gvisor;
if (typeof goper != 'undefined' && oper == 'resultado') {
gvalor = calcOper(goper, gvalor, valor);
document.calcform.visor.value = gvalor;
delete oper;
delete gvalor;
return(0);
} if (typeof gvalor != 'undefined') {
gvalor = calcOper(goper, gvalor, valor);
goper = oper;
document.calcform.visor.value = gvalor;
} else {
gvalor = valor;
goper = oper;
} 
}