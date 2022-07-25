

export default {
    getLoggedInUser
}

const LOGGED_USER_KEY = 'loggedInUser'


function getLoggedInUser() {
    let user = JSON.parse(sessionStorage.getItem(LOGGED_USER_KEY) || null)

    if(!user) {
        user = {
            fullname: 'mockUser',
            imgUrl: 'https://robohash.com/fofof',
            _id: 'u303'
        }
        sessionStorage.setItem(LOGGED_USER_KEY, JSON.stringify(user))
    }

    return user
}