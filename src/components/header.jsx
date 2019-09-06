import React from 'react';
import './header.style.scss';
import {Link} from 'react-router-dom';
import {auth} from '../firebase/firebase-util'
import {ReactComponent as Logo } from '../assets/crown.svg';
import { connect } from 'react-redux';
import CartIcon from './cart-icon/cart-icon';
import CardDropdown from '../components/cart-dropdown/cart-dropdown'

const Header =({currentuser, hidden}) =>(
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to= '/'>
            HOME
            </Link>
            <Link className='option' to ='/shop'>
            SHOP
            </Link>

            {
                currentuser ?
                <div className="option" onClick={() => auth.signOut()}> SIGN OUT
                </div>
                :
                <Link className="option" to='/signin'> SIGN IN</Link>
            }
            <Link className='option' to= '/contact'>
            CONTACT
            </Link>
            <CartIcon />
        </div>
        {
            hidden ? null: <CardDropdown />
        }
    </div>
);

const mapStateToProps = ({user: {currentuser}, cart: {hidden}}) => ({
    currentuser,
    hidden
}
);
export default connect(mapStateToProps) (Header);