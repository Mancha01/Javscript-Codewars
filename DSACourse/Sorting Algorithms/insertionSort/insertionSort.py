def insertion_sort(arr):
    n = len(arr)
    for i in range(n):
        position = i
        current = arr[i]
        while position > 0 and arr[position - 1] > current:
            arr[position] = arr[position - 1]
            position -= 1
        arr[position] = current
    
    return arr


def factorial(x):
    """This is a recursive function
    to find the factorial of an integer"""

    if x == 1:
        return 1
    else:
        return (x * factorial(x-1))
    
factorial(5)