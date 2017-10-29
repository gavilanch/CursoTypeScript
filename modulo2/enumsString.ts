(function(){
    // String enums

    enum Color { Verde = "verde2", Rojo = "rojo7", Azul = "azul", Amarillo = "amarillo" };

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