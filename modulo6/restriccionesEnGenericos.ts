(function () {

    interface ConLongitud {
        length: number;
    }

    function miFuncion<T extends ConLongitud>(valor: T) {
        valor.length;
    }

    miFuncion("Felipe");

    var miVar = {
        length: 5,
        nombre: "Victor"
    };

    miFuncion(miVar);

})(); 