import { createContext, useReducer } from 'react';
import GithubReducer from './GithubReducer';

const Githubcontext = createContext();

export const GithubProvider = ({children}) => {
    
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    };

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    const searchUsers = async (text) => {
        setLoading();
        const params = new URLSearchParams({
            q: text
        });

        const response = await fetch(`https://api.github.com/search/users?${params}`);
        const { items }  = await response.json();

        dispatch({
            type: 'GET_USERS',
            payload: items
        });
    }

    const clearUsers = () => {
        dispatch({
            type: 'CLEAR_USERS'
        });
    }

    // Get a Single User
    const getUser = async (login) => {
        setLoading();
        const response = await fetch(`https://api.github.com/users/${login}`);
        const data = await response.json();

        if(data.status === 404) {
            window.location = '/notfound';
        } else {
            dispatch({
                type: 'GET_USER',
                payload: data
            });
        }       
    }

    // Get user repos
    const getUserRepos = async (username) => {
        setLoading();
        
        const params = new URLSearchParams({
            sort: 'created',
            per_page: 10
        });

        const response = await fetch(`https://api.github.com/users/${username}/repos?${params}`);
        const data  = await response.json();

        dispatch({
            type: 'GET_REPOS',
            payload: data
        });
    }
    

    const setLoading = () => dispatch({ type: 'SET_LOADING' })

    return <Githubcontext.Provider value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
    }}>
        {children}
    </Githubcontext.Provider>
}

export default Githubcontext;