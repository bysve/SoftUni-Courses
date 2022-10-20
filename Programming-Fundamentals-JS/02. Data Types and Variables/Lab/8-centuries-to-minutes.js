// Write a program that receives a number of centuries and converts it to years, days, hours, and minutes.

function centuriesToMinutes(centuries){

    let totalYears = centuries * 100;
    let totalDays = Math.floor(totalYears * 365.2422);
    let totalHours = totalDays * 24;
    let totalMinutes = totalHours * 60;

    console.log(`${centuries} centuries = ${totalYears} years = ${totalDays} days = ${totalHours} hours = ${totalMinutes} minutes`);
}

centuriesToMinutes(1);
