export const searchUsers = async (text) => {
    const params = new URLSearchParams({
        q: text
    });

    const response = await fetch(`https://api.github.com/search/users?${params}`);
    const { items }  = await response.json();

    return items;
}

// Get a Single User
export const getUser = async (login) => {
    const response = await fetch(`https://api.github.com/users/${login}`);
    const data = await response.json();
    return data;     
}

// Get user repos
export const getUserRepos = async (username) => {
    const params = new URLSearchParams({
        sort: 'created',
        per_page: 10
    });

    const response = await fetch(`https://api.github.com/users/${username}/repos?${params}`);
    const data  = await response.json();

    return data;
}

/* Get User and Repos both together */
export const getUserAndRepoData = async (login) => {
    const [userData, repoData] = await Promise.all([
        getUser(login),
        getUserRepos(login)
    ]);

    return {
        user: userData,
        repo: repoData
    }
}