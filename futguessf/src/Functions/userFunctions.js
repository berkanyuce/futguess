// userFunctions.js

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
    setLoggedInUser(newUser); // Kullanıcıyı otomatik olarak giriş yapmış say
    return newUser;
  };
  
  const loginUser = (email, password) => {
    const users = getUsersFromLocalStorage();
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      setLoggedInUser(user); // Kullanıcıyı otomatik olarak giriş yapmış say
    }
    return user;
  };
  
  
  const isAdminUser = (userId) => {
    const users = getUsersFromLocalStorage();
    const user = users.find((u) => u.id === userId);
    return user && user.isAdmin;
  };
  
  const getUsersFromLocalStorage = () => {
    const usersString = localStorage.getItem('users');
    return JSON.parse(usersString) || [];
  };
  
  const setUsersToLocalStorage = (users) => {
    localStorage.setItem('users', JSON.stringify(users));
  };
  
  const setLoggedInUser = (user) => {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
  };
  
  export { registerUser, loginUser, isAdminUser };
  
  