class Solution {
public:
    int fib(int n) {
        vector<int> v(31);
        for(int i=0; i< n+1; i++)
        {
            if(i == 0) v[0] = 0;
            else if(i==1) v[1] = 1;
            else v[i] = v[i-2] + v[i-1];
        }
        return v[n];
    }
};