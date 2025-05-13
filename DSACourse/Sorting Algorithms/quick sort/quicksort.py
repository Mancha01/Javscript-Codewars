def pivot(arr, start=0, end=None):
    if end is None:
        end = len(arr) - 1  # Directly set the end index if not provided

    def swap(i, j):
        """Swaps two elements in the array."""
        arr[i], arr[j] = arr[j], arr[i]

    pivot_value = arr[start]  # Choosing the first element as pivot
    swap_idx = start  # Keeps track of where the pivot should end up

    for i in range(start + 1, end + 1):
        if arr[i] < pivot_value:
            swap_idx += 1
            swap(swap_idx, i)  # Swap smaller elements to the left

    swap(start, swap_idx)  # Move pivot to correct position
    return swap_idx  # Return pivot index

def quickSort(arr, left=0, right=None):
    if right is None:
        right = len(arr) - 1  # Directly set the right index if not provided

    if left < right:
        pivot_index = pivot(arr, left, right)  # Get pivot index
        quickSort(arr, left, pivot_index - 1)  # Recursively sort left side
        quickSort(arr, pivot_index + 1, right)  # Recursively sort right side

    return arr  # Return sorted array

# Example Usage
data = [100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]
sorted_data = quickSort(data)
print(sorted_data)
