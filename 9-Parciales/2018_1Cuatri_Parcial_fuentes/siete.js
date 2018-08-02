function mostrar() {
    var nombre, edad, sexo;
    var contador = 0;
    var cantFem = 0;
    var cantMasc= 0;
    var cantMayor = 0;
    var cantMenor = 0;
    var mascMayor = 0;
    var edadMin = 101;
    var edadMax = 0;
    var totalMasc = 0;
    var totalFem = 0;
    var promeFem, promMasc, promTotal;
    var nombreViejo , nombreJoven, sexoViejo, nombreFemVieja;
    var edadMaxFem = 0;

     while (contador < 4){
        
        contador++;

        nombre = prompt("Ingrese su nombre");

        edad = prompt("Ingrese su edad");
        edad = parseInt(edad);
        while ((edad < 1 || edad > 100) || isNaN(edad)){
            edad = prompt("ERROR. Ingrese nuevamente su edad");
            edad = parseInt(edad);
        }

        sexo = prompt("Ingrese su sexo M (masculino) ó F (femenino)");
        sexo = sexo.toUpperCase();
        while (sexo != "M" && sexo != "F"){
            sexo = prompt("ERROR. Ingrese nuevamente su sexo M (masculino) ó F (femenino)")
            sexo = sexo.toUpperCase();
        }

        if (sexo == "F"){
            cantFem++; //1-La cantidad de mujeres.
            totalFem += edad;
            if (edad > edadMaxFem){
                nombreFemVieja = nombre;//14-El nombre de la mujer más vieja.
            }
        }

        if (sexo == "M"){
            cantMasc++;//2-La cantidad de hombres.
            totalMasc += edad;
            if(edad > 18){
                mascMayor++;//5-La cantidad de hombres mayores de edad.
            }
        }

         if (edad >= 18){
             cantMayor++;//3-La cantidad de mayores de edad
        } else {
            cantMenor++;//4-La cantidad de menores de edad.
        }

        // ......Maximo y Minimo....
        if (edad < edadMin){
            edadMin = edad;//6-La edad más baja.
            nombreJoven = nombre;//12-El nombre del más joven.
        }
        if (edad > edadMax){
            edadMax = edad;//7-La edad más alta.
            nombreViejo = nombre;//11-El nombre del más viejo.
            sexoViejo = sexo;//13-El sexo del más viejo.
        }
     }

    promFem = (totalFem / cantFem);//8-El promedio de edad de las mujeres.
    promFem = parseInt(promFem);
    promMasc = (totalMasc / cantMasc);//9-El promedio de edad de los hombres.
    promMasc = parseInt(promMasc);
    promTotal = (totalFem + totalMasc) / contador;//10-El promedio de edad total.
    promTotal = parseInt(promTotal);

    //.....Muestro en pantalla......
    document.write("1-La cantidad de mujeres es: " + cantFem + "<br>");
    document.write("2-La cantidad de hombres es: " + cantMasc + "<br>");
    document.write("3-La cantidad de mayores de edad es: " + cantMayor + "<br>");
    document.write("4-La cantidad de menores de edad es: " + cantMenor + "<br>");
    document.write("5-La cantidad de hombres mayores de edad es: " + mascMayor + "<br>");
    document.write("6-La edad más baja es: " + edadMin + "<br>");
    document.write("7-La edad más alta es: " + edadMax + "<br>");
    document.write("8-El promedio de edad de las mujeres es: " + promFem + "<br>");
    document.write("9-El promedio de edad de los hombres es: " + promMasc + "<br>");
    document.write("10-El promedio de edad total es: " + promTotal + "<br>");
    document.write("11-El nombre del más viejo es: " + nombreViejo + "<br>");
    document.write("12-El nombre del más joven es: " + nombreJoven + "<br>");
    document.write("13-El sexo del más viejo es: " + sexoViejo + "<br>");
    document.write("14-El nombre de la mujer más vieja es: " + nombreFemVieja);

    }
