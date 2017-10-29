(function(){
    // Manejando errores

    // Ejemplo 1 - Simple error (sólo texto)
    try {
        let nombre: string = 'Felipe';
        nombre = nombre.toUpperCase();
        throw "ha ocurrido un error";
    }
    catch (e) {
        console.log(e); // imprime en la consola el mensaje 'ha ocurrido un error'
    }
    finally {
        console.log('finally');
    }

    // Ejemplo 2 - Utilizando una clase de error

    try {
        let nombre: string = 'Claudia';
        nombre = nombre.toUpperCase();
        throw new Error('No debes colocar un nombre en mayúsculas');
    }
    catch (e) {
        let err = <Error>e;
        console.log('name: ' + err.name);
        console.log('message: ' + err.message);
        console.log('stack: ' + err.stack);
    }


    // Ejemplo 3 - Creando tu propio error

    class DivideByZeroException {
        constructor(public name: string, public message: string, public numerator: number) {
        }
    }

    function dividir(numerador: number, denominador: number): number | null {

        try {
            if (denominador === 0) {
                throw new DivideByZeroException('DivideByZero',
                    'No puedes dividir entre cero', numerador);
            }

            return numerador / denominador;
        } catch (e) {
            if (e instanceof DivideByZeroException) {
                console.log('name: ' + e.name);
                console.log('message: ' + e.message);
                console.log('numerator: ' + e.numerator);
            }
            else {
                let err = <Error>e;
                console.log(err.message);
            }
            return null;
        }

    }

    console.log(dividir(2, 3));
    console.log(dividir(2, 0));

})();