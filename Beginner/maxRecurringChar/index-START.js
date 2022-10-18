/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/



function maxRecurringChar(text) {
    let charMap = {}
    for (let e of text) {
        charMap.hasOwnProperty(e) ? charMap[e]++ : charMap[e] = 1
    }
    return Object.entries(charMap).sort((a,b) => b[1] - a[1])[0][0]
}

module.exports = maxRecurringChar;