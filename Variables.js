/*Ahora les toca pensar a ustedes. Piensen dos situaciones de la vida cotidiana e
identifiquen las variables que conllevan.
Luego de pensar todas esas variables con sus respectivos valores, deberán
escribirlas en un archivo .js que esté correctamente guardado en la carpeta de
trabajo que hayan armado —si no lo hicieron, deberán armar una—. Piensen
dentro de estas variables qué valores pueden ingresar ustedes en el archivo
directamente y cuáles podría ingresar un usuario. Por ejemplo, en el caso de un
verificador de precios donde queremos compararlo con algún valor específico,
querremos guardar ese valor en nuestro archivo. Los precios, en cambio, sería
ideal que los ingrese el usuario —utilicen prompt para cumplir con esta
consigna—.
Las mismas —con valores asignados en el archivo o bien ingresados por el
usuario— se deberán mostrar por pantalla. Ejemplo:
const nombre = "Esteban"
console.log("Esteban")

console.log(nombre)
Piensen cuál es la diferencia entre la línea 2 y la línea 3. ¿Cuál creen que es la
mejor opción?


//PROFESOR LO HICE CON EL PROMPT
//npm install prompt-sync
const prompt = require("prompt-sync")();

/*Si tomamos la situacion cotidiana de ir comprar al supermercado, podriamos relatar nuestro problema asi:
"Mañana en la mañana, en horario de apertura, ir al supermercado del centro y comprar lo siguiente: 12 huevos, 330.3 gramos de jamon, ver si venden una cafeteras Phillips.
Debemos sumar el valor de todas estas compras para mantener un orden en nuestros gastos semanales."
*/
const prompt = require("prompt-sync")();

const supermercado = "Supermercado del Centro";
const fecha = "2023-10-21";
const horaApertura = "08:00 AM";
const cantidadHuevos = 12;
const pesoJamon = 330.3;
const cafetera = "Phillips";


//Precio Huevos
console.log("------Ingrese precios compra--------")
precioHuevos = parseInt(prompt("Por favor, ingresa precio de los huevos :", 0));

//Precio Jamon
precioJamon = parseInt(prompt("Por favor, ingresa precio del jamoncito :", 0));

//Precio cafetera
precioCafetera = parseInt(prompt("Por favor, ingresa precio de la cafetera :", 0));



sumaPrecios = precioJamon + precioHuevos + precioCafetera;

// Imprime el log total:
console.log("------Compra de hoy--------");
console.log("Lugar: " + supermercado);
console.log("fecha: " + fecha, " a las " + horaApertura);
console.log("------Inventario--------");
console.log(cantidadHuevos + " huevos");
console.log(pesoJamon + " gramos de jamon");
console.log( "1 cafetera " + cafetera);
console.log("Gasto total: " + sumaPrecios );

/*Desafío extra:
Supongamos que estás acomodando tu casa y guardaste las remeras en el cajón
de los pantalones ¡Un horror! ¿Cómo haríamos para invertirlos?
Pensá con qué código podrías invertir el contenido de las variables de cajones.*/
cajonRemeras = '';
cajonPantalones = 'Remeras';

if(cajonPantalones = 'Remeras'){
    cajonPantalones = 'Pantalones'
    cajonRemeras = 'Remeras'
} else {
    console.log("todo en orden")
}