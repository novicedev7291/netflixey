import React from 'react';
import Movies from "../components/Movies";
import { connect } from 'react-redux';
import _ from "lodash";
import { getMovies, getRecommendedMovies } from "../actions/movieActions";
import { showToast } from "../actions/toastActions";
import { GET_MOVIES } from '../constants/actionTypes';

const MoviesContainer = props => <Movies {...props} />; 


const mapStateToProps = (state) => ({
   movies: _.shuffle(_.values(state.movies)),
   loading: state.isLoading[GET_MOVIES]
});

export default connect(
    mapStateToProps,
    { 
        getMovies,
        getRecommendedMovies,
        showToast
     }
)(MoviesContainer);