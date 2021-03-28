import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from '../api/axios';

const base_url = "https://image.tmdb.org/t/p/original/";

Row.propTypes = {
    title: PropTypes.string,
    fetchUrl: PropTypes.string,
};

function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.table(movies);

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map(movie => (
                    <img 
                        className="row__poster"
                        width="100%" 
                        src={`${base_url}${movie.poster_path}`} 
                        alt={movie.original_title} 
                    />
                ))}
            </div>
        </div>
    );
}

export default Row;