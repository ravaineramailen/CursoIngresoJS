/*(IF)Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los resto, de lo contrario los sumo. 
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y supero el 10".*/
function mostrar(){
    var num1, num2, resta, suma
    num1 = prompt("Ingrese el primer numero");
    num1 = parseInt(num1);
    num2 = prompt("Ingrese el segundo numero");
    num2 = parseInt(num2);
    suma = num1 + num2;
    resta = num1 -num2;
    if (num1 == num2){
        alert("Los numeros son iguales " + num1 + ", " + num2 );
    }
    if (num1 > num2){
        alert("El primer numero es mayor y el resultado de la resta es " + resta);
    } else if (suma > 10){
            alert("La suma es " + suma + " y supero el 10")
    } else{
        alert("El primer numero es menor y el resultado de la suma es " + suma);
    }
}
