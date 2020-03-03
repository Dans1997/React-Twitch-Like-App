import axios from "axios"

import { SIGN_IN, SIGN_OUT } from "./types"

export const signInAction = userId => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOutAction = () => {
    return {
        type: SIGN_OUT
    }
}

export const createStream = formValues => async dispatch => {
    axios.post('http://localhost:3001/streams', formValues)
}