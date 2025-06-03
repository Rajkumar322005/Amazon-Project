import {cart} from '../../data/cart.js';
import { getProduct } from '../../data/products.js';
import { getdeliveryOption } from '../../data/delivaryoptions.js';
import { format_money } from '../utils/money.js';
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
    const beforeTax = cost + shippingcost;
    const totaltax = beforeTax*0.1;
    const totalCents = beforeTax + totaltax;
    const len = (cart.length);
    const paymentSummaryHtml = 
    `
        <div class="payment-summary-title">
            Order Summary
        </div>

        <div class="payment-summary-row">
        <div>Items (${len}):</div>

        <div class="payment-summary-money">$${format_money(cost)}</div>
        </div>

        <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">$${format_money(shippingcost)}</div>
        </div>

        <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">$${format_money(beforeTax)}</div>
        </div>

        <div class="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div class="payment-summary-money">$${format_money(totaltax)}</div>
        </div>

        <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money">$${format_money(totalCents)}</div>
        </div>

        <button class="place-order-button button-primary">
        Place your order
        </button>
    `

    document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHtml;
};