// Semana 4: Utitlity Library
// debounce, throttle, deepClone, memoize

// Debounce: sirve para envolvar una funcion para que solo se ejecute
// despues de que haya pasado cierto tiempo sin que la vuelvan
// a llamar.
function debounce( fn, delay) {
  let timeoutId;

  return function (...args){
    clearTimeout(timeoutId);
    timeoutId = setTimeout(fn, delay, ...args);
  }
}

// THROTTLE: Garantiza que una funcion se ejecute como maximo una vez cada X milisegundos
function throttle(fn, delay) {
  let ultimaEjecucion = 0;

  return function (...args) {
    const ahora = Date.now();

    if (ahora >= ultimaEjecucion + delay) {
      fn(...args);
      ultimaEjecucion = ahora;
    }
  }
}

// deepClone: clona multiples niveles de un objeto
function deepClone(objeto) { 
    const copia = {};

    for (const clave in objeto) {
        const valor = objeto[clave];

        if (typeof valor === "object" && valor !== null) {
            copia[clave] = deepClone(objeto[clave]);
        } else {
            copia[clave] = valor;
        }
    }

    return copia;
}
