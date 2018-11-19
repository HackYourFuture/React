function changeDateFormat(strDate) {
    const newDate = new Date(strDate);

    const options = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    };

    return newDate.toLocaleDateString('en-US', options);
}

export default changeDateFormat;