function heapifyA(data, n, i) {

  
    let largest = i;
    
    
    let l = 2 * i + 1; 
    

    let r = 2 * i + 2; 

   
    if (l < n && data[l] > data[largest]) {
        largest = l;
    }

   
    if (r < n && data[r] > data[largest]) {
        largest = r;
    }


    if (largest !== i) {
        let temp = data[i]; 
        data[i] = data[largest];
        data[largest] = temp;

       
        heapifyA(data, n, largest);
    }
}


function heapSortA(data) {
    let n = data.length;

   
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapifyA(data, n, i);
    }

   
    for (let i = n - 1; i > 0; i--) {
    
        
        let temp = data[0];
        data[0] = data[i];
        data[i] = temp;

       
        heapifyA(data, i, 0);
    }
}






















async function Heap_Sort(data, context, canvasHeight, runtimeDisplay) {
    
    const startTime = performance.now();
    heapSortA(data.slice());
    const endTime = performance.now();
    console.log("Heap Sort");
    

    console.log(endTime - startTime);

    async function heapify(arr, n, i) {
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        if (left < n && arr[left] > arr[largest]) largest = left;
        if (right < n && arr[right] > arr[largest]) largest = right;
        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            graphs(context, data, canvasHeight);
            await sleep(10);
            await heapify(arr, n, largest);
        }
    }
    let n = data.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) await heapify(data, n, i);
    for (let i = n - 1; i > 0; i--) {
        [data[0], data[i]] = [data[i], data[0]];
        graphs(context, data, canvasHeight);
        await sleep(10);
        await heapify(data, i, 0);
    }
    
    runtimeDisplay.innerText = `Runtime: ${(endTime - startTime).toFixed(4)} ms`;
}
