export const cart  = [];
export function addTocart(productid){
  let matchItem;
  //product name may be same
  //we have to maintain id
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
    });
  }
}