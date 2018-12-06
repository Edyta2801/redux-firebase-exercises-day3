import { database } from '../firebaseConfig'

const TEXT_CHANGE = 'userData/TEXT_CHANGE'

export const textChangeAction = newTextValue => ({
    type: TEXT_CHANGE,
    newTextValue
})

export const saveTextToDbAsyncAction = () => (dispatch, getState) => {
    const {
        userData: { text },
        auth: { user: { uid: uuid } }
    } = getState()
    // above is the same that below only using destructurization
    // const text = getState().userData.text
    // const uuid = getState().auth.user.uid

    database.ref(`jfddl6/users/${uuid}`).set({
        text
    })
}

export const loadTextFromDbAsyncAction = () => (dispatch, getState) => {
    const uuid = getState().auth.user.uid

    database.ref(`jfddl6/users/${uuid}/text`).once(
        'value',
        snapshot => {
            dispatch(
                textChangeAction(snapshot.val() || '')
            )
        }
    )
}

const INITIAL_STATE = {
    text: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TEXT_CHANGE:
            return {
                ...state,
                text: action.newTextValue
            }
        default:
            return state
    }
}