(function(){
    // void y never

    function funcionConReturnVacio(param1: string): void {
        if (param1 == "") {
            return;
        }

        // realizo alguna acción
    }

    function funcionSinReturn(): void {
        // Función que realiza alguna acción
    }
    /*
    function funcionRetorna42(): void{
        return 42; // error
    }
    */

    function funcionArrojaError(): never {
        throw new Error("Ha ocurrido un grave error");
    }


    function bucleInfinito(): never {
        while (true) {
            // Realiza acción hasta el fin de los tiempos (o hasta que apaguen el servidor)
        }
    }
    /*
    function funcionSinReturnNever(): never{
        // error   
    }
    */
})();