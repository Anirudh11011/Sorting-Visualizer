function partitionA(arr, low, high)
{

    
    let pivot = arr[high];
    let i = low - 1;

    
    
    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swapA(arr, i, j);
        }
    }

   
   
    swapA(arr, i + 1, high);
    return i + 1;
}


function swapA(arr, i, j)
{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


function quickSortA(arr, low, high)
{
    if (low < high) {

        
        let pi = partitionA(arr, low, high);

        quickSortA(arr, low, pi - 1);
        quickSortA(arr, pi + 1, high);
    }
}
























async function Quick_Sort(data, context, canvasHeight, runtimeDisplay, low = 0, high = data.length - 1) {

    
    const startTime = performance.now();
    quickSortA(data.slice(),0,data.length-1);
    const endTime = performance.now();
    console.log("Quick Sort");
    console.log(endTime - startTime);

    async function partition(arr, low, high) {
        let pivot = arr[high];
        let i = low - 1;
        for (let j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]]; 
                graphs(context, arr, canvasHeight);  
                await sleep(10);
            }
        }
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; 
        graphs(context, arr, canvasHeight);  
        await sleep(10);
        return i + 1;
    }

    async function Quick_Sort_Helper(arr, low, high) {
        if (low < high) {
            let pi = await partition(arr, low, high);
            await Quick_Sort_Helper(arr, low, pi - 1);
            await Quick_Sort_Helper(arr, pi + 1, high);
        }
    }

    await Quick_Sort_Helper(data, low, high);
    
    
    runtimeDisplay.innerText = `Runtime: ${(endTime - startTime).toFixed(8)} ms`;
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

