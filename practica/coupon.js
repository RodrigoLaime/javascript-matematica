const inputCoupon = document.querySelector("#coupon");
const inputPrice = document.querySelector("#price");
const btn = document.querySelector("#calcular");
const result = document.querySelector("#result");

btn.addEventListener("click", calcularPrecioConDescuento);

const couponList = [];

couponList.push({
  name: 'Picachu',
  discount: 80,
})
couponList.push({
  name: 'Bulbasaur',
  discount: 30,
})
couponList.push({
  name: 'Charmeleon',
  discount: 60,
})
couponList.push({
  name: 'Squirtle',
  discount: 50,
});

function calcularPrecioConDescuento() {
  const price = Number(inputPrice.value); //convertimos los string en numeros
  const coupon = (inputCoupon.value);

  if (!price || !coupon) {
    result.innerText = `Llenar el formulario`;
    return;
  }

  let descuento;

  function parecido(couponElement) {
    return couponElement.name == coupon;
  }

  const couponInArray = couponList.find(parecido); //filter o find deveulvel el elemento que coincide, filter devuelve un array y find un objeto

  if (couponInArray) {
    descuento = couponInArray.discount;
  } else {
    result.innerText = "El cupon no es valido";
    return;
  }

  const newPrice = (price * (100 - descuento)) / 100;
  result.innerText = `El precio con descuento es: $ ${newPrice}`;

  /* const newPrice = (price * (100 - couponList)) / 100;
  result.innerText = `El precio con descuento es: $ ${newPrice}`; */
  inputPrice.value = '';
  inputCoupon.value = '';

}

/* ejemplo suma con array 
function calcularArreglo(numero) {
  return (numero.reduce((a, b) => a + b)) / numero.length;
}
console.log(calcularArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9]));*/