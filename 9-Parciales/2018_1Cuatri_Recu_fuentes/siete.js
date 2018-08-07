function mostrar(){
    var nota, edad, sexo;
    var cont = 0;
    var acumNotas = 0;
    var promNotas;
    var notaMin = 10;
    var sexoNotaBaja;
    var cantC = 0;
    var edadMin = 100;
    var sexoJoven, notaJoven;
    var bandera = true;
    var edadPrimera, notaPrimera, msj;

    while(cont < 5){
    //EL INGRESO DE LAS NOTAS Y LA VALIDACION
    nota = prompt("Ingrese la nota del 0 al 10");
    nota = parseInt(nota);
    acumNotas = acumNotas + nota;
    while (nota < 0 || nota > 10 || isNaN(nota)){
        nota = prompt("ERROR. Ingrese la nota del 0 al 10");
        nota = parseInt(nota);
    }
    

    //EL INGRESO DE LA EDAD Y LA VALIDACION
    edad = prompt("Ingrese la edad del alumno");
    edad = parseInt(edad);
    while(edad<0 || edad > 100 || isNaN(edad)){
        edad = prompt("Ingrese la edad del alumno");
        edad = parseInt(edad);
    }


    //EL INGRESO DEL SEXO Y LA VALIDACION
    sexo = prompt("Ingrese el sexo F (femenino) ó M (masculino)");
    sexo = sexo.toLocaleLowerCase();
    while (sexo != "f" && sexo != "m"){
        sexo = prompt("ERROR. Ingrese el sexo F (femenino) ó M (masculino)");
        sexo = sexo.toLocaleLowerCase();
    }

    cont++;

    //a) El promedio de las notas totales.
    promNotas = acumNotas/cont;
    promNotas = parseInt(promNotas);

    //b) La nota más baja y el sexo de esa persona. 
    if(nota < notaMin){
        notaMin = nota;
        sexoNotaBaja = sexo;
    }
    
    //c) La cantidad de varones mayores a 18, que su nota haya sido mayor o igual a 6. 
    if(sexo == "m" && edad > 18 && nota >=6){
        cantC++;
    }

    //d) El sexo y la nota del más joven.
    if(edad < edadMin){
        edadMin = edad;
        sexoJoven = sexo ;
        notaJoven = nota
    }
    }

    /*e) La edad y la nota de la primera mujer ingresada o informar si no hubo ninguna mujer.

    if (bandera){
        bandera = false;
        if(sexo == "f" || cont== 1){
            edadPrimera = edad;
            notaPrimera = nota;
            msj=(edadPrimera + " es la edad " + notaPrimera + " es la nota de la primera mujer ingresada");
        } else {
            msj=("No se ingresaron los datos de ninguna mujer");
        }
    }*/
    
    alert(" A) El promedio de las notas totales es: " + promNotas + 
          " B)La nota mas baja es: " + notaMin + " y el sexo de esta persona es: " + sexoNotaBaja + 
          " C) La cantidad de varones mayores a 18 y que su nota haya sido mayor o igual a 6, es: " + cantC +
          " D) Es sexo de la persona mas joven es: " + sexoJoven + " ,la nota del mas joven es: " + notaJoven);
    
}
