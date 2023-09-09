import React, { useContext } from 'react';
import './sort-list.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { CategoryContext } from '../context/category-context';

function SortList() {
    const { priceOrder, setPriceOrder, ratingOrder, setRatingOrder } = useContext(CategoryContext);

    const handlePriceSort = () => {
        if(ratingOrder !== '') {
            setRatingOrder('');
        }
        if(priceOrder === '') {
            setPriceOrder('asc');
        }
        else if(priceOrder === 'asc') {
            setPriceOrder('desc');
        }
        else if(priceOrder === 'desc') {
            setPriceOrder('asc');
        }
    }

    const handleRatingSort = () => {
        if(priceOrder !== '') {
            setPriceOrder('');
        }
        if(ratingOrder === '') {
            setRatingOrder('asc');
        }
        else if(ratingOrder === 'asc') {
            setRatingOrder('desc');
        }
        else if(ratingOrder === 'desc') {
            setRatingOrder('asc');
        }
    }

    return (
        <div className='sort-features'>
            <span>Sort by</span>
            <button className="price-sort" onClick={handlePriceSort}>
                <span className='list'>Price </span>{priceOrder === '' ? '' : 
                (priceOrder === 'asc' ? <FontAwesomeIcon icon={faArrowUp} className='icon' /> : 
                <FontAwesomeIcon icon={faArrowDown} className='icon' />)}
            </button>

            <button className="rating-sort" onClick={handleRatingSort}>
                <span className='list'>Rating</span>
                {ratingOrder === '' ? '' : 
                (ratingOrder === 'asc' ? <FontAwesomeIcon icon={faArrowUp} className='icon' /> : 
                <FontAwesomeIcon icon={faArrowDown} className='icon' />)}
            </button>
        </div>
    )
}

export default SortList;
