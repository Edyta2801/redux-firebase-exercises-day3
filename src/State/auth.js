import { auth, googleProvider } from '../firebaseConfig'


const LOG_IN = 'auth/LOG_IN'
const LOG_OUT = 'auth/LOG_OUT'


export const initAuthChangeListeningAsyncAction = () => (dispatch, getState) => {
    auth.onAuthStateChanged(
        // user is an obj with users data or null when not logged in
        user => {
            if (user) {
                dispatch(logInAction())
            } else {
                dispatch(logOutAction())
            }
        }
    )
}

export const logOutAsyncAction = () => (dispatch, getState) => {
    auth.signOut()
}

export const logInByGoogleAsyncAction = () => (dispatch, getState) => {
    auth.signInWithPopup(googleProvider)
}

export const logInByClickAsyncAction = (email, password) => (dispatch, getState) => {
    auth.signInWithEmailAndPassword(email, password)
        .catch(error => {
            alert('Something is wrong! Check console for error details!')
            console.log(error)
        })
}



const logInAction = () => ({
    type: LOG_IN
})

const logOutAction = () => ({
    type: LOG_OUT
})




const INITIAL_STATE = {
    isUserLogIn: false,
    email: 'dupa',
    password: 'dupa'
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                isUserLoggedIn: true
            }
        case LOG_OUT:
            return {
                ...state,
                isUserLoggedIn: false
            }
        default:
            return state
    }
}

