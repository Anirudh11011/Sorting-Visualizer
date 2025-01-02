function insertionSortA(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}









async function Insertion_Sort(data, context, canvasHeight, runtimeDisplay) {
    const startTime = performance.now();
    insertionSortA(data.slice());
    const endTime = performance.now();
    console.log("Insertion Sort");
    console.log(endTime-startTime )

    for (let i = 1; i < data.length; i++) {
        let key = data[i];
        let j = i - 1;
        while (j >= 0 && data[j] > key) {
            data[j + 1] = data[j];
            j--;
            graphs(context, data, canvasHeight);
            await sleep(10);
        }
        data[j + 1] = key;
        graphs(context, data, canvasHeight);
        await sleep(10);
    }
    
    runtimeDisplay.innerText = `Runtime: ${((endTime - startTime) ).toFixed(3)} ms`;
}