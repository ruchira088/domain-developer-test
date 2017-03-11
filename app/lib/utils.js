export const includesError = (errorList, fieldName) => (
    errorList.find(({name}) => name == fieldName) != undefined
)
