import axios from "axios";

//TYPES

const ADD_FAVORITE = "ADD_FAVORITE";
const REMOVE_FAVORITE = "REMOVE_FAVORITE";
const FILTER = "FILTER";
const ORDER = "ORDER";

//FUNCIONES

const URL_BASE = "http://localhost:3001/rickandmorty/fav/";

export const addFavorite = (character) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(URL_BASE, character);
      return dispatch({
        type: ADD_FAVORITE,
        payload: data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const removeFavorite = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`${URL_BASE}${id}`);
      return dispatch({
        type: REMOVE_FAVORITE,
        payload: data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (order) => {
  return { type: ORDER, payload: order };
};
