import { menuArray } from './data.js';

let orderArr = [menuArray[0]];

function getMenuHtml() {
  return menuArray
    .map(({ name, ingredients, id, price, emoji }) => {
      return `
    <div class="menu-item">
      <span class="emoji">${emoji}</span>

      <div class="menu-content">
        <h3 class="menu-title">${name}</h3>
        <p class="menu-ingredients">${ingredients.join(', ')}</p>
        <h4 class="menu-price">$${price}</h4>
      </div>
      <button class="add-btn" data-add="${id}">+</button>
    </div>
    `;
    })
    .join('');
}

function getOrderHtml() {
  const orderItemsHtml = orderArr
    .map(item => {
      return `
      <div class="order-item">
        <div class="order-item-details">
          <p class="order-item-name">${item.name}</p>
          <button class="remove-btn" data-remove="${item.id}">remove</button>
        </div>
        <p class="order-item-price">$${item.price}</p>
      </div>`;
    })
    .join('');

  const totalPrice = orderArr.reduce((total, item) => total + item.price, 0);

  return `
    <h2 class="order-title">Your Order</h2>
    <div class="order-item-list">
      ${orderItemsHtml}
    </div>
    <div class="total-price-container">
      <p>Total price:</p>
      <p class="total-price-amount" id="total-price">${totalPrice}</p>
    </div>

    <button class="complete-btn" id="complete-btn">Complete order</button>
  `;
}

function render() {
  document.getElementById('menu-container').innerHTML = getMenuHtml();

  if (orderArr.length > 0) {
    document.getElementById('order-container').innerHTML = getOrderHtml();
  } else {
    document.getElementById('order-container').innerHTML = '';
  }
}

render();
