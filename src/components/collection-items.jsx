import React from 'react';
import './collection-items.style.scss';
import CustomButton  from '../components/buttons/custom-button';
import {connect} from 'react-redux';
import {addItem} from '../components/cart/cart.action'

const CollectionItems =({item, addItem})=>{
    const { name, price, imageUrl,} =item;
    return (
    <div className='collection-item'>
        <div className='image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        >

        </div>
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton onClick={()=> addItem(item)} inverted> 
        Add to Cart 
        </CustomButton>
    </div>
)};

const mapDispatchToProps = dispatch =>({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItems);