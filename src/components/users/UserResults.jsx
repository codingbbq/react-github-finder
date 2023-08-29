import { useContext } from 'react';
import UserItem from './UserItem';
import Loader from '../layout/Loader';
import Githubcontext from '../../context/github/GithubContext';

function UserResults() {
    
    const { users, loading } = useContext(Githubcontext);

    if(!loading) {
        return (
            <div className='container mx-auto'>
                <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 mg:grid-cols-2 mb-8">
                    {users.map((user) => <UserItem key={user.login} user={user} />)}
                </div>
            </div>
        )
    } else {
        return (
            <Loader />
        )
    }
}

export default UserResults;