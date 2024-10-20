import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/arrow_right_black.png'

const Breadcrum = (props) => {

    const {product} = props;
    return (
        <div className="breadcrum">
           HOME <img src={arrow_icon} alt="" height="15" width="15"/> SHOP <img src={arrow_icon} alt="" height="15" width="15"/> {product.category} <img src={arrow_icon} alt="" height="15" width="15"/> {product.name}
        </div>
    )
}

export default Breadcrum;