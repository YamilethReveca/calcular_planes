
// para cargar la página

document.addEventListener("DOMContentLoaded", function () {
  const formGroupExampleInput = document.getElementById("formGroupExampleInput");
  const planOptions = document.getElementById("planOptions");
  const comisionInfo = document.getElementById("comisionInfo");

  planOptions.addEventListener("change", function () {
    updateComisionInfo();
  });


// este evento nos permite Actualizar la información de la comisión

  formGroupExampleInput.addEventListener("keyup", function (event) {

    updateComisionInfo(); 
  });

// aqui calculamos el valor el button comisión

  function updateComisionInfo() {
    const valorProducto = parseFloat(formGroupExampleInput.value.replace(/\./g, '').replace(',', '.')); 
    const selectedPlan = parseFloat(planOptions.value);
    const comision = valorProducto * (selectedPlan / 100);
    const iva = comision * 0.19; 
    const totalAPagar = Math.round(comision + iva);

    if (!isNaN(totalAPagar)) {
      comisionInfo.textContent = "$" + totalAPagar.toLocaleString(); 
    } else {
      comisionInfo.textContent = ""; 
    }
  }
  
  function formatInputValue() {
    const inputValue = formGroupExampleInput.value.replace(/\./g, '').replace(',', '.');
    formGroupExampleInput.value = parseFloat(inputValue).toLocaleString(); 
  }
});

// al elegir el plan se va a mostrar el numero del plan, la descripcion del plan y el costo+IVA.
function showSelectedPlan() {
  const planOptions = document.getElementById('planOptions');//select
  const selectedPlan = document.getElementById('selectedPlan');// div donde se muestra el plan

  // Obtener el texto y el valor del plan seleccionado
  const planText = planOptions.options[planOptions.selectedIndex].text;
  const planValue = planOptions.options[planOptions.selectedIndex].value;

  // Obtener el número de la opción seleccionada (1 para la opción 1, 2 para la opción 2)
  const selectedOption = planOptions.selectedIndex; // opcion seleccionada

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