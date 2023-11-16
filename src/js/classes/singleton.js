
// nombre Singletone es opciones. Nombre puede ser cualquier otro, este se ocupo para prueba
class Singletone {

    static instancia; // undefined
    nombre = '';

    constructor(nombre = ''){
        //

        if(!!Singletone.instancia){
            return Singletone.instancia;
        }

        Singletone.instancia = this;
        this.nombre = nombre;
        
        
        return this;

        
    }
}

const test1 = new Singletone('Juan');
const test2 = new Singletone('Pedro');
const test3 = new Singletone('Roberto');

console.log(`El nombre en el test1 es : ${ test1.nombre}`);
console.log(`El nombre en el test2 es : ${ test2.nombre}`);
console.log(`El nombre en el test3 es : ${ test3.nombre}`);