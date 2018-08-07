/*Realizar el algoritmo que permita ingresar 
el nombre de un animal del zoológico, 
el peso el cual debe ser entre 1 y 1000 y 
la temperatura del hábitat (entre -30 y 30) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write: */
function mostrar(){
    var nombre, peso, temperatura;
    var cont = 0;
    var respuesta = "si";
    var tempPar = 0;
    var pesoMax = 1;
    var nombrePesado, tempPesado;
    var cantVivenBajoCero = 0;
    var acumPeso = 0;
    var promPeso;
    var pesoMaxBC = 1;
    var pesoMinBC = 1000;

    while(respuesta == "si"){
        cont++; 

        // ---------------------INGRESO DE DATOS-------------------------------
        nombre = prompt("Ingrese el nombre de un animal del zoologico");

        peso = prompt("Ingrese el peso del animal");
        peso = parseInt(peso);
        acumPeso = acumPeso + peso;
        while(peso<1 || peso>1000 || isNaN(peso)){
            peso = prompt("ERROR. Ingrese el peso del animal");
            peso = parseInt(peso);
        }

        temperatura = prompt("Ingrese la temperatura del habitat del animal");
        temperatura = parseInt(temperatura);
        while(temperatura<-30 || temperatura>30){
            temperatura = prompt("ERROR. Ingrese la temperatura del habitat del animal");
            temperatura = parseInt(temperatura);
        }

        respuesta = prompt("¿Desea Seguir?");
        // --------------------- FIN INGRESO DE DATOS-------------------------------

        if(temperatura%2==0){
            tempPar++; //a) La cantidad de temperaturas pares. 
        }

        if(peso > pesoMax){
            pesoMax = peso;
            nombrePesado = nombre;
            tempPesado = temperatura; //b) El nombre y temperatura del animal más pesado.
        }

        if(temperatura < 0){
            cantVivenBajoCero++; //c) La cantidad de animales que viven a menos de 0 grados.
            if(peso > pesoMaxBC){ //e) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.
                pesoMaxBC = peso;
            } 
            if(peso < pesoMinBC){
                pesoMinBC = peso;
            }
        }
        
        promPeso = acumPeso / cont; //d) El promedio del peso de todos los animales.
        promPeso = parseInt(promPeso);	
    }

    //-------------------------MUESTRO LOS RESULTADOS---------------------------------
    document.write("A) La cantidad de temperaturas pares es: " + tempPar + "<br>");
    document.write("B) El nombre del animal más pesado es: " + nombrePesado + " y la temperatura es de: " + tempPesado + "<br>");
    document.write("C) La cantidad de animales que viven a menos de 0 grados es: " + cantVivenBajoCero + "<br>");
    document.write("D) El promedio del peso de todos los animales es: " + promPeso + "<br>");
    document.write("E) El peso máximo es: " + pesoMaxBC + " y el mínimo es: " + pesoMinBC + " de todos los animales cuyas temperaturas son bajo cero");
}
