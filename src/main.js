import { setupCounter } from "./modules/counter.js";
import { msgWelcome } from "./modules/messages.js";
import { suma, resta } from "./modules/math.js";

document.addEventListener("DOMContentLoaded", () => {
  // Btn de contador.
  const contadorElementos = document.createElement("button");
  contadorElementos.textContent = "Haz clic para contar";
  document.body.appendChild(contadorElementos);

  // etiqueta para introducir el primer número
  const labelNumero1 = document.createElement("label");
  labelNumero1.textContent = "Introduzca el primer número:";
  document.body.appendChild(labelNumero1);

  // cuadro de texto para el primer número.
  const inputNumero1 = document.createElement("input");
  inputNumero1.placeholder = "Introduce el primer número";
  document.body.appendChild(inputNumero2);

  // etiqueta para introducir el segundo número
  const labelNumero2 = document.createElement("label");
  labelNumero2.textContent = "Introduzca el primer número:";
  document.body.appendChild(labelNumero2);

  // cuadro de texto para el segundo número
  const inputNumero2 = document.createElement("input");
  inputNumero2.placeholder = "Introduce el segundo número";
  document.body.appendChild(inputNumero2);

  // etiqueta de sumar
  const labelSumar = document.createElement("label");
  labelSumar.textContent = "Sumar";
  document.body.appendChild(labelSumar);

  // radio sumar.
  const radioSumar = document.createElement("input");
  radioSumar.type = "radio";
  radioSumar.id = "Sumar";
  document.body.appendChild(radioSumar);

  // etiqueta de restar
  const labelRestar = document.createElement("label");
  labelRestar.textContent = "Restar";
  document.body.appendChild(labelRestar);

  // radio restar.
  const radioRestar = document.createElement("input");
  radioRestar.type = "radio";
  radioRestar.id = "Restar";
  document.body.appendChild(radioRestar);

  // botón para realizar la operación.
  const buttonSubmit = document.createElement("input");
  buttonSubmit.type = "submit";
  buttonSubmit.value = "Realizar Operación";
  document.body.appendChild(buttonSubmit);
});

buttonSubmit.addEventListener("click", () => {
  let valor = 0;
  let valor2 = 0;
  let valor1_Input = inputNumero1.value;
  let valor2_Input = inputNumero2.value;

  function Operacion() {
    this.numero1 = 0;
    this.numero2 = 0;
  }

  function Get_Numero1(valor1_Input) {
    valor = ComporbarNumero(valor1_Input);
    return valor;
  }

  function Get_Numero2(valor2_Input) {
    valor2 = ComporbarNumero(valor2_Input);
    return valor2;
  }

  function Set_Numero1(valor) {
    this.numero1 = valor;
  }

  function Set_Numero2(valor2) {
    this.numero2 = valor;
  }

  ComporbarNumero(numero){
    try{

    }
    catch(error){
        
    }
  }
});
