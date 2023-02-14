const department = 'Construction';
const user = 'Denis';
const salary = 2000;
const position = 'engineer';
const departments = [];

departments[department] = [];
departments[department].push({user, salary, position})

for (const department in departments) {
    console.log(department);
    console.log(...departments[department]);
}