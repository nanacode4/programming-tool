prices = [10,1,5,6,7,1]
        l,r = 0,1
        maxP = 0
        while(r<len(prices)):
            if(prices[r]>prices[l]):
                profit = prices[r]-prices[l]
                maxP = max(maxP,profit)
            else:
                l = r
            r +=1
        return max