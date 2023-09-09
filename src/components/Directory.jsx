import React from 'react';
import './directory.css';
import ListItem from './ListItems';

function Directory({ products }) {
    return (
        <div className="categories-container">
            {products.map(item => {
                return (
                    <ListItem 
                        key={item.id} 
                        {...item} 
                    />
                );
            })}
        </div>
    );
}

export default Directory;
