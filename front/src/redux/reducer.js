

const initialState = {
    myFavorites: [],
    allFavorites: [],
    
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_FAVORITE':
                    return { ...state, myFavorites: action.payload, allFavorites: action.payload };
        
        case 'REMOVE_FAVORITE':
                    return { ...state, myFavorites: action.payload, allFavorites: action.payload };
        
        case "FILTER":
                    if(action.payload === "ALL") {
                        return {
                            ...state,
                            myFavorites: state.allFavorites
                        }
                    }
                const filterByGender = [...state.allFavorites].filter((fav) => 
                        fav.gender === action.payload
                )
            return {
        ...state,
        myFavorites: filterByGender
            }

        case "ORDER":
                const favoritesOrdered = action.payload === "A"
                ? [...state.myFavorites].sort((a, b) => a.id - b.id)
                : [...state.myFavorites].sort((a, b) => b.id - a.id);
                return {
                    ...state,
                    myFavorites: favoritesOrdered
                };
            default:
            return {...state};
    }
};


export default rootReducer