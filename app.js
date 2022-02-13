function productCount(productName, isIncreasing, price) {
  const productQuantity = document.getElementById(productName + "-quantity");
  let productQuantityValue = productQuantity.value;
  debugger;
  if (isIncreasing) {
    productQuantityValue = parseInt(productQuantityValue) + 1;
    debugger;
    console.log(productQuantityValue);
  } else if (productQuantityValue > 0) {
    productQuantityValue = parseInt(productQuantityValue) - 1;
  }
  productQuantity.value = productQuantityValue;
  const productPrice = document.getElementById(productName + "-price");
  productPrice.innerText = price * productQuantityValue;
}
document.getElementById("phone-plus").addEventListener("click", function () {
  productCount("phone", true, 1219);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  productCount("phone", false, 1219);
});
document.getElementById("case-plus").addEventListener("click", function () {
  productCount("case", true, 59);
});
document.getElementById("case-minus").addEventListener("click", function () {
  productCount("case", false, 59);
});
