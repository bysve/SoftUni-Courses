function meetings(input) {

    let meetings = {};

    input.forEach(element => {
        let [day, name] = element.split(' ');

        if (!meetings.hasOwnProperty(day)) {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    });

    for (const name in meetings) {
        console.log(`${name} -> ${meetings[name]}`);
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);