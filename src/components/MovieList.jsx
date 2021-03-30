import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import Movie from './Movie';

MovieList.propTypes = {
    data: PropTypes.array,
};

MovieList.defaultProps = {
    data: [],
};

function MovieList({data}) {

    return (
        <Box>
            <Grid container>
                {data.map(movie => (
                    <Grid item key={movie.id} xs={12} sm={6} md={3} lg={2}>
                        <Box>
                            <Movie movie={movie} />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default MovieList;