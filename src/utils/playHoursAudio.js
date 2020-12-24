export const playHoursAudio = () => {
    const hours = new Date().getHours();
    let hoursUrl;
    // eslint-disable-next-line default-case
    switch (hours) {
        case 1 : hoursUrl = '/audio/hours/one.mp3'
            break;
        case 2 : hoursUrl = '/audio/hours/two.mp3'
            break;
        case 3 : hoursUrl = '/audio/hours/three.mp3'
            break;
        case 4 : hoursUrl = '/audio/hours/four.mp3'
            break;
        case 5 : hoursUrl = '/audio/hours/five.mp3'
            break;
        case 6 : hoursUrl = '/audio/hours/six.mp3'
            break;
        case 7 : hoursUrl = '/audio/hours/seven.mp3'
            break;
        case 8 : hoursUrl = '/audio/hours/eight.mp3'
            break;
        case 9 : hoursUrl = '/audio/hours/nine.mp3'
            break;
        case 10 : hoursUrl = '/audio/hours/ten.mp3'
            break;
        case 11 : hoursUrl = '/audio/hours/11.mp3'
            break;
        case 12 : hoursUrl = '/audio/hours/12.mp3'
            break;
        case 13 : hoursUrl = '/audio/hours/13.mp3'
            break;
        case 14 : hoursUrl = '/audio/hours/14.mp3'
            break;
        case 15 : hoursUrl = '/audio/hours/15.mp3'
            break;
        case 16 : hoursUrl = '/audio/hours/16.mp3'
            break;
        case 17 : hoursUrl = '/audio/hours/17.mp3'
            break;
        case 18 : hoursUrl = '/audio/hours/18.mp3'
            break;
        case 19 : hoursUrl = '/audio/hours/19.mp3'
            break;
        case 20 : hoursUrl = '/audio/hours/20.mp3'
            break;
    }

    return new Audio(hoursUrl);
};

export const playHoursValue = () => {
    const hours = new Date().getHours();
    let hoursValueUrl;

    if (hours === 1 || hours === 21) {
        hoursValueUrl = '/audio/values/hour.mp3'
    } else if (hours === 2 || hours === 3 || hours === 4 || hours === 22 || hours === 23 || hours === 24) {
        hoursValueUrl = '/audio/values/hours1.mp3'
    } else {
        hoursValueUrl = '/audio/values/hours2.mp3'
    }

    return new Audio(hoursValueUrl);
}
