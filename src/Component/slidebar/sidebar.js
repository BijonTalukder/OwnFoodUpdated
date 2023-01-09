import React from "react";
import "./sidebar.css";

const Sidebar = ({ setState }) => {
  return (
    <aside className="cart-sidebar active  ">
      <div className="cart-header">
        <div className="cart-total">
          <i className="fas fa-shopping-basket"></i>
          <span>total item (5)</span>
        </div>
        <button
          className="cart-close"
          onClick={() => {
            setState({ isPaneOpen: false });
          }}
        >
          <i className="icofont-close"></i>
        </button>
      </div>
      <ul className="cart-list">
        <li className="cart-item">
          <div className="cart-media">
            <a href="#">
              <img src="images/product/01.jpg" alt="product" />
            </a>
            <button className="cart-delete">
              <i className="far fa-trash-alt"></i>
            </button>
          </div>
          <div className="cart-info-group">
            <div className="cart-info">
              <h6>
                <a href="product-single.html">existing product name</a>
              </h6>
              <p>Unit Price - $8.75</p>
            </div>
            <div className="cart-action-group">
              <div className="product-action">
                <button className="action-minus" title="Quantity Minus">
                  <i className="icofont-minus"></i>
                </button>
                <input
                  className="action-input"
                  title="Quantity Number"
                  type="text"
                  name="quantity"
                  value="1"
                />
                <button className="action-plus" title="Quantity Plus">
                  <i className="icofont-plus"></i>
                </button>
              </div>
              <h6>$56.98</h6>
            </div>
          </div>
        </li>
        <li className="cart-item">
          <div className="cart-media">
            <a href="#">
              <img src="images/product/02.jpg" alt="product" />
            </a>
            <button className="cart-delete">
              <i className="far fa-trash-alt"></i>
            </button>
          </div>
          <div className="cart-info-group">
            <div className="cart-info">
              <h6>
                <a href="product-single.html">existing product name</a>
              </h6>
              <p>Unit Price - $8.75</p>
            </div>
            <div className="cart-action-group">
              <div className="product-action">
                <button className="action-minus" title="Quantity Minus">
                  <i className="icofont-minus"></i>
                </button>
                <input
                  className="action-input"
                  title="Quantity Number"
                  type="text"
                  name="quantity"
                  value="1"
                />
                <button className="action-plus" title="Quantity Plus">
                  <i className="icofont-plus"></i>
                </button>
              </div>
              <h6>$56.98</h6>
            </div>
          </div>
        </li>
        <li className="cart-item">
          <div className="cart-media">
            <a href="#">
              <img src="images/product/03.jpg" alt="product" />
            </a>
            <button className="cart-delete">
              <i className="far fa-trash-alt"></i>
            </button>
          </div>
          <div className="cart-info-group">
            <div className="cart-info">
              <h6>
                <a href="product-single.html">existing product name</a>
              </h6>
              <p>Unit Price - $8.75</p>
            </div>
            <div className="cart-action-group">
              <div className="product-action">
                <button className="action-minus" title="Quantity Minus">
                  <i className="icofont-minus"></i>
                </button>
                <input
                  className="action-input"
                  title="Quantity Number"
                  type="text"
                  name="quantity"
                  value="1"
                />
                <button className="action-plus" title="Quantity Plus">
                  <i className="icofont-plus"></i>
                </button>
              </div>
              <h6>$56.98</h6>
            </div>
          </div>
        </li>
        <li className="cart-item">
          <div className="cart-media">
            <a href="#">
              <img src="images/product/04.jpg" alt="product" />
            </a>
            <button className="cart-delete">
              <i className="far fa-trash-alt"></i>
            </button>
          </div>
          <div className="cart-info-group">
            <div className="cart-info">
              <h6>
                <a href="product-single.html">existing product name</a>
              </h6>
              <p>Unit Price - $8.75</p>
            </div>
            <div className="cart-action-group">
              <div className="product-action">
                <button className="action-minus" title="Quantity Minus">
                  <i className="icofont-minus"></i>
                </button>
                <input
                  className="action-input"
                  title="Quantity Number"
                  type="text"
                  name="quantity"
                  value="1"
                />
                <button className="action-plus" title="Quantity Plus">
                  <i className="icofont-plus"></i>
                </button>
              </div>
              <h6>$56.98</h6>
            </div>
          </div>
        </li>
        <li className="cart-item">
          <div className="cart-media">
            <a href="#">
              <img src="images/product/05.jpg" alt="product" />
            </a>
            <button className="cart-delete">
              <i className="far fa-trash-alt"></i>
            </button>
          </div>
          <div className="cart-info-group">
            <div className="cart-info">
              <h6>
                <a href="product-single.html">existing product name</a>
              </h6>
              <p>Unit Price - $8.75</p>
            </div>
            <div className="cart-action-group">
              <div className="product-action">
                <button className="action-minus" title="Quantity Minus">
                  <i className="icofont-minus"></i>
                </button>
                <input
                  className="action-input"
                  title="Quantity Number"
                  type="text"
                  name="quantity"
                  value="1"
                />
                <button className="action-plus" title="Quantity Plus">
                  <i className="icofont-plus"></i>
                </button>
              </div>
              <h6>$56.98</h6>
            </div>
          </div>
        </li>
      </ul>
      <div className="cart-footer">
        <button className="coupon-btn">Do you have a coupon code?</button>
        <form className="coupon-form">
          <input type="text" placeholder="Enter your coupon code" />
          <button type="submit">
            <span>apply</span>
          </button>
        </form>
        <a className="cart-checkout-btn" href="checkout.html">
          <span className="checkout-label">Proceed to Checkout</span>
          <span className="checkout-price">$369.78</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
