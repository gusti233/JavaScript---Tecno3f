// Alumno: SUAREZ ZENIQUEL, Tomas Alfonso - DNI: 44622142
const PromptSync = require("prompt-sync");
const prompt = PromptSync(); 


/* 
Ejercicio 1: Clasificación de Número Entero
Pide al usuario que ingrese un número entero. Luego, muestra un mensaje indicando si el número
es:
"Positivo" si es mayor que cero.
"Negativo" si es menor que cero.
"Cero" si es igual a cero.
*/ 

let num = parseInt(prompt("Ingrese un numero entero: "));

if (num >0)
    { 
        console.log(`El nro ingresado:  ${num} es POSITIVO`); 
    } 
    else if (num < 0) 
    {
        console.log(`El nro ingresado:  ${num} es NEGATIVO`); 
    }
        else 
    {
        console.log(`El nro ingresado es cero`);
    }



/*
Ejercicio 2: Determinar Tipo de Triángulo
Realiza un programa que solicite al usuario las longitudes de los tres lados de un triángulo (tres números).
Luego, muestra el tipo de triángulo que forman según las siguientes reglas:
Equilátero: si todos los lados son iguales.
Isósceles: si dos lados son iguales.
Escaleno: si todos los lados son diferentes.

*/ 

console.log("Ingrese los lados de un triangulo: "); 

let lado1= parseInt(prompt('Ingrese el lado A: ')); 
let lado2= parseInt(prompt('Ingrese el lado B: ')); 
let lado3= parseInt(prompt('Ingrse el lado C: ')); 


if (lado1 == lado2)
{ 
    if (lado2 == lado3)
    { 
        console.log(`Triangulo Equilatero de lados iguales de ${lado1}`); 
    }
    else
    {
        console.log(`Triangulo isósceles de lados: Lado A: ${lado1} - Lado B:${lado2} - Lado C: ${lado3}`); 
    }
}
else if (lado2 == lado3)
    { 
        console.log(`Triangulo isósceles de lados: Lado A: ${lado1} - Lado B:${lado2} - Lado C: ${lado3}`); 
    }
    
else if (lado1 == lado3)
    { 
        console.log(console.log(`Triangulo isosceles de lados: Lado A: ${lado1} - Lado B:${lado2} - Lado C: ${lado3}`));
    }  
else 
{ 
    console.log(`Triangulo escaleno de lados: Lado A: ${lado1} - Lado B:${lado2} - Lado C: ${lado3}`); 
}

/* 

Ejercicio 3: Clasificacion de edad
Crea un programa que solicite al usuario su edad y determine en qué etapa de la vida se encuentra:
Menor de 12 es niño, entre 12 y 17 es adolescente, entre 18 y 64 es adulto, de 65 en adelante es adulto
mayor.

*/ 

edad= parseInt(prompt("Ingrese su edad (valor numerico): ")); 

switch (true) {   // Uso case para mayor legibilidad
    case (edad<12): 
        console.log("Es niño"); 
        break;
     
    case ((edad>= 12 && edad<=17)):
       
        console.log("Es adolescente"); 
        break;  
    
    case (edad>=18 && edad<=64): 
        console.log("Es adulto"); 
        break; 
    
    case (edad>=65): 
        console.log("Es adulto mayor"); 
}

/* 
Ejercicio 4: Determinar si un Número es Par o Impar
Pedir al usuario que ingrese un número y determina si es par o impar.

*/ 
num= parseInt(prompt('Ingrese un valor numerico: ')) ; 

if ((num % 2) == 0)
{ 
    console.log(`El nro ingresado ${num} es PAR`); 
}
else
{ 
    console.log(`El nro ingresado ${num} es IMPAR`); 
}


/* Ejercicio 5: Calculo de notas
Pide al usuario que ingrese su calificacion (entre 0 y 100). Luego, mostrar su
equivalencia en letras segun la siguiente informacion:

90-100: A
80-89: B
70-79: C
60-69: D
Menos de 60: F

*/ 

calif= parseInt(prompt('Ingrese su calificacion (1~100) en valor numerico: ')); 

switch (true) {
    case calif <60:
        console.log(`Su calificacion de ${calif} ptos. = F`);
        break;

    case (calif>=60 && calif<=69):
        console.log(`Su calificacion de ${calif} ptos. = D`)
        break;

    case (calif>=70 && calif <=79): { 
        console.log(`Su calificacion de ${calif} ptos. = C`); 
        break;
    }

    case(calif>=80 && calif<=89): {
        console.log(`Su calificacion de ${calif} ptos. = B`); 
        break;
    }

    case(calif>=90): 
    {
        console.log(`Su calificacion de ${calif} ptos. = A`); 
        break; 
    }
}

/* 

Ejercicio 6: Número Mayor
Pedir al usuario que ingrese dos números y muestra cuál es el mayor. En caso de que
sean iguales, indícalo.
Luego intentar hacerlo con tres números (opcional para valientes). Tip: usar variable
auxiliar.

*/ 

num1= parseInt(prompt("Ingrese el primer numero: ")); 
num2= parseInt(prompt("Ingrese el segundo numero: ")); 
num3= parseInt(prompt("Ingrese el tercer numero: ")); 

let mayor = num1; 

if (num2>mayor) { 
    mayor=num2;
}

if (num3>mayor){ 
    mayor=num3;
}

if (num1==num2 && num2==num3)
    { 
        console.log("Los nros ingresados son iguales"); 
    }
else 
    {
        console.log(`El nro mayor ese ${mayor}`);    
    }