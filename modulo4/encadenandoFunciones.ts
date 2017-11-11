(function () {
    abstract class Animal {
        public molestar() {
            console.log("yo molesto");
            return this;
        }
        public abstract hacerRuido(): void
    }

    class Perro extends Animal {
        public hacerRuido(): Perro {
            console.log("auf auf");
            return this;
        }

        public muerde(): Perro {
            console.log('muerde a su víctima');
            return this;
        }

        public huye(): Perro {
            console.log('huye con el rabo entre las piernas');
            return this;
        }

        public hacerseElMuertito(): void {
            console.log('...');
        }
    }

    class Gato extends Animal {

        public hacerRuido(): Gato {
            console.log("miau");
            return this;
        }
        public serIndiferente(): void {
            console.log('nada me importa -_-');
        }
        public volar(): void {
            console.log('el gato volador (8)');
        }
    }

    let perro = new Perro();
    perro.hacerRuido();
    perro.muerde();
    perro.muerde();
    perro.molestar();
    perro.muerde();

    perro.hacerRuido().muerde().muerde().molestar().muerde().hacerseElMuertito();

    let gato = new Gato();
    gato.hacerRuido().molestar().volar();

})();
