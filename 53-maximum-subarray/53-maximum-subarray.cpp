class Solution {
public:
    int maxSubArray(vector<int>& nums) {
     
        if(nums.size() == 1)
            return nums[0];
        
        int sum = nums[0];
        int ans = sum;
        int temp = ans;
        for(int i=1; i < nums.size(); i++)
        {
            sum += nums[i];
            ans = max(nums[i], max(sum, ans));
            
            if(ans == nums[i]) sum = ans;
            
            if(temp == ans && sum < 0)
                sum = 0;
            
            temp = ans;
        }
        return ans;
    }
};