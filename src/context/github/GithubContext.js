import { createContext, useReducer } from 'react';
import GithubReducer from './GithubReducer';

const Githubcontext = createContext();

export const GithubProvider = ({children}) => {
    
    const initialState = {
        users: [],
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

    /*
    const fetchUsers = async () => {
        setLoading();
        const response = await fetch('https://api.github.com/users');
        const data = await response.json();
        
        dispatch({
            action: 'GET_USERS',
            payload: data
        });
    }
    */

    const setLoading = () => dispatch({ type: 'SET_LOADING' })

    return <Githubcontext.Provider value={{
        users: state.users, 
        loading: state.loading,
        searchUsers,
        clearUsers
    }}>
        {children}
    </Githubcontext.Provider>
}

export default Githubcontext;