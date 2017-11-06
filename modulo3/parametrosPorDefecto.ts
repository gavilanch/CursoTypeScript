(function(){
    // Valores por defecto de los parámetros

    function enviarMensaje(mensaje: string, prioritario: boolean = valorPorDefecto()): number {
        // envia un mensaje y retorna la cantidad de destinatarios que lo recibieron
        console.log('mensaje: ' + mensaje);
        console.log('prioridad: ' + prioritario);
        return 42;
    }

    function valorPorDefecto(): boolean {
        return false;
    }

    enviarMensaje('TypeScript es cool', true);
    console.log('');
    enviarMensaje('Mensaje sin prioridad');

})();