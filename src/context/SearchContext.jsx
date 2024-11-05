import axios from 'axios';
import React, { createContext, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { GET_PAGE } from '../service/apiService';

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const history = useNavigate();
    const [cache, setCache] = useState({});

    const handleSearchChange = useCallback(async (event) => {
        const input = event.target.value;
        setSearchQuery(input);

        if (!input.trim()) {
            setSearchResults([]);
            setDropdownOpen(false);
            return;
        }

        setDropdownOpen(true);
        
        // Check cache first
        if (cache[input]) {
            setSearchResults(cache[input]);
            return;
        }

        try {
            const productResponse = await axios.get(`http://localhost:8080/api/products/allproducts`);
            const products = productResponse.data;

            const filteredResults = products.filter((item) =>
                item.title?.toLowerCase().includes(input.toLowerCase())
            );

            // Cache results
            setCache(prevCache => ({ ...prevCache, [input]: filteredResults }));
            setSearchResults(filteredResults);
        } catch (error) {
            console.error('Error during search:', error);
        }
    }, [cache]);

    const handleProductSelect = () => {
        setSearchQuery('');
        setSearchResults([]);
        setDropdownOpen(false);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            history(`/search/${searchQuery}`);
        }
    };

    const handleSearchSubmit = async (event) => {
        event.preventDefault();

        if (!searchQuery) {
            alert("Vui lòng nhập sản phẩm muốn tìm kiếm");
            return;
        }

        try {
            const nextPage = 1;
            const productResponse = await GET_PAGE(
                'products',
                nextPage - 1,
                10,
                null,
                null,
                searchQuery
            );

            const products = productResponse.data;
            const filteredProducts = products.filter((item) =>
                item.title?.toLowerCase().includes(searchQuery.toLowerCase())
            );

            setSearchResults(filteredProducts);
            history(`/search?search=${searchQuery}`);
            setDropdownOpen(false);
        } catch (error) {
            console.error('Lỗi trong quá trình tìm kiếm:', error);
        }
    };

    return (
        <SearchContext.Provider value={{ handleSearchSubmit, handleSearchChange, handleProductSelect, handleKeyPress, searchResults, isDropdownOpen, searchQuery }}>
            {children}
        </SearchContext.Provider>
    );
};

export { SearchContext, SearchProvider };
