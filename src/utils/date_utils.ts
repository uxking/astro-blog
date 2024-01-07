export const getShortDate = (date: Date) => {
    const shortDate = new Date(date).toLocaleDateString()
    return shortDate
 }
