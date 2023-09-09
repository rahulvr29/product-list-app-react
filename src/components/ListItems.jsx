import React from 'react';
import './list-item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function ListItem({ productName, productImageURL, productPrice, productCategory, productRating }) {
    return (
        <div className='category-container'>
            <img className="background-image" src={productImageURL} alt={productName} />

            <div className="category-body-container">
                <h2 className='title'>{productName}</h2>

                <h2 className='category'>{productCategory}</h2>

                <div className='details'>
                <h2 className='amount'>Starts from <span>${productPrice}</span></h2>

                <p className='rating'>
                <FontAwesomeIcon icon={faStar} />        {productRating}
                </p>
                </div>

            </div>
        </div>
    );
}

export default ListItem;
