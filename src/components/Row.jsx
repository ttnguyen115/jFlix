import { GridList, makeStyles, GridListTile } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

const base_url = "https://image.tmdb.org/t/p/original/";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },

    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        padding: '20px',
    },
    
    gridItem: {
        objectFit: 'contain',
        width: '100%',
        maxHeight: '100px',
        margin: '0 5px',
        transition: 'transform 450ms',

        '&:hover': {
            transform: 'scale(1.08)',
        }
    },

    gridElement: {
        width: '100%',
        maxWidth: '400px',
        height: 'auto',
    },

    posterLarge: {
        maxHeight: '300px',
        width: '100%',
        height: 'auto',

        '&:hover': {
            transform: 'scale(1.09)',
            opacity: 1,
        },
    },
}));

Row.propTypes = {
    title: PropTypes.string,
    fetchUrl: PropTypes.string,
    isLargeRow: PropTypes.bool,
};

function Row({title, fetchUrl, isLargeRow}) {
    const classes = useStyles();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    // console.table(movies);

    return (
        <Box className={classes.root}>
            <h2>{title}</h2>

            <GridList className={classes.gridList} cols={7}>
                {movies.map(movie => (
                    <GridListTile key={movie.id} className={`${classes.gridItem} ${isLargeRow && classes.posterLarge}`}>
                        <img 
                            className={classes.gridElement}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                            alt={movie.original_title} 
                        />
                    </GridListTile>
                ))}
            </GridList>
        </Box>
    );
}

export default Row;