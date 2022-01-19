class Solution {
public:
    int tribonacci(int n) {
        vector<int> v;
        for(int i=0; i < n+1; i++)
        {
            if(i == 0) v.push_back(0);
            else if( i == 1 || i == 2) v.push_back(1);
            else v.push_back(v[i-1]+v[i-2]+v[i-3]);
        }
        return v[n];
    }
};