import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

        const { food_list,cartItems,removeFromCart,   getTotalCartAmount } = useContext(StoreContext);
        const navigate = useNavigate();

  return (
    <div className='cart'> 
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
          <br />
          <hr />
          {food_list.map((item) => {
            if(cartItems[item._id]>0){
              return(
              <div>  
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt='' />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price*cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p> 
                </div>
                  <hr />
              </div>
              )
            }
          })}
      </div>
          <div className='cart-bottom'>
            <div className='cart-total'>
              <h2>Cart Totals</h2>
                <div className='cart-total-details'>
                  <p>Subtotal</p>
                  <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className='cart-total-details'>
                  <p>Delivery Fee</p>
                  <p>${2}</p>
                </div>
                <hr />
                <div className='cart-total-details'>
                  <p>Total</p>
                  <p>${getTotalCartAmount()+2}</p>
                </div>
                <button onClick={()=>navigate('/food_order_app/order')}>PROCEED TO CHECKOUT</button>
            </div>
            <div className='cart-promocode'>
                <p>If you have a promo code, enter it here</p>
                <div className='cart-promo-input'>
                  <input type='text' placeholder='Promo code' />
                  <button>Submit</button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Cart