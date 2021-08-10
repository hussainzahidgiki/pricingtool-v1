export function reducer(state, action) {
    switch (action.type) {
        case "SET_REGION":
            return {
                ...state,
                reg: action.text
            }
        case "SET_METER":
            return {
                ...state,
                meter: action.text
            }
        case "SET_CONTRACTLENGTH":
            return {
                ...state,
                contractlength: action.text
            }
        case "SUBMIT_FIELDS":
            return {
                ...state,
                prices: action.prices
            }
        case "SET_COMMISSION":
            return {
                ...state,
                commission: action.text
            }
        default:
            return state
    }
}