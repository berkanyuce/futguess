
const registerUser = (username, email, password) => {
    const users = getUsersFromLocalStorage();
    const newUser = {
      id: users.length + 1,
      username,
      email,
      password,
      balance: 0,
      isAdmin: false,
    };
    users.push(newUser);
    setUsersToLocalStorage(users);
    setLoggedInUser(newUser);
    return newUser;
  };
  
  const loginUser = (email, password) => {
    const users = getUsersFromLocalStorage();
    const user = users.find((u) => u.email === email && u.password === password);
  
    if (user) {
      setLoggedInUser(user); 
    }
  
    return user;
  };
  
  
  const getUserById = (userId) => {
    const users = getUsersFromLocalStorage();
    return users.find((u) => u.id === userId);
  };
  
  const getUsersFromLocalStorage = () => {
    const usersString = localStorage.getItem('users');
    const users = usersString ? JSON.parse(usersString) : [];
  
    if (!Array.isArray(users)) {
      return [];
    }
  
    return users;
  };
  
  
  const setUsersToLocalStorage = (users) => {
    localStorage.setItem('users', JSON.stringify(users));
  };
  
  const setLoggedInUser = (user) => {
    try {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
    } catch (error) {
      console.error('Error setting loggedInUser to localStorage:', error);
    }
  };
  
  
  
  const getLoggedInUser = () => {
    const loggedInUserString = localStorage.getItem('loggedInUser');
    return JSON.parse(loggedInUserString) || null;
  };
  
  const updateUserBalance = (userId, newBalance) => {
    const users = getUsersFromLocalStorage();
    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...user, balance: newBalance } : user
    );
  
    setUsersToLocalStorage(updatedUsers);
    setLoggedInUser({ ...getLoggedInUser(), balance: newBalance });
  };

  export { registerUser, loginUser, getUserById, getUsersFromLocalStorage, setUsersToLocalStorage, setLoggedInUser, getLoggedInUser,updateUserBalance };
  