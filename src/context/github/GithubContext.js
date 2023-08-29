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

    const clearUsers = () => {
        dispatch({
            type: 'CLEAR_USERS'
        });
    }

    const setLoading = () => dispatch({ type: 'SET_LOADING' })

    return <Githubcontext.Provider value={{
        ...state,
        dispatch,
        clearUsers
    }}>
        {children}
    </Githubcontext.Provider>
}

export default Githubcontext;