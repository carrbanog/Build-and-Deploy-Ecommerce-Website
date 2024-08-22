const tbody = document.querySelector("#cart-items");
const cartSubtotal = document.querySelector("#cartSubtotal");
const shipping = document.querySelector("#shipping");
const resultSection = document.querySelector("#result");


const cartItem = JSON.parse(localStorage.getItem("cartItem"));

let allPrice = 0;

function drawList(){
  for(let i=0; i<cartItem.length; i++){
    let tr = document.createElement("tr");
    tr.innerHTML += `
    <td><i class="fa-regular fa-circle-xmark"></i></td>
    <td><img src="${cartItem[i].image}" alt=""></td>
    <td>${cartItem[i].name}</td>
    <td>${cartItem[i].price}</td>
    <td><input type="number" value="1"></td>
    <td class="subtotal">${cartItem[i].price}</td>
    `
    tbody.appendChild(tr);
  }
}
drawList();

const deleteBtn = document.querySelectorAll(".fa-circle-xmark");
// console.log(deleteBtn.parentElement.parentElement.remove());
for(let i=0; i<deleteBtn.length; i++){
  deleteBtn[i].addEventListener("click", deleteList);
}

function deleteList(e){
  // console.log(e.target.parentElement.parentElement);
  let targetList = e.target.parentElement.parentElement;
  targetList.remove();
  minus(targetList);

}
// 가격 빼기
function minus(targetList){
  const minusPrice = targetList.querySelector(".subtotal").textContent.replace("$", "");
  let allMinusPrice = allPrice - minusPrice;
  cartSubtotal.innerHTML = allMinusPrice;
  resultSection.innerHTML = allMinusPrice;
  carculate(allPrice);
}

function carculate(allPrice){
  const subtotal = document.querySelectorAll(".subtotal");
// const intSubtotal = parseInt(subtotal.replace("$", ""));
for(let i=0; i<subtotal.length; i++){
  // console.log(subtotal[i].textContent);
  const intPrice = parseInt(subtotal[i].textContent.replace("$", ""));
  // console.log(intPrice);
  allPrice = allPrice + intPrice
}
cartSubtotal.innerHTML = allPrice;
if(shipping.textContent === "Free"){
  allPrice += 0;
}else{
  allPrice = allPrice + parseInt(shipping.textContent);
}
resultSection.innerHTML = allPrice;
}

