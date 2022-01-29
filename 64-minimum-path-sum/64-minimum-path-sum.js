/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const dp = new Array();
    for(let i=0; i<grid.length; i++) {
        dp.push(new Array(grid[0].length).fill(0))
    }
    dp[0][0] = grid[0][0];
    
    // 1. basic row sum
    for(let i=1; i<dp.length; i++) {
        dp[i][0] = dp[i-1][0] + grid[i][0];
    }
    
    // 2. basic col sum
    for(let j=1; j<dp[0].length; j++) {
        dp[0][j] = dp[0][j-1] + grid[0][j];
    }
    
    // 3. minimum sum path
    for(let i=1; i<dp.length; i++) {
        for(let j=1; j<dp[0].length; j++) {
            dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
        }
    } 
    
    return dp.pop().pop();
};