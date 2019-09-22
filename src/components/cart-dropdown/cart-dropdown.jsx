import React from 'react';
import CustomButton from '../buttons/custom-button';
import CartItem from '../cart/cart.item';
import {connect} from 'react-redux';
import './cart-dropdown.style.scss';


const CartDropdown = ({cartItems}) =>(
    <div className="cart-dropdown">
        <div className='cart-items'>
            {
                cartItems.map(cartItem =>(
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            }
        </div>
        <CustomButton >Go To Checkout</CustomButton>
    </div>
);

const mapStateToProps = ({ cart: { cartItems}}) =>({
    cartItems
})

export default connect(mapStateToProps) (CartDropdown);