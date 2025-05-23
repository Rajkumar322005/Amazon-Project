export const cart = [
    {
        productId : '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity:1
    },
    {
        productId : '83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
        quantity : 2
    }
];
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