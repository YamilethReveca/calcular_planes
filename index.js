

const amountEntered = document.getElementById('formGroupExampleInput');
const planOptions = document.getElementById('planOptions');
let comisionInfo = document.getElementById('comisionInfo');
const calcularComisionBtn = document.getElementById('calcularComision');

planOptions.addEventListener('click', function () {
  const valorProducto = parseFloat(formGroupExampleInput.value);
  const selectedPlan = parseFloat(planOptions.value);
  const comision = valorProducto * (selectedPlan / 100);
  const iva = comision * 0.19; // Calculando el IVA del 19%
  const totalAPagar = Math.round(comision + iva);

  comisionInfo.innerHTML = "$" + totalAPagar.toLocaleString();


  console.log(valorProducto)
  console.log(selectedPlan)
  console.log(comision)
  console.log(iva)
  console.log(totalAPagar)
  console.log(comisionInfo)
})


function showSelectedPlan() {
  const planOptions = document.getElementById('planOptions');//
  const selectedPlan = document.getElementById('selectedPlan');// DIV QUE MUESTRA

  // Obtener el texto y el valor del plan seleccionado
  const planText = planOptions.options[planOptions.selectedIndex].text;
  const planValue = planOptions.options[planOptions.selectedIndex].value;

  // Obtener el número de la opción seleccionada (1 para la opción 1, 2 para la opción 2, etc.)
  const selectedOption = planOptions.selectedIndex ; // opcion seleccionada

  // Crear el contenido HTML para el plan seleccionado
  const planHTML = `
    <div class="plan-info">
      <div class="plan-number">${selectedOption}</div>
      <div class="plan-description">${planText}</div>
    </div>
    <div class="plan-commission">${planValue}% + IVA</div>
  `;

  // Establecer el contenido HTML en el div del plan seleccionado
  selectedPlan.innerHTML = planHTML;
}