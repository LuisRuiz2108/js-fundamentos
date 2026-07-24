function crearContador() {
  let cuenta = 0;

  return function () {
    cuenta = cuenta + 1;
    return cuenta;
  };
}

const contador1 = crearContador();
console.log(contador1()); // 1
console.log(contador1()); // 2

const contador2 = crearContador();
console.log(contador2()); // 1

// // ---------------------------------------------------------------------------


function crearFunciones() {
    var funciones = [];
    
    for (var i = 0; i < 3; i++) {
        funciones.push(function () {
            console.log(i);
        });
    }
    
    return funciones;
}

const [f1, f2, f3] = crearFunciones();
f1(); // 3
f2(); // 3
f3(); // 3

// // ---------------------------------------------------------------------------

function crearFunciones() {
  var funciones = [];

  for (let i = 0; i < 3; i++) {
    funciones.push(function () {
      console.log(i);
    });
  }

  return funciones;
}

const [f1, f2, f3] = crearFunciones();
f1(); // 0
f2(); // 1
f3(); // 2

// ---------------------------------------------------------------------------

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
f1(); // 0
f2(); // 1
f3(); // 2
