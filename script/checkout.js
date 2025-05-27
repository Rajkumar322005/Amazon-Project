import { cart,removeCart } from "../data/cart.js";
import { products } from "../data/products.js";
import { format_money } from "./utils/money.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
// Not Every Externel library have ESM, if one import no need to put{}  
import {deliveryOptions} from '../data/delivaryoptions.js';


const today = dayjs();
const deliveryDate = today.add(7,'days');
console.log(deliveryDate.format('dddd , MMMM D'));
let cartSummary = '';

cart.forEach((cartItem) =>{
    const productId = cartItem.productId;
    let matchItem;
    products.forEach((product)=>{
        if(product.id === productId){
            matchItem = product;
        };
    });
    //console.log(matchItem);
    const del = cartItem.deliveryOptionsId;
    let deliv_option;
    deliveryOptions.forEach((option)=>{
        if(option.id === del){
            deliv_option = option;
        }
    });
    const today = dayjs();
    const deliverydate = today.add(deliv_option.delivaryDays, "days");
    const datestring = deliverydate.format("dddd,MMMM D");
    console.log(deliverydate,datestring);

    cartSummary += `
    <div class="cart-item-container js-cart-item-container-${matchItem.id}">
        <div class="delivery-date">
            Delivery date: ${datestring};
        </div>

        <div class="cart-item-details-grid">
            <img class="product-image"
            src="${matchItem.image}">

            <div class="cart-item-details">
            <div class="product-name">
                ${matchItem.name}
            </div>
            <div class="product-price">
                $${format_money(matchItem.priceCents)}
            </div>
            <div class="product-quantity">
                <span>
                Quantity: <span class="quantity-label">${
                  cartItem.quantity
                }</span>
                </span>
                <span class="update-quantity-link link-primary">
                Update
                </span>
                <span class="delete-quantity-link link-primary js-delete-link" data-product-id = "${
                  matchItem.id
                }">
                 Delete
                </span>
            </div>
            </div>

            <div class="delivery-options">
                <div class="delivery-options-title">
                    Choose a delivery option:
                </div>
                ${deliveryOptionsHtml(matchItem, cartItem)}
            </div>
        </div>
    </div>
    `;
    
});

document.querySelector(".js-order-summary").innerHTML = cartSummary;





function deliveryOptionsHtml(matchItem,cartItem) {

    let html = '';
    deliveryOptions.forEach((deliveryoption) => {
        const today = dayjs();
        const deliverydate = today.add(deliveryoption.delivaryDays,'days');
        const datestring = deliverydate.format('dddd,MMMM D');

        const price = deliveryoption.PriceCents 
        === 0? 'FREE Shipping' : `$${format_money(deliveryoption.PriceCents)} - `;

        const ischecked = deliveryoption.id === cartItem.deliveryOptionsId; 
        console.log(ischecked);
        html += `
           <div class="delivery-option">
            <input type="radio" 
           ${ischecked?"checked":" "}
            class="delivery-option-input"
            name="${matchItem.id}">
            <div>
                <div class="delivery-option-date">
                    ${datestring}
                </div>
                <div class="delivery-option-price">
                    ${price}  Shipping;
                </div>
            </div>
        </div>`;
  });
  return html;
}

document.querySelectorAll('.js-delete-link').forEach((link)=>{
    link.addEventListener('click',()=>{
        const productid = link.dataset.productId;
        removeCart(productid);
        
        const container = document.querySelector(`.js-cart-item-container-${productid}`);
        container.remove();
    });
});
