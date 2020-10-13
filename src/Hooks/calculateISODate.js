export function calculateISO(date){
    var timezoneOffset = date.getMinutes() + date.getTimezoneOffset();
    var timestamp = date.getTime() + timezoneOffset * 1000;
    var correctDate = new Date(timestamp);

    correctDate.setUTCHours(0, 0, 0, 0);

    return correctDate.toISOString().split('.')[0]+"Z";
}

