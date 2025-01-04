import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../redux/cardsSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(state => state.cards.searchTerm);

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className="relative w-full max-w-xl mx-auto mb-6">
      <input
        type="text"
        placeholder="Search cards..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700/50 
                 rounded-lg focus:outline-none focus:border-purple-500/50
                 text-gray-200 placeholder-gray-400
                 transition-colors duration-200"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar; 