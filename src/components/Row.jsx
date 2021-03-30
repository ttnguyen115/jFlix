import { makeStyles, Grid, Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import MovieList from './MovieList';

const useStyles = makeStyles(theme => ({
    root: {},
}));

Row.propTypes = {
    title: PropTypes.string,
    fetchUrl: PropTypes.string,
};

function Row({title, fetchUrl}) {
    const classes = useStyles();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        (async () => {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
            // fetchData();
        })();
    }, [fetchUrl]);

    // console.table(movies);

    return (
        <Box className={classes.root}>
            <h2>{title}</h2>

            <Container>
                <Grid container>
                    <MovieList data={movies} />
                </Grid>
            </Container>
        </Box>
    );
}

export default Row;