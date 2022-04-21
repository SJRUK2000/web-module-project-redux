const initalState = {
    favorites: [{title: 'Placeholder', id:1}],
    displayFavorites: true 
}

const favoritesReducer = (state = initalState, action) => {
    switch(action.type){
        default:
            return(state);
    }
}

export default favoritesReducer;
