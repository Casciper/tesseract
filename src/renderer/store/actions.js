import axios from "axios";
const requestUrl = 'http://localhost:1031';

const setHeaders = () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`
}

const removeHeaders = () => {
    axios.defaults.headers.common['Authorization'] = ''
}

const login = ({ commit, dispatch }, data) => {
    commit('toggleLoading')
    return axios({
        method: 'POST',
        url: `${requestUrl}/api/login`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(data)
    })
        .then(res => {
            if (res.data.user) {
                console.log(1)
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        commit('changeAuthenticated')
                        commit('changeToken', res.data.token)
                        commit('setUserInfo', res.data.user)
                        localStorage.token = res.data.token
                        setHeaders()
                        commit('toggleLoading')
                        resolve();
                    }, 500)
                });
            }
        })
        .catch(error => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('toggleLoading')
                    resolve();
                }, 500)
            });
        });
}

const logout = ({ commit, dispatch }) => {
    commit('toggleLoading')
    return axios({
        method: 'POST',
        url: `${requestUrl}/api/logout`,
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(res => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('changeAuthenticated')
                    commit('changeToken', '')
                    commit('setUserInfo', {})
                    localStorage.token = ''
                    removeHeaders()
                    commit('toggleLoading')
                    resolve();
                }, 500)
            });
        })
        .catch(error => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('toggleLoading')
                    resolve();
                }, 500)
            });
        });
}

export default {
    login,
    logout
}
