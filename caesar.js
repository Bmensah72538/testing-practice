const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const findLetter = function(char, offset) {
    let offsetIndex, index, result;
    index = alphabet.indexOf(char);
    offsetIndex = index + offset;
    if(offsetIndex > 25) {
        offsetIndex = offsetIndex - 26;
    }
    return offsetIndex;
}

const caesar = function(string, offset){
    output = "";
    for(i=0;i<string.length;i++) {
        let current = string[i];
        let replaced = alphabet[findLetter(current, offset)];
        output += replaced;
    }

    return output;

}

module.exports = caesar;