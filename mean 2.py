import statistics as stat
def print_value(str, name, num) :
    print str % (name, num)
height = [150, 163, 145, 140, 157, 151, 140, 149]
str = "The %s of the list %.2f"
print_value(str, "mean", stat.mean(height))