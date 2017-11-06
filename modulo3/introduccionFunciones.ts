// ¿Qué son las funciones?
(function(){

    function aplicarImpuesto(monto: number, idProducto: number): number {
        let impuesto: number;
        // obtener impuesto de acuerdo al producto
        impuesto = 1.16;
        return monto * impuesto;
    }

    // Ejemplo 1 - función sin parámetros ni valor de retorno

    function alertarPorLluvia(): void {
        // emito una alerta

    }

    alertarPorLluvia();


    // Ejemplo 2 - Función que retorna algo

    function tasaDelDolarDelDia(): number {
        // buscamos la tasa de algún servicio
        return 47.2;
    }

    let tasa = tasaDelDolarDelDia();


    // Ejemplo 3 - Función que recibe un parámetro y retorna algo

    function cantidadDeLetras(valor: string): number {
        return valor.length;
    }

    let x = cantidadDeLetras('Felipe');

    // Ejemplo 4 - Función que recibe varios parámetros y retorna algo

    function enviarMensaje(mensaje: string, prioritario: boolean | string): number {

        // envia un mensaje y retorna la cantidad de destinatarios que lo recibieron

        return 42;
    }

    let destinatarios = enviarMensaje('TypeScript es cool', 'Alta prioridad');

})();