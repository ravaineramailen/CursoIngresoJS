function mostrar()
{
	var contador=0;
	var suma=0;
	var numero;
	while(contador <5)
	{
		numero= prompt("Ingrese un numero");
		numero= parseInt(numero);
		contador++;
		while(isNaN(numero) == true )//validacion isNaN para validar si lo ingresado es o no un numero:
		{
			numero = prompt("error, ingrese un numero");
		}
		suma = suma + numero;
	}
	document.getElementById('suma').value=suma;
	document.getElementById('promedio').value=suma/5;
}//FIN DE LA FUNCIÓN