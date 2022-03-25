import React, {useReducer} from "react"
import axios from "axios"

import Context from "./index";
import reducer from "./reducer";

import {
    GET_IMAGES
} from "./types";

const State = (props) => {
    const initialState = {
        images: [],
    };
    const client_id = process.env.REACT_APP_CLIENT_ID;


    const [state, dispatch] = useReducer(reducer, initialState);

    const getImages = async () => {
      const response = await axios.get
      (`https://api.unsplash.com/photos/?client_id=${client_id}`);
      dispatch({type: GET_IMAGES, payload: response.data});
      console.log(response.data);
    }

    return(
       <Context.Provider
        value={{
            images: state.images,
             getImages,
            }}>
            {props.children}
            </Context.Provider>
    )}
