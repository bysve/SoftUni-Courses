function comapnyUsers(input) {

    let allCompanies = {};

    input.forEach(element => {
        let [company, id] = element.split(' -> ');
        let employees = []
        if (!allCompanies.hasOwnProperty(company)) {
            allCompanies[company] = employees;
        }
        allCompanies[company].push(id);
    });

    let sorted = Object.entries(allCompanies).sort((a, b) => a[0].localeCompare(b[0]));

    sorted.forEach(company => {
        console.log(company[0]);
        let allIds = company[1];

        let uniqueIds = new Set(allIds);

        for (const id of uniqueIds) {
            console.log(`-- ${id}`);
        }
    })
}

comapnyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);