// {
//      type: 'ADD_MOVIES',
//      movies: [m1,m2,m3]
// }
// {
//     type: 'DECREASE_COUNT'
// }

// action types
export const ADD_MOVIES = 'ADD_MOVIES';

export const ADD_FAVOURITE = 'ADD_FAVOURITE';

export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';

export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';

// action creators

export function addMovies (movies) {
    return {
        type: ADD_MOVIES,
        movies // shorthand
    };
}

export function addFavourite (movie) {
    return {
        type: ADD_FAVOURITE,
        movie // shorthand
    };
}

export function removeFromFavourite(movie){
    return{
        type: REMOVE_FAVOURITE,
        movie
    };
}

export function setShowFavourites(val){
    return {
        type:SET_SHOW_FAVOURITES,
        val
    }
}
