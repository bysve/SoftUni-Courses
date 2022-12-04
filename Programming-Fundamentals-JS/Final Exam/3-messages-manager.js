function messagesManager(input) {

    let capacity = Number(input.shift());

    let users = {};

    let line = input.shift();

    while (line !== 'Statistics') {

        let lineData = line.split('=');
        let action = lineData.shift();

        switch (action) {
            case 'Add':
                let user = lineData[0];
                if (!users.hasOwnProperty(user)) {
                    let sent = Number(lineData[1]);
                    let received = Number(lineData[2]);

                    users[user] = {
                        'sent': sent,
                        'received': received,
                    }
                }
                break;

            case 'Message':
                let sender = lineData[0];
                let receiver = lineData[1];

                if (users.hasOwnProperty(sender) && users.hasOwnProperty(receiver)) {
                    users[sender]['sent']++;
                    users[receiver]['received']++;
                    if (users[sender]['sent'] + users[sender]['received'] >= capacity) {
                        console.log(`${sender} reached the capacity!`);
                        delete users[sender];
                    }
                    if (users[receiver]['received'] + users[receiver]['sent'] >= capacity) {
                        console.log(`${receiver} reached the capacity!`);
                        delete users[receiver];
                    }
                }

                break;
            case 'Empty':
                let userToDelete = lineData[0];
                if (userToDelete === 'All') {
                    for (const user in users) {
                        delete users[user];
                    }
                } else {
                    delete users[userToDelete];
                }

                break;
        }

        line = input.shift();
    }

    let usersCount = 0;

    for (const user in users) {
        usersCount++;
    }

    console.log(`Users count: ${usersCount}`);

    for (const user in users) {

        let allMessages = users[user]['sent'] + users[user]['received'];

        console.log(`${user} - ${allMessages}`);
    }
}

messagesManager(["12",
"Add=Bonnie=3=5",
"Add=Johny=4=4",
"Empty=All",
"Add=Bonnie=3=3",
"Statistics"])

