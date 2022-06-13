export const convertToDate = (date: Date): string => {
    const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const MONTHS_NAME = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let day = WEEK_DAYS[date.getDay()],
        month = MONTHS_NAME[date.getMonth()],
        todayDate = date.getDate()

    return `${day}, ${todayDate} ${month}`
}

export const convertMeters = (meters: number, convertTo: string): number => {
    switch (convertTo.toLowerCase()) {
        case "k":
            return meters / 1000
        case 'ml':
            return meters / 1609.34
        default:
            return meters;
    }
}

export const convertCelsuis: (value: number) => number = (value) => {
    return value * 1.8 + 32
}
