function Persona(nombre, edad){
    console.log('Se ejecuto esta linea');
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function (){
        console.log(`Nombre: ${this.nombre } - edad: ${this.edad}`);
    }
}

const maria = new Persona('Maria', 23);
const melissa = new Persona ('Melissa', 18);

maria.imprimir();
melissa.imprimir();
