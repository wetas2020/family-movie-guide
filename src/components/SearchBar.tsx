// src/components/SearchBar.tsx
'use client';
import React from 'react';

interface SearchBarProps {
    movieTitle: string;
    setMovieTitle: (title: string) => void;
    handleSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ movieTitle, setMovieTitle, handleSearch }) => {
    return (
        <div className="text-center mt-10">
            <h2 className="text-4xl font-abril">Is this movie family-friendly?</h2>
            <p className="mt-4 text-xl text-gray-600 font-lato">
                Enter a movie title to see if it&apos;s appropriate for your family
            </p>
            <div className="flex justify-center mt-6">
                <input
                    type="text"
                    className="border border-gray-300 rounded-l-md p-4 w-1/3 text-lg"
                    placeholder="Enter a movie title"
                    value={movieTitle}
                    onChange={(e) => setMovieTitle(e.target.value)}
                />
                <button
                    className="bg-blue-500 text-white p-4 rounded-r-md text-lg"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
