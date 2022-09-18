const inputDiscount = document.querySelector("#discount");
const inputPrice = document.querySelector("#price");
const btn = document.querySelector("#calcular");
const result = document.querySelector("#result");

btn.addEventListener("click", calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
  const price = Number(inputPrice.value); //convertimos los string en numeros
  const discount = Number(inputDiscount.value);

  if (!price || !discount) {
    result.innerText = `Llenar el formulario`;
    return;
  }
  if (discount > 100) {
    result.innerText = `El producto no cuenta con tal descuento`;
    inputPrice.value = '';
    inputDiscount.value = '';
    return;
  }
  const newPrice = (price * (100 - discount)) / 100;
  result.innerText = `El precio con descuento es: $ ${newPrice}`;

  inputPrice.value = '';
  inputDiscount.value = '';
  
}
