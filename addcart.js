const newCart = document.querySelectorAll(".cart");
newCart.forEach((cartIcon) => {
  cartIcon.addEventListener("click", function(event){
    event.preventDefault();
  })
})
const proContainer = document.querySelectorAll(".pro");
proContainer.forEach((product) => {
  const img = product.querySelector("img");
  const h5 = product.querySelector("h5");
  const h4 = product.querySelector("h4");

  img.className = "product-image";
  h5.className = "product-name";
  h4.className = "product-price";
})
let cartItems = [];
console.log(newCart);
for(let i=0; i<newCart.length; i++){
  newCart[i].addEventListener("click", addCart);
};

function addCart(e){
  // console.log(e.target.parentElement.parentElement);
  const newProduct = e.target.parentElement.parentElement;
  // console.log(newProduct.querySelector(".product-price").textContent);
  const newProductPrice = newProduct.querySelector(".product-price").textContent;
  const newProductImg = newProduct.querySelector(".product-image").getAttribute("src");
  const newProductName = newProduct.querySelector(".product-name").textContent;
  // console.log(newProductImg);
  const cartItem = {
    name: newProductName,
    price: newProductPrice,
    image: newProductImg,
  }
  cartItems.push(cartItem);
  console.log(cartItems);
  localStorage.setItem("cartItem", JSON.stringify(cartItems));
}
