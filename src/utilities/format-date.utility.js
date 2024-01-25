export const FormatDate = (date) => {
    return `${date.toLocaleDateString('en-US',{ month: 'short'})} ${date.getDate()}`
}