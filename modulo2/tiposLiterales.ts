(function(){
    // literal string

    type Alinear = "centro" | "izquierda" | "derecha";

    function organizar(alinear: Alinear) {
        if (alinear === "centro") {
            // ...
        }
        else if (alinear === "izquierda") {
        }
        else if (alinear === "derecha") {
        }
        else {
            // error! should not pass null or undefined.
        }
    }

    organizar('izquierda');
    //organizar('un poquito para allá, por favor');


    function ejemplo2(opciones: "opción1" | "opción2") {

    }

    ejemplo2("opción2");
    //ejemplo2("opción3");


    // literal numérico

    function lanzarDado(): 1 | 2 | 3 | 4 | 5 | 6 {
        return 4;
    }

})();