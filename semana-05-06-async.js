console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");

// 1 -> 4 -> 3 -> 2

console.log("inicio");

setTimeout(() => {
  console.log("timeout 1");
}, 0);

Promise.resolve().then(() => {
  console.log("promise 1");
}).then(() => {
  console.log("promise 2");
});

setTimeout(() => {
  console.log("timeout 2");
}, 0);

Promise.resolve().then(() => {
  console.log("promise 3");
});

console.log("fin");

// inicio -> fin -> promise 1 -> promise 3 -> promise 2 -> timeout 1 -> timeout 2

function obtenerDatos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("datos recibidos");
    }, 1000);
  });
}

async function main() {
  console.log("A");
  const resultado = await obtenerDatos();
  console.log(resultado);
  console.log("B");
}

main();
console.log("C");

// A -> C -> datos recibidos -> B

function obtenerDatos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("datos recibidos");
        }, 1000);
    });
}

function main() {
    console.log("A");
    obtenerDatos().then((resultado) => {
        console.log(resultado);
        console.log("B");
    });
}

main();
console.log("C");

// A -> C -> datos recibidos -> B