
function InicioDelPrograma() {
    let continuar = "Y";
    do {
        let accion = parseInt(prompt("Ingrese el número de la acción que desea realizar:\n1-Vender \n2-Comprar \n3-Ver stock \n4-Salir"))

        switch (accion) {
            case 1:
                Vender();
                break;
            case 2:
                Comprar();
                break;
            case 3:
                TotalDeAlimento();
                break;
            case 4:
                continuar = "N";
                break;
            default:
                continuar = prompt("La opción ingresada es incorrecta. ¿Desea continuar? Y/N")
                break;
        }
    }
    //es null cuando le damos esc
    while (continuar != null && continuar.toLowerCase() != "n")

}

function Vender() {
    let continuar = "Y";

    do {
        let marcaAVender = parseInt(prompt(`Ingrese el número de la marca a vender: ${productos.map(producto => {
            return `\n${producto.id}-${producto.nombre}`
        })} \n5-Volver al menú anterior`))
        //es nan cuando le damos escape, al hacer parseInt y no solo prompt.
        if (marcaAVender == 5 || Number.isNaN(marcaAVender)) {
            break;
        }
        let cantidad = parseInt(prompt("Ingrese cantidad de bolsas"));
        if (cantidad <= 0) {
            alert("La cantidad debe ser mayor a 0");
        }
        productos.map(producto => {
            if (producto.id == marcaAVender) {
                if (producto.stock >= cantidad) { producto.stock -= cantidad }
                else {
                    alert("La cantidad ingresada supera las bolsas en stock, corrobore stock");
                }
            }
        })
    }
    while (continuar != null && continuar.toLowerCase() != "n")
}

function Comprar() {
    let continuar = "Y";
    do {
        let marcaAComprar = parseInt(prompt(`Ingrese el número de la marca a comprar: ${productos.map(producto => {
            return `\n${producto.id}-${producto.nombre}`
        })} \n5-Volver al menú anterior`))
        //es nan cuando le damos escape, al hacer parseInt y no solo prompt.
        if (marcaAComprar == 5 || Number.isNaN(marcaAComprar)) {
            break;
        }
        let cantidad = parseInt(prompt("Ingrese cantidad de bolsas"));
        if (cantidad <= 0) {
            alert("La cantidad debe ser mayor a 0");
        }
        productos.map(producto => {
            if (producto.id == marcaAComprar) {
                producto.stock += cantidad;
                console.log(`Cantidad de bolsas de ${producto.nombre} en stock: ${producto.stock}`)
            }
        })
    }
    while (continuar != null && continuar.toLowerCase() != "n")

}


function TotalDeAlimento() {
    productos.forEach(producto => {
        console.log(`Bolsas de alimento ${producto.nombre}: ${producto.stock}`);
    })
}

InicioDelPrograma();