def quick_sort(array):
    if len(array) < 2:
        return array
    else:
        pivot = array[0]
        less = quick_sort([i for i in array if i < pivot])
        greater = quick_sort([i for i in array if i > pivot])
        return less + [pivot] + greater
