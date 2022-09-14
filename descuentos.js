const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

/* const couponsObj = {
  BATMAN: 30,
  SUPERMAN: 50,
} */
 const couponsList = [];
  couponsList.push({
    name: 'SUPERMAN',
    discount: 30,
  });
  couponsList.push({
    name: 'BATMAN',
    discount: 50,
  });
  couponsList.push({
    name: 'FLASH',
    discount: 80,
  });

function calcularPrecioConDescuento() {
  const price = Number(inputPrice.value); //para saber el precio. Number es una forma para que en consola qe aparesca en forma de numero
  const coupon = inputCoupon.value; //
  
  if (!price || !coupon) {
    pResult.innerText = 'Llenar el formulario'
    return;
  }

  let discount;

  function isCouponInArray(couponElement) { //funcion que enviamos a cada elemento
    return couponElement.name == coupon;
  }

  /* const couponInArray = couponsList.filter(isCouponInArray);  *///preguntamos si hay algun elemento en el array

   const couponInArray = couponsList.find(isCouponInArray); //find devuelbe un objeto
  
  if (couponInArray) {
    discount = couponInArray.discount;
  } else {
    pResult.innerText = 'El cupón no es válido';
    return;
  }
  /* if (couponInArray.length > 0) {
    discount = couponInArray[0].discount;
    return
  } */

  console.log({
    coupon,
    discount,
    couponInArray,
    couponsList
  });

 /*  if (couponsObj[coupon]) {
    discount = couponsObj[coupon];
  } else {
    pResult.innerText = 'El cupon no es valido';
    return;
  } */
 

/*   switch (coupon) {
    case 'BATMAN':
      discount = 30;
      break;
    case 'SUPERMAN':
      discount = 50;
      break;
    default:
      pResult.innerText = 'El cupon no es valido';
      return
  }
 */
/*   if (coupon == 'BATMAN') {
    discount = 30;
  } else if (coupon == 'SUPERMAN') {
    discount = 25;
  } else {
    pResult.innerText = 'El cupon no es valido';
  } */
    
/*   console.log({ price, discount });

  if (discount > 50) {
    pResult.innerText = 'No tenemos ese descuento'
    return
  }
   */

  const newPrice = (price * (100 - discount)) / 100;
  
  pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}