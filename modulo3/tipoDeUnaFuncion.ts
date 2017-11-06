(function () {

    // Tipo de una función

    let nombre: string = "Felipe";

    // podemos guardar funciones dentro de variables
    let duplicador = function (x: number): number {
        return x * 2;
    }

    let triplicador = function (x: number): number {
        return x * 3;
    }

    // A una función podemos pasarle otras funciones como parámetros
    function sumar5(f: (x: number) => number, y: number) {
        return f(y) + 5;
    }

    sumar5(duplicador, 18);
    sumar5(duplicador, 5);
    sumar5(triplicador, 6);

    // Podemos guardar tipos dentro de una variable
    type tipoDeFuncion = (x: number, y: string, z: boolean) => string;
    type unionStringNumber = string | number;

    let funcion2: tipoDeFuncion = function (x: number, y: string, z: boolean): string {
        return "";
    }

})();