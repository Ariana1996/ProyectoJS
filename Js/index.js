let bolsasAlimentoRoyal = 5;
let bolsasAlimentoEukanuba = 10;
let bolsasAlimentoWhiskas = 13;
let bolsasAlimentoProplan = 3;

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
        let marcaAVender = parseInt(prompt("Ingrese el número de la marca a vender: \n1-Royal \n2-Eukanuba \n3-Whiskas \n4-Proplan \n5-Volver al menú anterior"))
        //es nan cuando le damos escape, al hacer parseInt y no solo prompt.
        if (marcaAVender == 5 || Number.isNaN(marcaAVender)) {
            break;
        }
        let cantidad = parseInt(prompt("Ingrese cantidad de bolsas"));
        if (cantidad <= 0) {
            alert("La cantidad debe ser mayor a 0");
        }
        switch (marcaAVender) {
            case 1:
                if (cantidad > bolsasAlimentoRoyal) {
                    alert("La cantidad ingresada supera las bolsas en stock, corrobore stock");
                } else {
                    bolsasAlimentoRoyal -= cantidad;
                    console.log(`Cantidad de bolsas de ${ObtenerNombreMarca(marcaAVender)} restantes: ${bolsasAlimentoRoyal}`)
                }
                break;
            case 2:
                if (cantidad > bolsasAlimentoEukanuba) {
                    alert("La cantidad ingresada supera las bolsas en stock, corrobore stock");
                } else {
                    bolsasAlimentoEukanuba -= cantidad;
                    console.log(`Cantidad de bolsas de ${ObtenerNombreMarca(marcaAVender)} restantes: ${bolsasAlimentoEukanuba}`)
                }
                break;
            case 3:
                if (cantidad > bolsasAlimentoWhiskas) {
                    alert("La cantidad ingresada supera las bolsas en stock, corrobore stock");
                } else {
                    bolsasAlimentoWhiskas -= cantidad;
                    console.log(`Cantidad de bolsas de ${ObtenerNombreMarca(marcaAVender)} restantes: ${bolsasAlimentoWhiskas}`)
                }
                break;
            case 4:
                if (cantidad > bolsasAlimentoProplan) {
                    alert("La cantidad ingresada supera las bolsas en stock, corrobore stock");
                } else {
                    bolsasAlimentoProplan -= cantidad;
                    console.log(`Cantidad de bolsas de ${ObtenerNombreMarca(marcaAVender)} restantes: ${bolsasAlimentoProplan}`)
                }
                break;
            default:
                continuar = prompt("La marca ingresada es incorrecta. ¿Desea continuar? Y/N")
                break;
        }
    }
    while (continuar != null && continuar.toLowerCase() != "n")

}

function Comprar() {
    let continuar = "Y";
    do {
        let marcaAComprar = parseInt(prompt("Ingrese el número de la marca a comprar: \n1-Royal \n2-Eukanuba \n3-Whiskas \n4-Proplan \n5-Volver al menú anterior"))
        //es nan cuando le damos escape, al hacer parseInt y no solo prompt.
        if (marcaAComprar == 5 || Number.isNaN(marcaAComprar)) {
            break;
        }
        let cantidad = parseInt(prompt("Ingrese cantidad de bolsas"));
        if (cantidad <= 0) {
            alert("La cantidad debe ser mayor a 0");
        }
        switch (marcaAComprar) {
            case 1:
                bolsasAlimentoRoyal += cantidad;
                console.log(`Cantidad de bolsas de ${ObtenerNombreMarca(marcaAComprar)} en stock: ${bolsasAlimentoRoyal}`)
                break;
            case 2:
                bolsasAlimentoEukanuba += cantidad;
                console.log(`Cantidad de bolsas de ${ObtenerNombreMarca(marcaAComprar)} en stock: ${bolsasAlimentoEukanuba}`)
                break;
            case 3:
                bolsasAlimentoWhiskas += cantidad;
                console.log(`Cantidad de bolsas de ${ObtenerNombreMarca(marcaAComprar)} en stock: ${bolsasAlimentoWhiskas}`)
                break;
            case 4:
                bolsasAlimentoProplan += cantidad;
                console.log(`Cantidad de bolsas de ${ObtenerNombreMarca(marcaAComprar)} en stock: ${bolsasAlimentoProplan}`)
                break;
            default:
                continuar = prompt("La opción ingresada es incorrecta. ¿Desea continuar? Y/N")
                break;
        }
    }
    while (continuar != null && continuar.toLowerCase() != "n")

}

function ObtenerNombreMarca(marca) {
    switch (marca) {
        case 1:
            return "Royal"
            break;
        case 2:
            return "Eukanuba"
            break;
        case 3:
            return "Whiskas"
            break;
        case 4:
            return "ProPlan"
            break;
    }
}

function TotalDeAlimento() {
    console.log(`Bolsas de alimento Royal ${bolsasAlimentoRoyal}`);
    console.log(`Bolsas de alimento Eukanuba ${bolsasAlimentoEukanuba}`);
    console.log(`Bolsas de alimento Whiskas ${bolsasAlimentoWhiskas}`);
    console.log(`Bolsas de alimento Proplan ${bolsasAlimentoProplan}`);
    console.log(`Cantidad total: ${bolsasAlimentoProplan + bolsasAlimentoWhiskas + bolsasAlimentoEukanuba + bolsasAlimentoRoyal}`);
}

InicioDelPrograma();