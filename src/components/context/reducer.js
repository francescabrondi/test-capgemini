import {
    GET_IMAGES
} from "./types";

export default (state, action) => {
    switch (action.type) {
        case GET_IMAGES:
            return {
                ...state,
                token: action.payload,
            };
            default:
                return state;
    }
}