// src/components/MovieSearch.tsx
'use client';
import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import SearchBar from './SearchBar';

const MovieSearch = () => {
    const [movieTitle, setMovieTitle] = useState('');
    const [movieData, setMovieData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async () => {
        try {
            const response = await axios.get(
                `https://www.omdbapi.com/?t=${movieTitle}&apikey=75116cd9`
            );
            if (response.data.Response === 'True') {
                setMovieData(response.data);
                setError(null);
            } else {
                setMovieData(null);
                setError('Movie not found.');
            }
        } catch (error) {
            setMovieData(null);
            setError('Error fetching data.');
        }
    };

    const isFamilyFriendly = (rating: string) => {
        const familyFriendlyRatings = ['G', 'PG', 'PG-13'];
        return familyFriendlyRatings.includes(rating);
    };

    return (
        <div className="text-center mt-10">
            <SearchBar
                movieTitle={movieTitle}
                setMovieTitle={setMovieTitle}
                handleSearch={handleSearch}
            />
            <div className="mt-10 flex justify-center">
                {error && <p className="text-red-500 text-xl font-bold">{error}</p>}
                {movieData && (
                    <div className="flex border p-4 rounded max-w-[550px]">
                        <div className="w-1/2 flex-shrink-0">
                            <Image
                                src={movieData.Poster}
                                alt={`${movieData.Title} poster`}
                                className="rounded"
                                layout="responsive"
                                width={500}
                                height={750}
                            />
                        </div>
                        <div className="w-1/2 pl-4 text-left">
                            <h3 className="text-2xl font-bold">
                                {movieData.Title} ({movieData.Year})
                            </h3>
                            <p className="text-lg">
                                <strong>Rating:</strong> {movieData.Rated}
                            </p>
                            <p className="text-lg">
                                <strong>Runtime:</strong> {movieData.Runtime}
                            </p>
                            <p className="text-lg">
                                <strong>Genre:</strong> {movieData.Genre}
                            </p>
                            <p className="text-lg">
                                <strong>Plot:</strong> {movieData.Plot}
                            </p>
                            <p className="text-lg">
                                <strong>Family-friendly:</strong>
                                <span
                                    className={
                                        isFamilyFriendly(movieData.Rated)
                                            ? 'text-green-500 font-bold'
                                            : 'text-red-500 font-bold'
                                    }
                                >
                                    {isFamilyFriendly(movieData.Rated) ? 'Yes' : 'No'}
                                </span>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MovieSearch;
