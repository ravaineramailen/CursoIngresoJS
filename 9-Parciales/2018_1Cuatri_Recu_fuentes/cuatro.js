/*(IF)Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los divido, de lo contrario los sumo.
Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y es menor a 50".*/
function mostrar(){
    var num1, num2, div, suma

    num1 = prompt("Ingrese el primer numero");
    num1 = parseInt(num1);
    num2 = prompt("Ingrese el segundo numero");
    num2 = parseInt(num2);


    if (num1 == num2){
        alert("Los numeros son " + num1 + " , " + num2);
    } else if(num1>num2){
        div = num1 / num2;
        alert("El resultado de la division es: " + div);
    } else{
        suma = num1 + num2;
        alert("El resultado de la suma es: " + suma); 
        if(suma < 50){
            alert("La suma es: " + suma + " y es menor a 50"); 
        }
    }
}
