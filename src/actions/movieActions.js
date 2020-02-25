import { createAction } from "redux-actions";
import { API, SET_MOVIES, SELECT_MOVIE, RATE_MOVIE, GET_RECOMMENDED_MOVIES } from "../constants/actionTypes";
import { apiPayloadCreator } from "../utils/apiUtils";
import { schema, normalize } from "normalizr";
import { GET_MOVIES } from "../constants/labels";

const getMoviesAC = createAction(API, apiPayloadCreator);
const getRecommendedMoviesAC = createAction(API, apiPayloadCreator);

function setMovies(movies){
    console.log(movies);
    const movieSchema = new schema.Entity("movies");
    const movieListSchema = new schema.Array(movieSchema);
    const normalizedData = normalize(movies, movieListSchema);
    return {
        type: SET_MOVIES,
        payload: normalizedData.entities.movies
    };
}

export const getMovies = () => getMoviesAC({url: "/vcvx0", onSuccess: setMovies, label: GET_MOVIES });
export const getRecommendedMovies = ratedMovies => getRecommendedMoviesAC({
                url:"/89910", 
                data: ratedMovies, 
                onSuccess: setMovies, 
                label: GET_RECOMMENDED_MOVIES
            });
export const selectMovie = createAction(SELECT_MOVIE);
export const rateMovie = createAction(RATE_MOVIE, (rate, movieId) => ({
    rate,
    movieId
}));