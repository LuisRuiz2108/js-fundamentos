const persona = {
    nombre: "Luis",
    saludar: function () {
        console.log("Hola, soy " + this.nombre);
    },
};

const otraPersona = {
    nombre: 'Nahomi',
}

// persona.saludar(); // Hola, soy Luis

// const saludarSuelto = persona.saludar;
// saludarSuelto(); // Hola, soy undefined

// const saludarSuelto = persona.saludar.bind(persona);
// saludarSuelto(); // Hola, soy Luis

// persona.saludar.call(persona); // Hola, soy Luis
// const saludarSuelto = persona.saludar; // Hola, soy Luis
// saludarSuelto();

// const contador = {
//   cuenta: 0,
//   iniciar: function () {
//     setTimeout( ()  => {
//       this.cuenta = this.cuenta + 1;
//       console.log(this.cuenta);
//     }, 100);
//   },
// };

// contador.iniciar();

function Persona(nombre) {
  this.nombre = nombre;
}

// Persona.prototype.saludar = function () {
//   console.log("Hola, soy " + this.nombre);
// };

const luis = new Persona("Luis");
const nomi = new Persona("Nomi");

console.log(Persona.saludar)
console.log(luis.hasOwnProperty('saludar'))
console.log(luis.__proto__ === Persona.prototype)

luis.saludar();
nomi.saludar();