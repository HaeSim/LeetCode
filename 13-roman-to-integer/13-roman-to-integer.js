/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
    let sum = 0;
    let memo = 0;
    
    /*
    const map = new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000]
    ]);
    */
    const obj = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    
    for (let c of s) {
        const cur = obj[c];
        
        if (!memo) {
            memo = cur;
        } else if (cur <= memo) {
            sum += memo;
            memo = cur; 
        } else {
            sum += cur - memo;
            memo = 0;
        }
    }

    sum += memo;

    return sum;
};