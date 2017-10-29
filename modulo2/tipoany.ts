(function(){
    // Tipo any

    let x: any = "Felipe";
    x = 45;
    x = false;

    let y: any = {};

    y.sumador = function (a: number, b: number) {
        return a + b;
    }

    console.log(y.sumador(4, 5));

    /*
    let z : object = {};
    z.sumador = function(){} // error: la propiedad sumador no existe
    */


    document.getElementById('inputTask')!.addEventListener('keydown', function (event: any) {
        if (event.keyCode === 13) {

        }
    }, true);

})();