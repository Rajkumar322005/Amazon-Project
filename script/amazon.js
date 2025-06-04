import {cart,addTocart} from '../data/cart.js';
import {products} from '../data/products.js';
import { format_money } from "./utils/money.js";

let combinedHtml = '';
products.forEach((products)=>{
    combinedHtml += `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src=${products.image}>
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${products.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${products.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${products.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${format_money(products.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-cart" data-product-id = "${products.id}">
            Add to Cart
          </button>
        </div>
        `;
});
document.querySelector(".js-products-add").innerHTML = combinedHtml;

function updateCart(){
  let tot_quantity = 0;
  cart.forEach((item) => {
    tot_quantity += item.quantity;
  });
  document.querySelector(".js-cart-quantity").innerHTML = tot_quantity;
};
document.querySelectorAll('.js-add-cart')
  .forEach((button) =>{
    button.addEventListener('click',() =>{
      //console.log(button.dataset.productId)
      const productid = button.dataset.productId;
      addTocart(productid);

      updateCart();
      console.log(cart);
    });
  });