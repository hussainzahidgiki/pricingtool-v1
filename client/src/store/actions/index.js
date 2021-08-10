export function setField(action, ip) {
    return {
        type: action,
        text: ip
    }
}

export function getQuote(result) {
    return {
        type: "SUBMIT_FIELDS",
        prices: result
    }
}
