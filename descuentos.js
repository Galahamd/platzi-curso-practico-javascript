function calcularPrecioConDescuento  (precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}
function onClickButtonPriceDiscount () {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inPutDiscount = document.getElementById("InputDiscount");
    const discountValue = inPutDiscount.value;
    
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    const PriceParrafo = document.getElementById("PriceParrafo");
    PriceParrafo.innerText = "El precio con descuento es : $" + precioConDescuento ;
} 