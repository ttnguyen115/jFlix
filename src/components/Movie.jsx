import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles } from '@material-ui/core';

Movie.propTypes = {
    movie: PropTypes.object,
};

const useStyles = makeStyles(theme => ({
    root: {},

    movieItem: {
        transition: 'transform 450ms',

        '&:hover': {
            transform: 'scale(1.08)',
            cursor: 'pointer',
        },
    },
}));

function Movie({movie}) {
    const classes = useStyles();
    const base_url = "https://image.tmdb.org/t/p/original/";

    return (
        <Box padding={1}>
            <img 
                className={classes.movieItem}
                src={`${base_url}${movie.poster_path}`} 
                alt={movie.original_title} 
                width="100%"
            />
        </Box>
    );
}

export default Movie;