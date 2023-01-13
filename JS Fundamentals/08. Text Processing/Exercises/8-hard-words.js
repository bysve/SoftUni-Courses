function wordFiller(arr) {

    let words = arr.pop().sort((a, b) => b.length - a.length);
    let newString = arr.toString();
    let newStringArray = arr.toString().split(' ');

    for (const word of words) {
        for (const el of newStringArray) {
            if (el.startsWith('_') && el.endsWith('_')) {
                if (el.length === word.length) {
                    newString = newString.replace(el, word)
                }
            }
            if (el.startsWith('_') && !el.endsWith('_')) {
                let hole = el.slice(0, el.length - 1);
                if (hole.length === word.length) {
                    newString = newString.replace(hole, word)
                }
            }
        }
    }

    console.log(newString);
}

wordFiller(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
);