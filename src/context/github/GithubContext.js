import { createContext, useState } from 'react';

const Githubcontext = createContext();

export const GithubProvider = ({children}) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        const response = await fetch('https://api.github.com/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
    }

    return <Githubcontext.Provider value={{users, loading, fetchUsers}}>
        {children}
    </Githubcontext.Provider>
}

export default Githubcontext;