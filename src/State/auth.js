import { auth } from '../firebaseConfig'


const LOG_IN = 'auth/LOG_IN'
const LOG_OUT = 'auth/LOG_OUT'


export const initAuthChangeListeningAction = () => (dispatch, getState) => {
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







const logInAction = () => ({
    type: LOG_IN
})

const logOutAction = () => ({
    type: LOG_OUT
})




const INITIAL_STATE = {}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                isUserLoggedIn: true
            }
        case LOG_IN:
            return {
                ...state,
                isUserLoggedIn: false
            }
        default:
            return state
    }
}

