/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
    if (x < 0) {
        return false;
    }
    if (x === 0) {
        return true;
    }
    const len = Math.ceil(Math.log10(x + 1));
    const arr = [];
    for (let i= len - 1; i >= 0; i--) {
        const idx = 10**i;
        arr.push(Math.floor(x / idx));
        x = x % idx;
    }
    for (let i= 0; i < len / 2; i++) {
        if(arr[i] !== arr[(len - 1) - i]) {
            return false;
        }
    }
    return true;
};