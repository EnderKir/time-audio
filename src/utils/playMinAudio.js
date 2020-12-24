export const playMinAudio = () => {
    const minutes = new Date().getMinutes();
    let minUrl;

    if (minutes <= 10) {
        // eslint-disable-next-line default-case
        switch (minutes) {
            case 1 : minUrl = '/audio/min/one.mp3'
                break;
            case 2 : minUrl = '/audio/min/two.mp3'
                break;
            case 3 : minUrl = '/audio/hours/three.mp3'
                break;
            case 4 : minUrl = '/audio/hours/four.mp3'
                break;
            case 5 : minUrl = '/audio/hours/five.mp3'
                break;
            case 6 : minUrl = '/audio/hours/six.mp3'
                break;
            case 7 : minUrl = '/audio/hours/seven.mp3'
                break;
            case 8 : minUrl = '/audio/hours/eight.mp3'
                break;
            case 9 : minUrl = '/audio/hours/nine.mp3'
                break;
            case 10 : minUrl = '/audio/hours/ten.mp3'
                break;
            case 11 : minUrl = '/audio/hours/11.mp3'
                break;
            case 12 : minUrl = '/audio/hours/12.mp3'
                break;
            case 13 : minUrl = '/audio/hours/13.mp3'
                break;
            case 14 : minUrl = '/audio/hours/14.mp3'
                break;
            case 15 : minUrl = '/audio/hours/15.mp3'
                break;
            case 16 : minUrl = '/audio/hours/16.mp3'
                break;
            case 17 : minUrl = '/audio/hours/17.mp3'
                break;
            case 18 : minUrl = '/audio/hours/18.mp3'
                break;
            case 19 : minUrl = '/audio/hours/19.mp3'
                break;
            case 20 : minUrl = '/audio/hours/20.mp3'
                break;
        }

        return new Audio(minUrl);
    } else {
        const min = `${minutes}`.split('');
        const first = +min[0];
        const second = +min[1];

        if (second === 0) {
            // eslint-disable-next-line default-case
            switch (first) {
                case 1 : minUrl = '/audio/hours/ten.mp3'
                    break;
                case 2 : minUrl = '/audio/min/20.mp3'
                    break;
                case 3 : minUrl = '/audio/min/30.mp3'
                    break;
                case 4 : minUrl = '/audio/min/40.mp3'
                    break;
                case 5 : minUrl = '/audio/min/50.mp3'
                    break;
            }

             return new Audio(minUrl);
        } else if (minutes <= 19) {
            // eslint-disable-next-line default-case
            switch (minutes) {
                case 1 : minUrl = '/audio/min/one.mp3'
                    break;
                case 2 : minUrl = '/audio/min/two.mp3'
                    break;
                case 3 : minUrl = '/audio/hours/three.mp3'
                    break;
                case 4 : minUrl = '/audio/hours/four.mp3'
                    break;
                case 5 : minUrl = '/audio/hours/five.mp3'
                    break;
                case 6 : minUrl = '/audio/hours/six.mp3'
                    break;
                case 7 : minUrl = '/audio/hours/seven.mp3'
                    break;
                case 8 : minUrl = '/audio/hours/eight.mp3'
                    break;
                case 9 : minUrl = '/audio/hours/nine.mp3'
                    break;
                case 11 : minUrl = '/audio/hours/11.mp3'
                    break;
                case 12 : minUrl = '/audio/hours/12.mp3'
                    break;
                case 13 : minUrl = '/audio/hours/13.mp3'
                    break;
                case 14 : minUrl = '/audio/hours/14.mp3'
                    break;
                case 15 : minUrl = '/audio/hours/15.mp3'
                    break;
                case 16 : minUrl = '/audio/hours/16.mp3'
                    break;
                case 17 : minUrl = '/audio/hours/17.mp3'
                    break;
                case 18 : minUrl = '/audio/hours/18.mp3'
                    break;
                case 19 : minUrl = '/audio/hours/19.mp3'
                    break;
            }
            return new Audio(minUrl);
        } else {
            let firstUrl, secondUrl;

            // eslint-disable-next-line default-case
            switch (first) {
                case 1 : firstUrl = '/audio/hours/ten.mp3'
                    break;
                case 2 : firstUrl = '/audio/min/20.mp3'
                    break;
                case 3 : firstUrl = '/audio/min/30.mp3'
                    break;
                case 4 : firstUrl = '/audio/min/40.mp3'
                    break;
                case 5 : firstUrl = '/audio/min/50.mp3'
                    break;
            }

            // eslint-disable-next-line default-case
            switch (second) {
                case 1 : secondUrl = '/audio/min/one.mp3'
                    break;
                case 2 : secondUrl = '/audio/min/two.mp3'
                    break;
                case 3 : secondUrl = '/audio/hours/three.mp3'
                    break;
                case 4 : secondUrl = '/audio/hours/four.mp3'
                    break;
                case 5 : secondUrl = '/audio/hours/five.mp3'
                    break;
                case 6 : secondUrl = '/audio/hours/six.mp3'
                    break;
                case 7 : secondUrl = '/audio/hours/seven.mp3'
                    break;
                case 8 : secondUrl = '/audio/hours/eight.mp3'
                    break;
                case 9 : secondUrl = '/audio/hours/nine.mp3'
                    break;
            }

            return [new Audio(firstUrl), new Audio(secondUrl)];
        }
    }

};

export const playMinValue = () => {
    const minutes = new Date().getMinutes();
    let minValueUrl;

    if (minutes === 1 || minutes === 21 || minutes === 31 || minutes === 41 || minutes === 51) {
        minValueUrl = '/audio/values/min.mp3';
    } else if (minutes === 2 || minutes === 3 || minutes === 4 || minutes === 22 || minutes === 23 || minutes === 24 || minutes === 32 || minutes === 33 || minutes === 34 || minutes === 42 || minutes === 43 || minutes === 44 || minutes === 52 || minutes === 53 || minutes === 54) {
        minValueUrl = '/audio/values/mins1.mp3';
    } else {
        minValueUrl = '/audio/values/mins2.mp3';
    }

    return new Audio(minValueUrl);
}
