function gladiatorExpenses(lostFightsCount, helmet, sword, shield, armor) {

    let totalPrice = 0;
    let lostSchields = 0;

    for (let lostFight = 1; lostFight <= lostFightsCount; lostFight++) {
        if (lostFight % 2 === 0) {
            totalPrice += helmet;
        }
        if (lostFight % 3 === 0) {
            totalPrice += sword;
        }
        if (lostFight % 2 === 0 && lostFight % 3 === 0) {
            totalPrice += shield;
            lostSchields++;
            if (lostSchields % 2 === 0) {
                totalPrice += armor;
            }
        }
    }
    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
    );