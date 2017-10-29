(function(){
    let nombre: string = "Felipe";
    //nombre = 52;

    let versatil: string | number;
    versatil = "Pablo";
    versatil = 45;

    let versatil2: number | boolean | string;
    versatil2 = true;
    versatil2 = "Clarissa";
    versatil2 = 45.4;

    let cosas: Array<string | number> = ["elemento 1", 2, 3, 4, 5, "6", "7?"];

    enum Color { Verde, Rojo, Azul };

    function unaFuncion(nombre: string, colorElegido: number | string) {
        if (typeof colorElegido === "number") {
            console.log(nombre + ' : ' + colorElegido);
        } else {
            console.log(nombre + ' : ' + colorElegido.toUpperCase());
        }
    }

    unaFuncion('felipe', Color.Verde);
    unaFuncion('hola', "azulito");

    function retorna3Tipos(x: number): string | boolean | number {
        if (x > 0) {
            return true;
        }
        else if (x === 0) {
            return 0;
        }
        else {
            return "Negativo";
        }
    }
})();

