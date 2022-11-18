function matchDates(input) {

    let string = input.shift();

    let regExp = /(?<day>\d{2})([.\-\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g;

    let data = regExp.exec(string);

    while (data) {
        let day = data.groups['day'];
        let month = data.groups['month'];
        let year = data.groups['year'];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);

        data = regExp.exec(string);
    }

}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);