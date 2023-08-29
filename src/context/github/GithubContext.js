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

    return <Githubcontext.Provider value={{
        ...state,
        dispatch
    }}>
        {children}
    </Githubcontext.Provider>
}

export default Githubcontext;