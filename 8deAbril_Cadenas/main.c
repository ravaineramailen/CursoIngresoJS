#include <stdio.h>
#include <stdlib.h>

int main()
{
    char palabra[10]="philipa" , otraPalabra[100] ="Programacion";
    int len, comp;
    strcat(otraPalabra, palabra); //sirve para concatenar
    //strupr(palabra); //pasa todo a mayuscula
    //strlwr(palabra); //pasa todo a miniscula
    //comp= strcmp(palabra, "philipa"//sirve para comparar, devuelve un entero
    //comp = stricmp(palabra, "Philipa");//sirve para comparar aunque tenga mayusculas
    //printf("%d\n", comp);

    //strcpy(palabra, otraPalabra)//copia lo que encuentra
    //strncpy(palabra, otraPalabra,4);//copia de manera segura una cadena a otra

    //printf("Ingrese una palabra: \n");
    //scanf("%[^\n]", palabra); //lee el espacio y funciona en windows y linux
    //fgets(palabra,1024,stdin);
    //gets(palabra); //es lo mismo que "scanf("%s", palabra)" pero para cadenas GETS funciona solo para window
    len = strlen(palabra);

    printf("La palabra es: %s\nCantidad: %d", palabra);

    return 0;
}

/* INGRESAR NOMBRE(nombre) Y APELLIDO(apellido), (apellidoNombre)CONCATENAR NOMBRE Y APELLIDO MUESTRO:(RAVAINERA, MAILEN ANABEL)
