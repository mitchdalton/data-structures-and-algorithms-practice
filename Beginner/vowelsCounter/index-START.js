/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


function vowelsCounter(text) {
    return text.match(/[aeiouAEIOU]/g).length || 0
}



module.exports = vowelsCounter;
