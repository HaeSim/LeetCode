class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        before = -101
        inx = 0
        for i in range(len(nums)):
            if nums[i] == before:
                continue
            else:
                before = nums[i]
                nums[inx] = nums[i]
                inx +=1
                
        return inx      
                