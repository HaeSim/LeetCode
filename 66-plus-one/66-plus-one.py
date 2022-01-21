class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        
        string = ""
        for val in digits:
            string += str(val)
        str1= str(int(string) + 1)
        list = []
        for i in str1:
            list.append(int(i))
        
        return list