import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import Directory from './components/Directory';
import { CategoryContext } from './context/category-context';
import SearchBar from './components/SearchBar';
import SortList from './components/SortList';

function App() {
    const { listOfProducts } = useContext(CategoryContext);

    return (
        <>
            <Navbar/>

            <SearchBar />

            <SortList />

            <Directory 
                products={listOfProducts} 
            />
        </>
    );
}

export default App;
