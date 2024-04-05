import React from 'react';
import '../../assets/css/store/cartItem.css'
import delete_icon from "../../assets/images/delete.svg";
import { incrementQuantity, decrementQuantity, removeItem} from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'

const CartItem = ({id, image, title, price, quantity=0}) => {
  const dispatch = useDispatch()
  
  return (
    <div className="cartItem">
      <div className="cartItem__image">
         <img src={image} alt='item'/>
      </div>
      <div className="cartItem__info">
        <p className="cartItem__title">{title}</p>
        <p className="cartItem__price">
          <small>R</small>
          <strong>{price}</strong>
        </p>
        {/* <div className='cartItem__incrDec'>
          <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
          <p>{quantity}</p>
          <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
        </div> */}
        <button
          className='cartItem__removeButton' 
          onClick={() => dispatch(removeItem(id))}>
          <img style={{width: "26px"}} src={delete_icon} alt="" />
        </button>
      </div>
    </div>
  )
}

export default CartItem