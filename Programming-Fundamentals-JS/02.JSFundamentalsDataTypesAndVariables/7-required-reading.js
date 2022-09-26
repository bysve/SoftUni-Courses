function requiredReading(pagesToRead, pagesPerHour, days){

    let neededHours = pagesToRead / pagesPerHour;
    let neededDays = neededHours / days;

    console.log(neededDays);
}

requiredReading(432,
    15 ,
    4     
    );
