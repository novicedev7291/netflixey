import React, { Fragment, Component } from 'react';
import StyledHeader from '../styled/StyledHeader';
import FontAwesomeIcon from './FontAwesomeIcon';
import StyledHeaderTitle from '../styled/StyledHeaderTitle';
import StyledHorrizontalScroll from '../styled/StyledHorrizontalScroll';
import Movie from './Movie';
import StyledFooter from '../styled/StyledFooter';
import StyledLargeBtn from '../styled/StyledLargeBtn';
import HelpMenuContainer from '../containers/HelpMenuContainer';
import StyledLoader from '../styled/StyledLoader';
import StyledMovieLink from '../styled/StyledMovieLink';

class Movies extends Component{
    componentDidMount(){
        if(this.props.movies.length === 0){
            this.props.getMovies();
        }
    }

    _handleRecommendations = () => {
        const ratedMovieList = this.props.movies.filter(movie => movie.rating);
        
        if(ratedMovieList.length === 0){
            this.props.showToast("error", "Please rate atleast one movie to get recommendations!");
            return ;
        }

        this.props.getRecommendedMovies(ratedMovieList);
    }

    render(){
        return (
            <Fragment>
                <StyledHeader>
                    <HelpMenuContainer />
                    <StyledHeaderTitle>The Movie Recommender</StyledHeaderTitle>
                    <FontAwesomeIcon icon="search" />
                </StyledHeader>
                <StyledHorrizontalScroll>
                {this.props.loading ? <StyledLoader /> :
                    this.props.movies.map(movie => (
                        <StyledMovieLink href={`movies/${movie.id}`} key={movie.id}>
                            <Movie 
                                poster={movie.poster}
                                name={movie.name}
                                duration={movie.duration}
                                year={movie.year} />
                        </StyledMovieLink>
                     ))
                }
                </StyledHorrizontalScroll>
                <StyledFooter>
                    <StyledLargeBtn onClick={this._handleRecommendations}>Get Recommended Movies</StyledLargeBtn>
                </StyledFooter>
            </Fragment>
        );
    }
};

export default Movies;