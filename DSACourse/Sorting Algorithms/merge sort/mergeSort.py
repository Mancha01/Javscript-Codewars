def merge(arr1, arr2):
    results = []
    i, j = 0, 0

    while i < len(arr1) and j < len(arr2):
        if arr1[i] < arr2[j]:
            results.append(arr1[i])
            i += 1
        else:
            results.append(arr2[j])
            j += 1

    while i < len(arr1):
        results.append(arr1[i])
        i += 1

    while j < len(arr2):
        results.append(arr2[j])
        j += 1

    return results


def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    return merge(left, right)


# Example usage:
print(merge_sort([10, 24, 76, 73]))
