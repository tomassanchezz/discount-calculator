// Obtener referencias a los elementos del DOM
const valor1Input = document.getElementById('valor1');
const valor2Input = document.getElementById('valor2');
const valor3Input = document.getElementById('valor3');
const calcularBtn = document.getElementById('calcularBtn');
const resultadoDiv = document.getElementById('resultado');

// Función para realizar la regla de tres
const calcularReglaDeTres = () => {
  const valor1 = 47200;
  const valor2 = 67429;
  const valor3 = Number(valor3Input.value);

  const mostrarResultado = () => {
    resultadoDiv.classList.add('mostrar');
  };
  
  // Función para ocultar el resultado
  const ocultarResultado = () => {
    resultadoDiv.classList.remove('mostrar');
  };
  
  // Dentro de la función calcularReglaDeTres(), después de calcular el resultado:
  // Mostrar el resultado si es válido
  if (valor1 && valor2 && valor3) {
    const resultado = (valor3 * valor2) / valor1;
    resultadoDiv.innerText = `Resultado: $${resultado.toFixed(2)}`;
    mostrarResultado();
  } else {
    resultadoDiv.innerText = 'Ingrese valores válidos para todos los campos';
    ocultarResultado();
  }
};

// Asociar la función de cálculo al evento click del botón
calcularBtn.addEventListener('click', calcularReglaDeTres);
