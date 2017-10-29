(function(){
    // ejemplo 1

    let nombre: any = "Felipe";
    let nombre_string1: string = <string>nombre;
    let nombre_string2: string = nombre as string;

    console.log(nombre_string1.toUpperCase());
    console.log(nombre_string2.toLowerCase());

    // ejemplo 2

    let x: string | number = "45";

    //let x_number = <number>x; // error

    // ejemplo 3

    let bo: boolean = <boolean>nombre;
    console.log(bo);
    console.log(bo == true);
    console.log(bo == false);
})();