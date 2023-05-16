//DOM ELEMENTS
const selectOrigen = document.querySelector("#selectOrigen");
const selectDestino = document.querySelector("#selectDestino");
const selectFechaOrigen = document.querySelector("#selectFechaOrigen");
const selectFechaDestino = document.querySelector("#selectFechaDestino");

const escala = document.querySelector("#escala");

const ciudades = [
  { nombre: "New York", pais: "USA" },
  { nombre: "London", pais: "UK" },
  { nombre: "Boston", pais: "USA" },
  { nombre: "París", pais: "FR" },
  { nombre: "Chicago", pais: "USA" },
  { nombre: "Venice", pais: "IT" },
];

const popularOpciones = () => {
  let fragmento = "";

  for (const ciudad of ciudades) {
    fragmento += `<option value="${ciudad.nombre}">${ciudad.nombre}, ${ciudad.pais}</option>`;
  }

  selectOrigen.innerHTML = fragmento;
  selectDestino.innerHTML = fragmento;
};

const revisarEscala = () => {
  if (
    !selectOrigen.value ||
    !selectDestino.value ||
    !selectFechaOrigen.value ||
    !selectFechaDestino.value
  ) {
    return false;
  } else if (
    (selectOrigen.value === "Chicago" && selectDestino.value === "Venice") ||
    (selectOrigen.value === "Boston" && selectDestino.value === "París")
  ) {
    escala.textContent = "¡Ojo! Tu vuelo tiene una escala.";
  } else {
    escala.textContent = "¡Tu vuelo no tiene una escala!";
  }
};

const actualizarData = (data, target) => {
  data = document.querySelector(`#${data}`);
  document.querySelector(`#${target}`).textContent = data.value;

  revisarEscala();
};

//CARGA INICIAL
window.onload = () => {
  popularOpciones();
};