const checkLoggedIn = () => {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    if (username && password)
        return true;
    return null
}

export { checkLoggedIn };