/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let dmg = 0;
    let prev = timeSeries[0];
    
    for(let i=1; i<timeSeries.length; i++) {
        if(timeSeries[i] < prev + duration) {
            dmg += timeSeries[i] - prev;
        } else {
            dmg += duration;
        }
        prev = timeSeries[i]
    }
    dmg += duration;
    
    
    return dmg;
};