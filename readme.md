## Notes

### Interpretation of the brief

My first step in approaching this challenge was to interpet the brief and establish a number of sensible test cases to work towards delivery of. I was a bit back and forth as to just how literally to interpret the "length equal to the remainder" requirement. However, using the pseudo-code example more as guidance, and making a sensible call on how this kind of data might normally be grouped, I've hopefully landed at a useful solution.

---

### Sample Test Cases and Expected Outputs

    groupArrayElements([1, 2, 3, 4, 5], 3);
    // output [ [1, 2], [3, 4], [5] ]

	groupArrayElements([1, 2, 3, 4, 5], 4);
    // output [ [1, 2], [3], [4], [5] ]

	groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8], 3);
    // output [ [1, 2, 3], [4, 5, 6], [7, 8] ]

	groupArrayElements([1, 2, 3], 2);
    // output [ [1, 2], [3] ]

	groupArrayElements([1, 2, 3], 3);
    // output [ [1], [2], [3] ]

	groupArrayElements([], 1);
    // output [ [] ]

	groupArrayElements([1, 2, 3]);
    // output [ [1, 2, 3] ]

	groupArrayElements([1, 2, 3], "banana");
    // output undefined

---

### How it Works

The crux of this approach is the destructive nature of splice() on line 10, when setting its second parameter.

By removing elements from `inputArray` which have already been pushed into `groupedArray`, we can divide the remaining number of elements by the (descending) index of the for loop to ensure we're always adding the correct number of elements to the next group.

Additionally, by rounding elementsToPush up with ceil() we ensure that the first group of the output will always be given an extra element where required, when dealing with uneven groups.

For example, in the case of:

    groupArrayElements([1, 2, 3, 4, 5], 4)
    // output [[1, 2], [3], [4], [5]]

* On the first loop, our index is 4 and inputArray.length is 5. The result of elementsToPush is therefore 2 (1.25 rounded up), meaning 2 elements are spliced and pushed into `groupedArray`.
* On every remaining loop, our index and inputArray.length are identical (3 and 3, 2 and 2 etc), meaning only 1 element is spliced and pushed into `groupedArray` each time.

---

### How to Run

* If you'd like to run this on your own machine, assuming you have node installed, simply clone the repo, cd into the directory and run `node index.js`.

* Alternatively, [click here](https://codepen.io/fraserboag/pen/QWyRVea) to try this out on CodePen. CodePen has a built in console, or you can use your browser's console as normal.

---

### Note on Commenting

I'm a fan of well commented code generally, however in this instance it felt like descriptive variable names did an adequate job.
