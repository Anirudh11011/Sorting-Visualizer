function selectionSortA(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
    
      
        let min_idx = i;
        
       
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
            
                
                min_idx = j;
            }
        }
        
       
        let temp = arr[i];
        arr[i] = arr[min_idx];
        arr[min_idx] = temp;
    }
}







async function Selection_Sort(data, context, canvasHeight, runtimeDisplay) {
    const startTime = performance.now();
    selectionSortA(data.slice());
    const endTime = performance.now();
    console.log("Selection Sort");
    console.log(endTime - startTime);

    for (let i = 0; i < data.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < data.length; j++) {
            if (data[j] < data[minIndex]) minIndex = j;
        }
        [data[i], data[minIndex]] = [data[minIndex], data[i]];
        graphs(context, data, canvasHeight);
        await sleep(10);
    }
    
    runtimeDisplay.innerText = `Runtime: ${(endTime - startTime).toFixed(4)} ms`;
}