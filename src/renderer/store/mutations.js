const toggleLoading = (state) => {
    state.loading = !state.loading
}

const changeToken = (state, data) => {
    state.token = data
}

const changeAuthenticated = (state) => {
    state.isAuthenticated = !state.isAuthenticated
}

const setUserInfo = (state, data ) => {
    state.user.email = data.email
    state.user.name = data.name
}

export default {
    toggleLoading,
    changeToken,
    changeAuthenticated,
    setUserInfo
}