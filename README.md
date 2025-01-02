Sorting Algorithms Project

This project implements and compares the performance of various sorting algorithms using a frontend built with HTML, CSS, and JavaScript. Users can visualize and compare different sorting techniques in terms of speed and efficiency.


Project Overview->

This project showcases the following sorting algorithms:

    1) Mergesort
    2) Heapsort
    3) Quicksort (including both Regular Quicksort and Quicksort using the median of three values)
    4) Insertion Sort
    5) Selection Sort
    6) Bubble Sort

Each algorithm is implemented and can be selected from the frontend interface to sort a randomly generated array or an array specified by the user. The results display in real-time, providing a clear visualization of how each algorithm operates.


Features->

    -> Algorithm Selection: Users can select from the six sorting algorithms provided.
    -> Array Size and Speed Control: Options to control the size of the array to be sorted and the speed of the visualization.
    -> Visualization: Real-time visualization of the sorting process, allowing users to observe the behavior of each algorithm.
    -> Performance Comparison: Allows users to see the time taken for each algorithm to sort arrays of different sizes.

Tech Stack->

    -> Frontend: HTML, CSS, JavaScript
    -> Visualization: JavaScript is used to render the sorting process visually on the browser.

Sorting Algorithms Implemented->


1. Mergesort

The Merge Sort algorithm in this project uses a divide-and-conquer approach, recursively splitting an array into two halves until each subarray contains a single element. The merging process then recombines these sorted subarrays by comparing elements, utilizing two temporary arrays, L and R, to store values from the left and right segments. This approach allows for efficient merging back into the original array with a time complexity of O(nlogn).


2. Heapsort

Heap Sort is an efficient sorting algorithm that organizes data using a heap structure. In this implementation, the heapifyA function creates a max-heap by ensuring each parent node in the array is greater than its children, starting from the bottom non-leaf nodes and working up to the root. 


3. Quicksort

An efficient divide-and-conquer algorithm. This project includes:

    -> Regular Quicksort: Using a random pivot.
    -> Median of Three Quicksort: Selects the pivot as the median of the first, middle, and last elements, improving performance on nearly sorted data.

4. Insertion Sort

The Insertion Sort algorithm sorts an array by building a sorted portion one element at a time. Starting from the second element, each element is compared with those before it and placed into its correct position in the sorted portion. 

5. Selection Sort

A comparison-based algorithm that repeatedly selects the smallest (or largest) element from the unsorted portion of the list.


6. Bubble Sort

The Bubble Sort algorithm is implemented with a nested loop structure that iterates through the array, comparing adjacent elements and swapping them if they are out of order. This process "bubbles up" the largest unsorted element to its correct position at the end of the array in each iteration.


How to Run the Application->

    -> Open index.html in a web browser to start the application.
    -> Selecting Sorting Algorithm: Choose a sorting algorithm from the dropdown menu.
    -> Adjust the Data Size by entering the number in text field if you want to change the number of elements in the array.
    -> Click the Run button to visualize the selected sorting algorithm.
    -> Comparing All Algorithms: Click on the Compare All Sorts button to run and visualize each sorting algorithm in sequence for the same data.
    -> Data Output: Each time a new dataset is generated, a .txt file containing the data is automatically downloaded, allowing you to analyze the input used in the sorting process.



