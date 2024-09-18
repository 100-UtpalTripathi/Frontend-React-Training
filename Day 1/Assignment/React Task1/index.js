async function getUserById(id) {
    try {
        const response = await fetch(`https://65abad15fcd1c9dcffc6d0f3.mockapi.io/api/getUsers/user/${id}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const user = await response.json(); // Expecting a single user object
        return user; // Return the user directly
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error; // Rethrow for further handling
    }
}

getUserById("8").then(user => {
    if (user) {
        console.log('User found:', user.name);
    } else {
        console.log('User not found');
    }
}).catch(error => {
    console.error('Error occurred while getting user:', error);
});
