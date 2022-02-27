import math
height = [192, 122, 188, 145, 126, 165, 102, 154]

def ct_percentile(height, percent): size = len(height)
return sorted(height)[int(math.ceil((size*percent) /100)) -1 ]

print ct_percentile(height, 70)