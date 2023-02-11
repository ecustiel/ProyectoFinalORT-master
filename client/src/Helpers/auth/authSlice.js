import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated',  //authenticated o nor-authenticated
        user: {},
        errorMessage: undefined
    },
    reducers: {
        onChecking: (state) => {
            state.status = 'not-authenticated';
            state.user = {};
            state.errorMessage = undefined;
        },
        onLogin: (state, {payload}) => {
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = undefined;
        },
        onLogout: (state, {payload}) => {
            state.status = 'not-authenticated';
            state.user = {};
            state.errorMessage = payload;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        },
        clearErrorMessage: (state) => {
            state.errorMessage = undefined;
        }
    }
});


export const {onChecking,onLogin, checkingCredentials, onLogout, clearErrorMessage} = authSlice.actions;