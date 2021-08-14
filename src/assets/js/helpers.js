
export const dateConvert = (start_date) => {
    let newDate = new Date(start_date)
    return newDate.toDateString();
}

export const formatAMPM = (date) => {
    let newDate = new Date(date),
    hours = newDate.getHours(),
    minutes = newDate.getMinutes(),
    ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let time = hours + ':' + minutes + ' ' + ampm;
    return time;
}
