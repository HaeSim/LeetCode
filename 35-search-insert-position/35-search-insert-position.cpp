class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        
        std::ios::sync_with_stdio(false);
        
        int s = 0, e = nums.size() - 1;
        int mid;
        while(s < e)
        {
            mid = (s+e)/2;
            
            if(target == nums[mid])
                return mid;
            
            if(target < nums[mid])
                e = mid-1;
            else
                s = mid+1;
        }
        if(target > nums[s]) return s+1;
        else return s;
    }
};