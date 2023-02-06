function fromJSONToHTMLTable(input){

    const result = [];
    result.push('<table>')
    const data = JSON.parse(input);
    
    const properties = Object.keys(data[0]);
    result.push(`   <tr>${properties.map(p => `<th>${p}</th>`).join('')}</tr>`);
    
    for (const value of data) {
        result.push(`   <tr>${properties.map(p => `<td>${value[p]}</td>`).join('')}</tr>`);
    }
    
    
    result.push('</table>')
    
    return result.join('\n');
}

console.log(fromJSONToHTMLTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`
));