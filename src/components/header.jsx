import React from 'react';
import './header.style.scss';
import {Link} from 'react-router-dom';
import {auth} from '../firebase/firebase-util'
import {ReactComponent as Logo } from '../assets/crown.svg';
import { connect } from 'react-redux';

const Header =({currentuser}) =>(
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
        </div>
    </div>
);

const mapStateToProps = state => ({
    currentuser: state.user.currentuser
}
);
export default connect(mapStateToProps) (Header);