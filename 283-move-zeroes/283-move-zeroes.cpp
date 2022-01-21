class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        
        int start = 0;
        while(start < (int)nums.size())
        {
            if(nums[start] != 0)
            {
                start++;
                continue;
            }
            
            int i;
            for(i=start+1; i < nums.size(); i++)
            {
                if(nums[i] != 0 && nums[start] == 0)
                {
                    swap(nums[start], nums[i]);   
                    start++;
                    break;
                }
            }
            if(i == nums.size()) break;
        }
    }
};