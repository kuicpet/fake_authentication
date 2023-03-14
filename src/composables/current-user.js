import store from "../store"

const currentUser = () => {
    return store.state.loggedIn
}

export default currentUser