/*Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 
(validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 

Testeo con los siguientes datos
( d , -150(mal) , -50(bien)) 
( z , 0) 
( g , 20) 
( a , 150(mal) , 0(bien)) 
( b , 3) 
( k , 7)*/
function mostrar(){
    var contador = 0;
    var respuesta = "si";
    var letra, num;
    var cantPar = 0;
    var cantImpar = 0;
    var cantCero = 0;
    var acumPos = 0;
    var promPos;
    var acumNeg = 0;
    var numMax = -100;
    var numMin = 100;
    var letraMax, letraMin;

    while(respuesta == "si"){
        letra = prompt("Ingrese una letra");

        num = prompt("Ingrese un numero");
        num = parseInt(num);
        while (num < -100 || num > 100 || isNaN(num)){
            num = prompt("Ingrese un numero");
            num = parseInt(num);
        }
        respuesta = prompt("¿Desea seguir?");
        contador++;
        if(num%2==0){
            cantPar++; //a) La cantidad de números pares. 
        }else{
            cantImpar++; //b) La cantidad de números impares.
        }

        if (num == 0){
            cantCero++; //c) La cantidad de ceros.
        }

        if(num >=0){
            acumPos = acumPos + num;
            promPos = acumPos / contador;
            promPos = parseInt(promPos); //d) El promedio de todos los números positivos ingresados.
        } else{
            acumNeg = acumNeg + num;
            acumNeg = parseInt(acumNeg); //e) La suma de todos los números negativos. 
        }

        //f) El número y la letra del máximo y el mínimo.
        if(num>numMax){
            numMax = num;
            letraMax = letra
        }
        if(num<numMax){
            numMin = num;
            letraMin = letra
        }

    }
    console.log("a) La cantidad de números pares: " + cantPar);
    console.log("b) La cantidad de números impares: " + cantImpar);
    console.log("c) La cantidad de ceros: " + cantCero);
    console.log("d) El promedio de todos los números positivos ingresados: " + promPos);
    console.log("e) La suma de todos los números negativos: " + acumNeg);
}
