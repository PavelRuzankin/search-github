import React from "react";
import { GithubContext } from "./GithubContext"
import { useReducer } from "react"
import { githubReducer } from "./githubReducer";
import { SEARCH_USERS, GET_USER, GET_REPOS, SET_LOADING, CLEAR_USERS } from "../alert/types"

export const GithubState = ({children}) => {
    const  CLIENT_ID ="9151b98fb7a2935e6e31"
    const CLIENT_SECRET_ID = "630d2c297a662a0f3af1c1947c942942ec7dc0c8"
    const initialState = {
        loading: false,
        users: [],
        user: {},
        repos: []
    }
    const [state, dispatch] = useReducer(githubReducer, initialState)

    const search = async (value) => {
        setLoading()
        try{
            const response = await fetch(`https://api.github.com/search/users?q=${value}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET_ID}`)
            const data = await response.json()
            dispatch({type: SEARCH_USERS, payload: data.items})
        }catch(err){
            console.error(err)
        }
    }

    const getUser = async (name) => {
        setLoading()
        try{
            const response = await fetch(`https://api.github.com/users/${name}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET_ID}`)
            const data = await response.json()
            
            dispatch({type: GET_USER, payload: data})
        }catch(err){
            console.error(err)
        }
    }

    const getRepos = async (name) => {
        setLoading()
        try{
            const response = await fetch(`https://api.github.com/users/${name}/repos?per_page=5&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET_ID}`)
            const data = await response.json()
            console.log(data);
            
            dispatch({type: GET_REPOS, payload: data})
        }catch(err){
            console.error(err)
        }
    }

    const clearUsers = () => {
        dispatch({type: CLEAR_USERS})
    }

    const setLoading = () => {
        dispatch({type: SET_LOADING})
    }

    const {loading, users, user, repos} = state
    return (
        <GithubContext.Provider value={{search, getUser, getRepos, clearUsers, setLoading, loading, users, user, repos}}>
            {children}
        </GithubContext.Provider>
    )
}