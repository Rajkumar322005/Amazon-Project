export let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart) {
  cart = [
    {
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 1,
      deliveryOptionsId: "1", 
    },
    {
      productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
      quantity: 2,
      deliveryOptionsId: "3", 
    },
  ];
}

function saveTostorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
saveTostorage();

export function addTocart(productid) {
  let matchItem;
  cart.forEach((item) => {
    if (item.productId === productid) {
      matchItem = item;
    }
  });
  if (matchItem) {
    matchItem.quantity += 1;
  } else {
    cart.push({
      productId: productid,
      quantity: 1,
      deliveryOptionsId: "2", 
    });
  }
  saveTostorage();
}

export function removeCart(productid) {
  const newCart = [];
  cart.forEach((cart) => {
    if (cart.productId !== productid) {
      newCart.push(cart);
    }
  });
  cart = newCart;
  saveTostorage();
}
export function updateDelivaryOption(productId,deliveryOptionId){
  let matchItem;
  cart.forEach((item) => {
    if (item.productId === productId) {
      matchItem = item;
    }
  });
  matchItem.deliveryOptionsId = deliveryOptionId;
  saveTostorage();
}