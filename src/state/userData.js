const TEXT_CHANGE = 'userData/TEXT_CHANGE'
export const textChangeAction = newTextValue => ({
    type: TEXT_CHANGE,
    newTextValue
})
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

