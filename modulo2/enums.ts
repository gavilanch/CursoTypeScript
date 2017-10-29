(function(){
    // enums

    enum Color { Verde = 1, Rojo = 2, Azul = 5, Amarillo = 10 };

    var c: Color = Color.Verde;

    function discernirColor(c: Color) {
        switch (c) {
            case Color.Verde:
                console.log('Verde');
                break;
            case Color.Rojo:
                console.log('Rojo');
                break;
        }

        if (c === Color.Amarillo) {
            // Realizar acción
        }
    }

    discernirColor(c);
})();