/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let minimum = new Array(cost.length).fill(0);
    
    minimum[0] = cost[0];
    minimum[1] = cost[1];
    
    for(let i in cost) {
        if(i === '0' || i === '1') continue;
            minimum[i] = Math.min(minimum[i-1], minimum[i-2]) + cost[i];
    }
    
    
    return Math.min(minimum[cost.length-1], minimum[cost.length-2]);
};