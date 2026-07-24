function crearFunciones() {
    var funciones = [];
    
    for (var i = 0; i < 3; i++) {
        funciones.push(
            ( function (i) {
                return function() {
                    console.log(i);
                }
            }) (i)
        );
    }
    
    return funciones;
}

const [f1, f2, f3] = crearFunciones();
f1();
f2();
f3();

// ( function (mensaje) {
//     console.log(mensaje);
// }) ( 'hola desde parametro');