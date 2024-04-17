

const montoUsuario = document.getElementById('montoUsuario');
const optionesPlanes = document.getElementById('optionesPlanes');
let comisionInfo = document.getElementById('comisionInfo');
const calcularComisionBtn = document.getElementById('calcularComision');

optionesPlanes.addEventListener('click', function() {
  const valorProducto = parseFloat(montoUsuario.value);
  const planSeleccionado = parseFloat(optionesPlanes.value);
  const comision = valorProducto * (planSeleccionado / 100);
  const iva = comision * 0.19; // Calculando el IVA del 19%
  const totalAPagar = Math.round(comision + iva);

  comisionInfo.innerHTML="$"+totalAPagar.toLocaleString();

 
  console.log(valorProducto)
  console.log(planSeleccionado)
  console.log(comision)
  console.log(iva)
  console.log(totalAPagar)
  console.log(comisionInfo)
})


function mostrarPlanSeleccionado() {
  const optionesPlanes = document.getElementById('optionesPlanes');
  const planSeleccionado = document.getElementById('planSeleccionado');

  // Obtener el valor y el texto del plan seleccionado
  const planValue = optionesPlanes.options[optionesPlanes.selectedIndex].value;
  const planText = optionesPlanes.options[optionesPlanes.selectedIndex].text;

  // Obtener el número de la opción seleccionada
  const opcionSeleccionada = optionesPlanes.selectedIndex;

  // Mostrar el número y la descripción del plan seleccionado dentro de un círculo
  planSeleccionado.innerHTML = `<i class="bi bi-${opcionSeleccionada}-circle"></i> ${planText} ${planValue}% + IVA`;
}