function songs(arr) {

    let songsCount = arr.shift();
    let wantedTypeList = arr.pop();

    for (let i = 0; i < songsCount; i++) {
        let currentSong = arr.shift().split('_');
        let typeList = currentSong[0];
        let name = currentSong[1];
        let time = currentSong[2];

        class Songs {
            constructor(type, name, time) {
                this.typeList = type;
                this.name = name;
                this.time = time;
            }
        }

        let newSong = new Songs(typeList, name, time);

        if (newSong.typeList == wantedTypeList) {
            console.log(newSong.name);
        } else if(wantedTypeList == 'all'){
            console.log(newSong.name);
        }

    }
}

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    
);