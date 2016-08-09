function fx_calcular()
{
var result;

nombre1= document.calculadora.input1.value; 
nombre2= document.calculadora.input2.value;;

valor1= document.calculadora.input1.value;
valor2= document.calculadora.input2.value;

nombre_op= document.calculadora.op.name;
valor_op=document.calculadora.op.value;  

switch(valor_op)
{
	case "s":
			result = parseInt(valor1) + parseInt(valor2);
			break;
	case "r":
			result = valor1 - valor2;
			break;
	case "m":
			result = valor1 * valor2;
			break;
	case "d":
			result = valor1 / valor2;
			break;
}
alert ("el resultado es: " + result);
}