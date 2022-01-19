class Solution {
public:
    int climbStairs(int n) {
        int Array[46];
        Array[0] = 0;
        Array[1] = 1;
        Array[2] = 2;
        for(int i=3; i<= n; i++)
            Array[i] = Array[i-1] + Array[i-2];
        
        return Array[n];
    }
};