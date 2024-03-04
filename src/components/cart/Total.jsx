import React,{useEffect} from 'react';
import '../../assets/css/store/total.css'
import {useSelector} from 'react-redux'

const Total = () => {

  const cart = useSelector((state) => state.cart)
  const state = useSelector((state) => state)
  useEffect(() => {
    //getDiscount();
    
  }, []);
  const getTotal = () => {
    
    let totalQuantity = 0
    let totalPrice = 0
     cart.forEach(item => {
       totalQuantity += item.quantity
       totalPrice += item.price * item.quantity
     })
    
    return {totalPrice, totalQuantity}
  }
  return (
    <div className="total">
      <h2>ORDER SUMMARY</h2>
      <div>
      {/*<div className="total__p">Shipping : <strong>0</strong></div>
      <div className="total__p">Discount : <strong>{(state.discount != null) ? state.discount : 0}</strong></div>*/}
        <p className="total__p">
          total ({getTotal().totalQuantity} items) 
          : <strong>R {(typeof (state.totalPrice) !== 'undefined') ? state.totalPrice : getTotal().totalPrice}</strong>
        </p>
      </div>
    </div>
  )
}

export default Total