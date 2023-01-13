function dayOfWeek(number) {

    let daysOfWeek =
        ['Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
        ];

    if (number > 0 && number < 8) {
        console.log(daysOfWeek[number - 1]);
    } else {
        console.log('Invalid day!');
    }

}

dayOfWeek(0);