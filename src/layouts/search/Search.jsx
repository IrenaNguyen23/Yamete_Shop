import React, { useContext } from 'react'
import SearchResults from './SearchResults';
import { SearchContext } from '../../context/SearchContext';

const Search = () => {
    const { handleSearchSubmit, handleSearchChange, handleProductSelect, searchResults, isDropdownOpen, searchQuery } = useContext(SearchContext);
    return (
        <div className="header-search-container">
            <input
                type="search"
                name="search"
                value={searchQuery}
                className="search-field"
                onChange={handleSearchChange}
                placeholder="Enter your product name..."
            />

            <button className="search-btn" onClick={handleSearchSubmit}>
                <ion-icon name="search-outline" />
            </button>
            {isDropdownOpen && (
                <div
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        zIndex: 100,
                        backgroundColor: 'white',
                        border: '1px solid #ccc',
                        borderRadius: '8px', // Add border-radius for a rounded look
                        overflow: 'hidden', // Hide overflow to keep it within the rounded border
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    }}
                    onClick={handleProductSelect}
                >
                    <SearchResults results={searchResults} />
                </div>
            )}
        </div>
    );
}

export default Search;