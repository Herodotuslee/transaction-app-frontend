import {GET_ALL_TRANSACTION_SUCCESS, AUTH_ERROR} from "./types";
import axios from "../../axios";

export const getAllTransactions = () => dispatch => {

    return axios.get('/transactions', { headers: {token: localStorage.getItem('token')}})
        .then((data)=>{
            console.log(data);
            dispatch({
                type:GET_ALL_TRANSACTION_SUCCESS,
                payload: data.data
            })
        }).catch((err)=>{
            dispatch({
                type: AUTH_ERROR,
                payload: err
            })
        })
}