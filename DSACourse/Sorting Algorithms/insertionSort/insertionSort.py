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