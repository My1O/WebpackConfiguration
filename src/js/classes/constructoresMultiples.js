
class Persona{
    
    static porObjeto({nombre, apellido, edad}){
        return new Persona(nombre, apellido, edad);
    }

    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    getInfo (){
        console.log(`Info: ${this.nombre}, ${this.apellido}, ${this.edad}`);
    }
}

const nombre1 = 'Rogelio',
      apellido1 = 'Burns',
      edad1 = 10;
    
const fer = {
         nombre: 'Antonio',
         apellido: 'Rostran',
         edad: 10
}

      const persona1 = new Persona(nombre1, apellido1, edad1);
      const persona2 = Persona.porObjeto( fer);

      persona1.getInfo();
      persona2.getInfo();