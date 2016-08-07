/*eslint-disable */
export const sampleEnhancer = store => next => action => {
    console.log(`Action type: ${action.type}, action payload: ${action.payload}`)
        return next(action)
}
/*eslint-enable */
