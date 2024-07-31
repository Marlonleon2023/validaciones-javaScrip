

let contador = 0;
let seguir = 'si';

while (seguir === 'si') {
    let menu = parseInt(prompt("Ingresa 1 para comprar cupos, 2 para salir"));

    if (menu === 1) {
        let cupos = parseInt(prompt("Ingresa los cupos deseados a comprar: "));
        contador += cupos;

        if (contador >= 50) {
            console.log("Has alcanzado el límite de 50 cupos.");
            break;
        }
    } else {
        seguir = 'no';
        console.log("Has salido del programa.");
    }
}

document.write("Total de cupos comprados: " + contador);


