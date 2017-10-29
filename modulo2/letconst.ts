(function(){
    // Diferencia entre let, const y var

    // Declarando variables 
    let nombre = "Felipe";
    const PI = 3.14;
    var planeta = "Tierra";

    // const es constante
    //PI = 4 //  error
    nombre = "Claudia" // ok
    planeta = "Saturno" // ok

    // Redeclarando
    //let nombre = "Francisco" // error
    var planeta = "Luna" // ok

    // Podemos usar variables sin declarar con var
    x = 5;
    var x;

    //y = 6;
    //let y // let no nos permite esto usar la variable antes de declararla

    function iteradondoConLet() {
        for (let i = 0; i < 10; i++) {
            console.log(i);
        }

        //console.log(i); // error: i está fuera de alcance
    }

    function iterandoConVar() {
        for (var i = 0; i < 10; i++) {
            console.log(i);
        }

        console.log(i); // ok
    }

})();