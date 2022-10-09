function tseamAccount(params) {

    let account = params[0];
    let index = 1;
    let command = params[index];
    index++;
    while(command !== 'Play!'){
        if (command.includes('Install')){
            console.log(`We ${command}`);
        } else if (command.includes('Uninstall')){
            console.log(`${command}`);
        } else if (command.includes('Update')){
            console.log(`${command}`);
        } else if (command.includes('Expansion')){
            console.log('We add expansion');
        }
        command = params[index];
        index++;
    }

}

tseamAccount(
    ['CS WoW Diablo',
        'Install LoL',
        'Uninstall WoW',
        'Update Diablo',
        'Expansion CS-Go',
        'Play!']

)