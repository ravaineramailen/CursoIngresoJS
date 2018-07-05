/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () {
    var temperatura, centigrados;
    temperatura = document.getElementById("Temperatura").value;
    temperatura = parseFloat(temperatura);
    centigrados = (temperatura - 32) /1.8;
    alert(temperatura + " Fahrenheit son " + centigrados + " centigrados");
	
}

function CentigradosFahrenheit () {
    var temperatura, fahrenheit;
    temperatura = document.getElementById("Temperatura").value;
    temperatura = parseFloat(temperatura);
    fahrenheit = (temperatura * 1.8) + 32;
    alert(temperatura + " centigrados son " + fahrenheit + " fahrenheit");
	
}
