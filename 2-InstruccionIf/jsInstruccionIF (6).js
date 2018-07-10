function mostrar(){
    var edad,msj;
    edad = document.getElementById("edad").value //tomo la edad 
    if ( edad >= 18){
        msj= "La persona es mayor de edad";
    } else{
        if(edad < 13){
            msj ="La persona es un niño";
        }}else{
            msj ="La persona es adolescente";
        }
        alert(msj);
}
//FIN DE LA FUNCIÓN