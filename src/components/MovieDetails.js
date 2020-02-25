import React, { Fragment, Component } from 'react';
import StyledHeader from '../styled/StyledHeader';
import FontAwesomeIcon from './FontAwesomeIcon';
import StyledHeaderLink from '../styled/StyledHeaderLink';
import styled, { keyframes } from 'styled-components';
import StyledMoviePoster from '../styled/StyledMoviePoster';
import StyledMovieTitle from '../styled/StyledMovieTitle';
import StyledMovieLengthYear from '../styled/StyledMovieLengthYear';
import ReactStars from "react-stars";
import devices from '../utils/styledUtils';

const show = keyframes`
    to {
        transform: translateY(0);
        opacity: 1
    }
`;

const StyledMovieDetails = styled.div`
    display: flex;
    flex-direction: column;
    ${devices.md`
        flex-direction: row;
    `}
`;

const StyledMovieInfo = styled.div`
    padding: 2rem 0 1rem 0;

    &,
    & > * {
        transform: translateX(-150px);
        opacity: 0;
        animation-name: ${show};
        animation-duration: 500ms;
        animation-fill-mode: forwards;
    }

    ${devices.md`
        margin-left: 13rem;
    `}
`;

const StyledMovieDesc = styled.div`
    color: rgba(255, 255, 255, 0.5);
    margin-top: 30px;
    font-size: 0.8rem;
    lineHeight: 1.5;
`;

const StyledSmallBtn = styled.a`
    background: red;
    border: none;
    border-radius: 20px;
    color: #fff;
    display: inline-block;
    margin: 0 auto;
    cursor: pointer;
    outline: none;
    padding: 8px 17px;
    margin: 20px 0 15px 0;
    font-size: 12px;
    text-transform: uppercase;
    z-index: 10;
    curson: pointer;
    &:active {
        transform: translateY(4px);
    }
`;

class MovieDetails extends Component{
    static defaultProps = {
        selectedMovie: {
            poster: "",
            name: "",
            duration: "",
            year: "",
            details: "",
            id: "0"
        }
    };

    componentDidMount(){
        const movieId = +this.props.match.params.id;
        this.props.selectMovie(movieId);
    }

    _handleRating = rating => {
        const movieId = +this.props.match.params.id;
        this.props.rateMovie(rating, movieId);
    }

    render(){
        const { poster, name, duration, details, year, rating } = this.props.selectedMovie;
        return (
            <Fragment>
                <StyledHeader>
                    <StyledHeaderLink href="/">
                        <FontAwesomeIcon icon="chevron-left" text="Go back" />
                    </StyledHeaderLink>
                </StyledHeader>
                <StyledMovieDetails>
                    <StyledMovieInfo>
                        <StyledMoviePoster src={poster} alt={`Movie: ${name}`} isExpanded />
                        <StyledMovieTitle isLarge>{name}</StyledMovieTitle>
                        <StyledMovieLengthYear>{`${duration} ${year}`}</StyledMovieLengthYear>
                        <StyledMovieDesc>{details}</StyledMovieDesc>
                        <StyledSmallBtn>Watch trailer</StyledSmallBtn>
                        <ReactStars count={5} size={24} color2={"#ffd700"} value={rating} onChange={this._handleRating} />
                    </StyledMovieInfo>
                </StyledMovieDetails>
            </Fragment>
        );
    }
};

export default MovieDetails;