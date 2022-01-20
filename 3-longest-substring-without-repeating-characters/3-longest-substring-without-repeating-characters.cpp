class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        if(s.size() == 1) return 1;
        int maxV = -1;
        
        int start = 0;
        map<char, int> mymap;
        for(int i=0; i<s.size(); i++)
        {
            if(mymap.count(s[i]) == 0)
            {
                mymap[s[i]] = i;
            }
            else
            {
                maxV = max(maxV, i - start);
                if(start <= mymap[s[i]])
                {
                    start = mymap[s[i]] + 1;                   
                }
                
                mymap[s[i]] = i;
            }
        }
        maxV = max(maxV, (int)s.size() - start);        
        return max(0, maxV);
    }
};