function nullAndUndefinedScope() {
    // null y undefined

    let y;
    console.log(y); // undefined

    y = null;
    console.log(y); // null


    let tareas: HTMLElement = document.getElementById('tareas')!;

    let elemento: HTMLElement | null = document.getElementById('AlgunId');

    if (elemento === null) {
        // Realizar una acción...
    } else {
        // Aquí TypeScript entiende que la variable no es nula
        elemento.addEventListener("click", function () { });
    }
}