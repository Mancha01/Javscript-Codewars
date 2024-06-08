def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        minIdx = i
        for j in range(i + 1, n):
            if arr[minIdx] > arr[j]:
                minIdx = j
        if minIdx != i:
            arr[i], arr[minIdx] = arr[minIdx], arr[i]
    
    return arr