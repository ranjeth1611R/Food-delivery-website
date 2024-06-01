import React, { useContext } from 'react'
import "./PlaceOrder.css"
import { Storecontext } from '../../components/context/Context'

const PlaceOrder = () => {
  const {getTotalCartAmount}= useContext(Storecontext)
  return (
    <div className='place-order'>
      <div className="place-order-left">
        <div className="title">Delivery Information</div>
        <div className="multi-fields">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Second name' />
        </div>
        <input type="text" placeholder='Emailaddress' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Company' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>

      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount()+2}</b>
            </div>
            
          </div>

          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
