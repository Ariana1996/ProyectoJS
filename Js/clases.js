class BolsaAlimento{
    constructor(id, nombre, stock,precio){
        this.id = id;
        this.nombre = nombre;
        this.stock = stock;
        this.precio =precio;
    }
}

const productos = [];

const bolsaRoyal = new BolsaAlimento(1,'Royal Canin',5,200);
const bolsaEukanuba = new BolsaAlimento(2,'Eukanuba',10,150);
const bolsaWhiskas = new BolsaAlimento(3,'Whiskas',13,100);
const bolsaProplan = new BolsaAlimento(4,'Proplan',3,120);
productos.push(bolsaRoyal);
productos.push(bolsaEukanuba);
productos.push(bolsaWhiskas);
productos.push(bolsaProplan);