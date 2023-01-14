function dayOfweek(string) {

    let dayOfweek = 'error';

    switch (string) {
        case 'Monday': dayOfweek = 1; break;
        case 'Tuesday': dayOfweek = 2; break;
        case 'Wednesday': dayOfweek = 3; break;
        case 'Thursday': dayOfweek = 4; break;
        case 'Friday': dayOfweek = 5; break;
        case 'Saturday': dayOfweek = 6; break;
        case 'Sunday': dayOfweek = 7; break;
    }

    console.log(dayOfweek);
}

dayOfweek('Monday');
dayOfweek('Friday');
dayOfweek('Invalid');