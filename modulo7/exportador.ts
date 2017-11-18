let e: number = 2.72;

function colocaEnMayusculas(valor: string): string {
    return valor.toUpperCase();
}

function colocaEnMinusculas(valor: string): string {
    return valor.toLowerCase();
}

interface Persona {
    nombre: string,
    edad: number
}

export { e, colocaEnMayusculas, Persona }