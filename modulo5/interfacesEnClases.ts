(function () {

    interface Transformador {
        transformarString(valor: string): string
    }

    class Mayusculas implements Transformador {
        public transformarString(valor: string): string {
            return valor.toUpperCase();
        }
    }

    class Invertir implements Transformador {
        public transformarString(valor: string): string {
            let valorInvertido: string = valor.split('')
                .map((char, index, arr) => arr[arr.length - 1 - index]).join('');
            return valorInvertido;
        }
    }

    function procesar(valor: string, ...transformaciones: Transformador[]): string {
        let respuesta: string = valor;
        for (let i = 0; i < transformaciones.length; i++) {
            let transformacion = transformaciones[i];
            respuesta = transformacion.transformarString(respuesta);
        }
        return respuesta;
    }

    let mayusculas = new Mayusculas();
    let invertir = new Invertir();

    let nombre = "felipe";
    let nombre2 = "Claudia";
    let nombre3 = "Roberto";

    console.log(procesar(nombre, mayusculas));
    console.log(procesar(nombre2, invertir));
    console.log(procesar(nombre3, mayusculas, invertir));

})();