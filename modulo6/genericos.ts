(function () {

    // Genéricos

    // Los arreglos utilizan genéricos
    let strings: Array<string> = ['a', 'b', 'c'];
    let numeros: Array<number> = [1, 2, 3];

    // Ejemplo - Funcion identidad

    function identidadAny(valor: any): any {
        return valor;
    }

    // Perdemos el tipo de valor con any
    let numero: number = 5;
    let numeroDeAny = identidadAny(numero);

    function identidadGenerico<key>(valor: key, miNumero: number): key {
        return valor;
    }

    // Seguimos teniendo el tipo de valor correcto
    identidadGenerico<string>("felipe", 45).toUpperCase(); // Explícita
    identidadGenerico(true, 76); // Implícita 

})();
