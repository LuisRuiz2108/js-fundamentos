function memoize<T, R>(fn: (arg: T) => R) {
    const cache = new Map<T, R>();

    return function (arg: T): R {
        if(cache.has(arg)) {
            return cache.get(arg)!;
        }

        const resultado = fn(arg);
        cache.set(arg, resultado);
        return resultado;
    }
}

type Ok<T> = { success: true; value: T };
type Err<E> = { success: false; error: E };
type Result<T, E> = Ok<T> | Err<E>;

function dividir(a: number, b: number): Result<number, Error> {
  if (b === 0) {
    return { success: false, error: new Error("No se puede dividir entre cero") };
  }
  return { success: true, value: a / b };
}

// calcularPromedio SI hace trabajo real: suma los numeros, cuenta cuantos son,
// y LUEGO delega la division (que puede fallar) a dividir.
// No es un pass-through vacio, es un paso real de logica en el camino.
function calcularPromedio(numeros: number[]): Result<number, Error> {
  const suma = numeros.reduce((acc, n) => acc + n, 0);
  return dividir(suma, numeros.length); // el Result de dividir fluye hacia arriba sin decisiones
}

function mostrarPromedio(numeros: number[]) {
  const resultado = calcularPromedio(numeros);
  if (resultado.success) {
    console.log("Promedio:", resultado.value);
  } else {
    console.log("Error calculando promedio:", resultado.error.message);
  }
}

mostrarPromedio([10, 20, 30]);
mostrarPromedio([]); // lista vacia -> division entre cero -> Result de error, sin throw