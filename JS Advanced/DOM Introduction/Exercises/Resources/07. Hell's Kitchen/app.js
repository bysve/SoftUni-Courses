function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   const input = document.querySelector("#inputs>textarea");
   const bestRestaurantP = document.querySelector("#bestRestaurant>p");
   const workersP = document.querySelector("#outputs>#workers>p");

   function onClick() {

      let array = JSON.parse(input.value);
      let restaurant = {};
//["PizzaHut - Peter 500, George 300, Mark 800",
//"TheLake - Bob 1300, Joe 780, Jane 660"]

      array.forEach((line) => {
         const tokens = line.split(' - ');
         const name = tokens[0];
         const workersArray = tokens[1].split(', ');
         let workers = [];

         for (const worker of workersArray) {
            const workerTokens = worker.split(' ');
            const salary = Number(workerTokens[1]);
            workers.push({ name: workerTokens[0], salary })
         }

         if (restaurant[name]) {
            workers = workers.concat(restaurant[name].workers);
         }

         workers.sort((worker1, worker2) => worker2.salary - worker1.salary);
         let bestSalary = workers[0].salary;
         let averageSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;

         restaurant[name] = {
            workers,
            averageSalary,
            bestSalary
         };
      });

      let bestRestSalary = 0;
      let best = undefined;
     
      for (const name in restaurant) {
         if (bestRestSalary < restaurant[name].averageSalary) {
            bestRestSalary = restaurant[name].averageSalary;
            best = { name, ...restaurant[name] };
         }
      }


      bestRestaurantP.textContent = `Name: ${best.name} Average Salary: ${best.averageSalary.toFixed(2)} Best Salary: ${best.bestSalary.toFixed(2)}`

      let workersResult = [];

      best.workers.forEach((worker) => {
         workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`)
      });

      workersP.innerText = workersResult.join(' ');
   }
}
