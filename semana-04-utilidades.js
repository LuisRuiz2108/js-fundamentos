// Semana 4: Utitlity Library
// debounce, throttle, deepClone, memoize

// Debounce: sirve para envolvar una funcion para que solo se ejecute
// despues de que haya pasado cierto tiempo sin que la vuelvan
// a llamar. Si se vuelve a llamar antes de que pase ese tiempo,
// el temporizador se reinicia.

// SetTimeout con argumentos al final - integrated function
function debounce( fn, delay) {
  let timeoutId;

  return function (...args){
    clearTimeout(timeoutId);
    timeoutId = setTimeout(fn, delay, ...args);
  }
}

function buscarEnAPI(texto) {
  console.log('Buscando: ', texto);
}

const buscarConDebounce = debounce(buscarEnAPI, 300);

console.log('--- Lamando 3 veces seguidas ---');
buscarConDebounce('j');
buscarConDebounce('ja');
buscarConDebounce('jav');
console.log('--- Fin de las llamadas sincronas ---');

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

function actualizarScroll(posicion) {
  console.log('Posicion actualizada: ', posicion);
}

const conThrottle = throttle(actualizarScroll, 200);

conThrottle(1);
conThrottle(2);
setTimeout( () => {
  conThrottle(3)
}, 300)