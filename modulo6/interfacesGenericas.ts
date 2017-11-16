(function () {

    interface MiInterfaz<T, U> {
        miFuncion(valor: T): void;
        miSegundaFuncion(valor: U): void;
        miTerceraFuncion(valor1: T, valor2: U): void;
    }

    class MiClase<T, U> implements MiInterfaz<T, U>{
        public miFuncion(valor: T) {
            console.log(valor);
        }
        public miSegundaFuncion(valor: U) {
            console.log(valor);
        }
        public miTerceraFuncion(valor: T, valor2: U) {
            console.log(valor);
        }
    }

    let miClase = new MiClase<string, number>();
})();
