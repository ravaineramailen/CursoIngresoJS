function Mostrar()
{
	var numero = prompt("ingrese un número entre 0 y 9.");
	while(numero < 0 || numero > 9)
	{
		numero = prompt("Ingrese un numero entre el 0 y el 9.");
	}

	document.getElementById('Numero').value = numero;
}//FIN DE LA FUNCIÓN