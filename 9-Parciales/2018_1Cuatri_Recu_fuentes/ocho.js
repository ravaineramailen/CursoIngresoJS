/*Realizar el algoritmo que permita iterar el ingreso de varios libros con cuatro datos por cada libro:
nombre
cantidad de páginas
cantidad de ventas (0 o más)y
tema (posibles temas: “robótica", "programación", "patrones", "base de datos”) 
validar e ingresar datos hasta que el usuario quiera e informar al terminar el ingreso por document.write.*/
function mostrar(){
    var nombre, cantpag, cantventas, tema;
    var respuesta = "si";
    var cont = 0;
    var cantPagPar = 0;
    var cantPagImpar = 0;
    var cantVentasCero = 0;
    var acumVentas = 0;
    var promVentas;
    var acumPag = 0;

    while(respuesta == "si"){

        cont++; 

        //----------------INGRESO DE DATOS----------------------------

        nombre = prompt("Ingrese el titulo del libro");

        cantpag = prompt("Ingrese la cantidad de paginas");
        cantpag = parseInt(cantpag);
        while(cantpag < 0 || isNaN(cantpag)){
            cantpag = prompt("ERROR. Ingrese la cantidad de paginas");
            cantpag = parseInt(cantpag);
        }

        cantventas = prompt("Ingrese la cantidad de ventas");
        cantventas = parseInt(cantventas);
        acumVentas = acumVentas + cantventas;
        while(cantventas < 0 || isNaN(cantventas)){
            cantventas = prompt("ERROR. Ingrese la cantidad de ventas");
            cantventas = parseInt(cantventas);
        }

        tema = prompt("Ingrese el tema");
        while(tema != "robotica" && tema != "programacion" && tema != "patrones" && tema != "base de datos"){
            tema = prompt("ERROR. Ingrese el tema");
        }

        respuesta = prompt("¿Desea seguir?");

        // ------------------- FIN INGRESO DE DATOS------------------------

        if(cantpag%2==0){
            cantPagPar++; //a) La cantidad de libros con páginas pares. 
        } else{
            cantPagImpar++; //b) La cantidad de libros con páginas impares. 
        }

        if(cantventas == 0){
            cantVentasCero++; //c) La cantidad de ceros ventas. 
        }

        promVentas = acumVentas / cont; //d) El promedio de todas las ventas ingresadas. 
        promVentas = parseInt(promVentas);

        if(tema == "programacion"){
            acumPag = acumPag + cantpag; //e) La suma de todas las páginas de los de "programación".
        }
    }

    //-------------------------MUESTRO LOS RESULTADOS--------------------------

    document.write("A) La cantidad de libros con páginas pares es: " + cantPagPar + "<br>");
    document.write("B) La cantidad de libros con páginas impares es : " + cantPagImpar + "<br>");
    document.write("C) La cantidad de ceros ventas es: " + cantVentasCero + "<br>");
    document.write("D) El promedio de todas las ventas ingresadas es: " + promVentas + "<br>");
    document.write("E) La suma de todas las páginas de los de programación es: " + acumPag);

}
