import React from 'react';
import StyledMovie from "../styled/StyledMovie";
import StyledMoviePoster from "../styled/StyledMoviePoster";
import StyledMovieTitle from "../styled/StyledMovieTitle";
import StyledMovieLengthYear from "../styled/StyledMovieLengthYear";

const Movie = ( { id, poster, name, duration, year, index} ) => (
    <StyledMovie>
                    <StyledMoviePoster src={poster} index={index} />
                    <StyledMovieTitle>{name}</StyledMovieTitle>
                    <StyledMovieLengthYear>{duration +" "+year}</StyledMovieLengthYear>
                </StyledMovie>
);

export default Movie;