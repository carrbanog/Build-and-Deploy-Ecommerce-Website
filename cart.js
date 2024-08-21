document.addEventListener("DOMContentLoaded", function(){
  const cartItemContainer = document.querySelector("#cart-items");
  // console.log(cartItemContainer);
  const cartItem = JSON.parse(localStorage.getItem("cartItem"));
  // console.log(cartItem);
  if(cartItem){
    const newRow = document.createElement("tr");
    newRow.innerHTML += `
          <td><i class="fa-regular fa-circle-xmark"></i></td>
            <td><img src="${cartItem.image}" alt=""></td>
            <td>${cartItem.name}</td>
            <td>${cartItem.price}</td>
            <td><input type="number" value="1"></td>
            <td>${cartItem.price}</td>
    `
    cartItemContainer.appendChild(newRow);
  }
})

document.addEventListener("DOMContentLoaded", function(){
  const newCart = document.querySelector(".cart");
  if(newCart){
    newCart.addEventListener("click", function(){
      const productName = document.querySelector(".product-name").textContent;
      const productImage = document.querySelector(".product-image").getAttribute("src");
      const productPrice = document.querySelector(".product-price").textContent;
      const cartItem = {
        name: productName,
        price: productPrice,
        image: productImage,
      }
      console.log(cartItem);
    
      localStorage.setItem("cartItem", JSON.stringify(cartItem));
      window.location.href = "cart.html";
    }) 
  }
})

// const newCart = document.querySelector(".cart");
// newCart.addEventListener("click", function(){
//   const productName = document.querySelector(".product-name").textContent;
//   const productImage = document.querySelector(".product-image").getAttribute("src");
//   const productPrice = document.querySelector(".product-price").textContent;
//   const cartItem = {
//     name: productName,
//     price: productPrice,
//     image: productImage,
//   }
//   console.log(cartItem);

//   localStorage.setItem("cartItem", JSON.stringify(cartItem));
//   window.location.href = "cart.html";
// })
