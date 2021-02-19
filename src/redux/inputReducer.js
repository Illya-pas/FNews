import {WRITE_INFO} from "./types";

const initialState = {
	tag: "",
}

export const inputReducer = (state = initialState, action) => {
	switch(action.type) {
		case WRITE_INFO:
			return {...state, tag: action.payload}
		default: return ""
	}
}