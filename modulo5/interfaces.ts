(function () {

    interface Mensaje {
        cuerpo: string
    }

    interface MensajeEmail extends Mensaje {
        asunto: string,
        email: string,
        prioritario: boolean
    }

    function enviarEmail(mensaje: MensajeEmail) {
        // envía el mensaje

    }

    let mensaje = {
        cuerpo: "Este es el cuerpo",
        asunto: "Este es un asunto",
        email: "ejemplo@hotmail.com",
        prioritario: true,
        otraPropiedad: "puedo?"
    };

    enviarEmail(mensaje);
})();