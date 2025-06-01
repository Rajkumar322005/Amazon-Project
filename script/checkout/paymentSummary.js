import {cart} from '../../data/cart.js';
import { getProduct } from '../../data/products.js';
import { getdeliveryOption } from '../../data/delivaryoptions.js';
export function renderPaymentSummary(){
    let cost = 0;
    let shippingcost = 0;
    cart.forEach((cartItem) => {

        const product = getProduct(cartItem.productId);
        cost += product.priceCents * cartItem.quantity;

        const deliveryOption =  getdeliveryOption(cartItem.deliveryOptionsId);
        shippingcost += deliveryOption.PriceCents;
          
    });
    //console.log(cost);
    //console.log(shippingcost);
    // const beforeTax = cost + shippingcost;
    // const totaltax = beforeTax*0.1;
    // const totalCents = beforeTax + totaltax;

    // const 
};