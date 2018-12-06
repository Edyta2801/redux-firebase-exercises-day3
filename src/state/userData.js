const TEXT_CHANGE = 'userData/TEXT_CHANGE'




const INITIAL_STATE = {
    text: ''
}

export const textChangeAction = newTextValue => ({
    type: TEXT_CHANGE,
    newTextValue
})


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

