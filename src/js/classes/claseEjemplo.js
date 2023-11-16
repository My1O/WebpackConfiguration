
class Persona {

    static _conteo = 0;

    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log(this.nombre);
        console.log('Hola a todos, soy un metodo statico');
    }
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor (nombre = 'sin nombre', codigo = 'sin codigo', frase = 'sin frase'){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo ++;
    }
    
    set setComidaFavorita (comida){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita (){

        return `la Comida favorita de ${this.nombre} es ${this.comida}`;
    }
    quienSoy(){
        
        console.log(`Soy ${this.nombre} y mi identidad es: ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Amigable vecino');
const ironman = new Persona('Tony Start ', 'IronMan', 'the best vecino');



console.log(ironman);

spiderman.setComidaFavorita = 'Pie de manzana';
console.log(spiderman);
console.log(spiderman.getComidaFavorita);

//Persona._conteo = 2;
console.log('Conteo Statico', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();