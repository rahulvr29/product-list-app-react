import React, { useContext } from 'react';
import './category-filter.css';
import { CategoryContext } from '../context/category-context';

function CategoryFilter() {
    const { categories, selectedCategory, setSelectedCategory } = useContext(CategoryContext);

    const handleCategorySelection = (e) => {
        setSelectedCategory(e.target.value);
    }

    return (
        <div className='search-filter'>
            <select 
                name="" 
                id="" 
                value={selectedCategory} 
                onChange={handleCategorySelection}
            >
                <option value="">
                    <span className='option-value'>--Select a category--</span>
                    </option>
                {categories.map(category => 
                    <option 
                        key={category.id} 
                        value={category.productCategory} 
                    >
                        {category.productCategory}
                    </option>
                )}
            </select>
        </div>
    );
}

export default CategoryFilter;
