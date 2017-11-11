(function () {



    abstract class Animal {
        public molestar(): void {
            console.log("yo molesto");
        }
        public abstract hacerRuido(): void
    }

    class Perro extends Animal {

        public hacerRuido(): void {
            console.log("auf auf");
        }

        public hacerseElMuertito(): void {
            console.log('...');
        }
    }

    class Gato extends Animal {

        public hacerRuido(): void {
            console.log("miau");
        }
        public serIndiferente(): void {
            console.log('nada me importa -_-');
        }
    }


    function haceRuido(animal: Animal): void {
        animal.hacerRuido();
    }

    let perro = new Perro();
    let gato = new Gato();

    console.log('perro');
    haceRuido(perro);
    perro.molestar();
    perro.hacerseElMuertito();
    console.log('----------');
    console.log('gato');
    haceRuido(gato);
    gato.molestar();
    gato.serIndiferente();

})();