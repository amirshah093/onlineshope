import React from 'react';
import CustomButton from '../buttons/custom-button';
import './cart-dropdown.style.scss';

const CartDropdown = () =>(
    <div className=" cart-dropdown">
        <div className='cart-items'></div>
        <CustomButton >Go To Checkout</CustomButton>
    </div>
);

export default CartDropdown;