(function(){
    // Parámetros opcionales

    // El parámetro "prioritario" es opcional
    function enviarMensaje(mensaje: string, prioritario?: boolean): number {
        // envia un mensaje y retorna la cantidad de destinatarios que lo recibieron
        console.log('mensaje: ' + mensaje);
        console.log('prioridad: ' + prioritario);

        if (prioritario === undefined) {
            console.log('no se ha enviado una prioridad');
        }

        return 42;
    }

    enviarMensaje('TypeScript es cool', true);
    enviarMensaje('Mensaje neutral');
})();