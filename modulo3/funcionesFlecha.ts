(function () {
    
    // Función normal
    function duplicar(x: number): number {
        return x * 2;
    }

    duplicar(5);

    // Función flecha o lambda
    let duplicador = (x: number) => x * 2;

    // función flecha con varios parámetros
    let variosParametros = (x: string, esUnContintente: boolean) => {
        if (esUnContintente) {
            return "Sí";
        }


        return 42;
        //return x.toUpperCase();
    }

    variosParametros("Rep. Dominicana", false);

    // Funciones anónimas

    document.getElementById('ejemplo')!.addEventListener('click', function () {
        console.log('asd');
    });

    document.getElementById('ejemplo')!.addEventListener('click', () => {

    });

})();



