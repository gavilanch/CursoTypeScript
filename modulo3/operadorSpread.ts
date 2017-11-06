(function () {
    // Parámetros Rest y Operador Spread

    function duplicar(x: number): number {
        return x * 2;
    }

    // Al utilizar puntos suspensivos, estamos utilizando un parámetro rest
    function promedio(...arr: number[]): number {
        return arr.reduce((prev, post) => prev + post) / arr.length;
    }

    // Si colocamos puntos suspensivos frente a un arreglo, entonces 'destruimos' 
    // el arreglo y nos quedamos con sus valores
    console.log(promedio(...[1, 3, 5]));
    console.log(promedio(1, 3, 5));

    console.log({ ...[1, 2], ...['a', 'b'] });

    console.log(["Felipe", "Claudia"]);
    console.log(...["Felipe", "Claudia"]);

})();