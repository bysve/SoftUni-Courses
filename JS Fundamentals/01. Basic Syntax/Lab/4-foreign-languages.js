// Write a program, which prints the language, that a given country speaks. You can receive only the following combinations: 
// •	English is spoken in England and USA;
// •	Spanish is spoken in Spain, Argentina, and Mexico;
// •	For the others, we should print "unknown";
// Input
// You will receive a single country name.
// Output
// Print the language, which the country speaks, or if it is unknown for your program, print "unknown".
// Examples
// Input	Output		Input	Output
// USA	    English		Germany	unknown

function foreignLanguages(country) {

    let language = '';
    switch (country) {
        case 'England':
        case 'USA':
            language = 'English';
            break;
        case 'Spain':
        case 'Argentina':
        case 'Mexico':
            language = 'Spanish'
            break;
        default:
            language = 'unknown'
            break;
    }
    console.log(language);
}
foreignLanguages('USA');
foreignLanguages('Germany');