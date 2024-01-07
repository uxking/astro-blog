export const getShortDate = (date) => {
    const shortDate = new Date(date).toLocaleDateString()
    return shortDate
 }
