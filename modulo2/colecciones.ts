(function(){

    // Arreglo y tuplas

    let numeros: number[] = [];
    let numeros2: Array<number> = [];

    numeros.push(1, 2, 3, 5);
    //numeros.push("7"); // error

    let nombres: string[] = ['Felipe', 'Juana'];

    let cuadrados = numeros.map(function (value: number, index) {
        return value * value;
    });

    console.log('cuadrados: ' + cuadrados);

    let tupla1: [string, number] = ['Felipe', 99];
    let tupla2: [number, string] = [99, 'Guillermo'];

    tupla1[2] = 56;
    tupla1[3] = 'Maria';
    //tupla1[4] = true; // error
    let ejemplo: string | number;
    ejemplo = "felipe";
    ejemplo = 42;

})();