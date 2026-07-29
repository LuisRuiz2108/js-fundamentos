# Semana 4: Utility Library

Pequeña librería de utilidades implementada en [semana-04-utilidades.js](semana-04-utilidades.js): `debounce`, `throttle`, `deepClone` y `memoize`.

## `debounce(fn, delay)`

Envuelve `fn` para que solo se ejecute una vez, después de que pase `delay` ms sin que se la vuelva a llamar. Cada nueva llamada reinicia el temporizador.

**Uso típico:** inputs de búsqueda, resize de ventana, validación mientras se escribe.

**Limitaciones:**
- No preserva el valor de `this` del contexto original (usa `function` normal pero llama a `fn` vía `setTimeout`, sin `bind`).
- No expone forma de cancelar manualmente ni de forzar la ejecución inmediata (`cancel()` / `flush()`).
- No devuelve el valor de retorno de `fn` (por naturaleza asíncrona, pero tampoco soporta callback/promise para obtenerlo).

## `throttle(fn, delay)`

Garantiza que `fn` se ejecute como máximo una vez cada `delay` ms. Si se llama varias veces dentro de la ventana, las llamadas intermedias se descartan.

**Uso típico:** eventos de scroll, mousemove, llamadas a API con límite de frecuencia.

**Limitaciones:**
- Es "leading edge" únicamente: la primera llamada de una ráfaga se ejecuta al instante, pero la última llamada dentro de la ventana se pierde (no hay ejecución "trailing" al final del periodo).
- Al igual que `debounce`, no preserva `this` ni el valor de retorno.
- No tiene `cancel()`.

## `deepClone(objeto)`

Clona recursivamente un objeto plano, copiando también los objetos anidados para evitar referencias compartidas.

**Limitaciones:**
- Solo maneja objetos "planos" (`{}`); no soporta `Array` correctamente, ya que siempre crea `{}` como copia (un array clonado se convierte en objeto con claves numéricas y pierde métodos de array).
- No soporta tipos especiales: `Date`, `Map`, `Set`, `RegExp`, `Function` se copian como referencia o se pierden (por ejemplo, un `Date` se clona como objeto vacío `{}`, no como fecha).
- No detecta referencias circulares (entraría en recursión infinita y provocaría un stack overflow).
- Solo copia propiedades enumerables propias y heredadas alcanzadas por `for...in` (incluye propiedades del prototipo, lo cual puede no ser deseado).

## `memoize(fn)`

Cachea el resultado de `fn` según su argumento, evitando recalcular si ya se llamó antes con el mismo valor.

**Limitaciones:**
- Solo soporta funciones de **un único argumento** (`arg`); si `fn` recibe más de un parámetro, los adicionales se ignoran y se puede devolver un resultado cacheado incorrecto.
- La cache usa el argumento tal cual como clave; si se pasan objetos, se compara por referencia (identidad), no por valor, así que objetos distintos con el mismo contenido no comparten cache.
- La cache crece indefinidamente (no hay límite de tamaño ni expiración), lo que puede causar fugas de memoria en uso prolongado.
- No soporta funciones asíncronas: si `fn` retorna una `Promise` que se rechaza, el rechazo también queda cacheado.
