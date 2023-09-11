const capitalize = function(string){
    let firstLetter = string.slice(0, 1);
    firstLetter = firstLetter.toUpperCase();
    let rest = string.slice(1);
    let result = firstLetter + rest;
    return result;
}

module.exports = capitalize;