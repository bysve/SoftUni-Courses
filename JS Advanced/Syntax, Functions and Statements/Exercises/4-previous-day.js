function previousDay(year, month, day) {

    const nextDay = new Date(year, month - 1, day - 1);

    const y = nextDay.getFullYear();
    const m = nextDay.getMonth() + 1;
    const d = nextDay.getDate();

    console.log(`${y}-${m}-${d}`);
}

previousDay(2016, 9, 30);
previousDay(2015, 5, 10);

//2016-9-29
//2015-5-9
