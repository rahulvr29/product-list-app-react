import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './search-bar.css';
import { CategoryContext } from '../context/category-context';
import CategoryFilter from './CategoryFilter';

export default function SearchBar(props) {
    const { searchInputValue, setSearchInputValue } = useContext(CategoryContext);

    const handleChange = (e) => {
        setSearchInputValue(e.target.value);
    }

    return (
        <div className='search-bar-container'>
            <input 
                onChange={handleChange} 
                placeholder='Search Products or Categories' 
                value={searchInputValue} 
            />
            <div className='search-icon-container'>
                <button onClick={props.handleClick}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
                </button>
            </div>
            <CategoryFilter />
        </div>
    );
}
