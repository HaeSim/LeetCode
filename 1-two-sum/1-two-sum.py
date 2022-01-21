class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        map = dict()
        
        for i in range(len(nums)):
            if nums[i] in map.keys():
                return [map[nums[i]],i]
            else:
                map[target-nums[i]] = i
       
        