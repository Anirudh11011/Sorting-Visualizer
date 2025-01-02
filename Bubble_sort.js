function bubbleSortActual(arr) {
    let n = arr.length;
    let i, j, temp;
    let swapped;
    for (i = 0; i < n - 1; i++){
        swapped = false;
        for (j = 0; j < n - i - 1; j++){
            if (arr[j] > arr[j + 1]) 
            {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        if (swapped == false)
        break;
    }
}

async function Bubble_Sort(data, context, canvasHeight, runtimeDisplay) {
    const startTime = performance.now();
    bubbleSortActual(data.slice());
    const endTime = performance.now();
    console.log("Bubble Sort");
    console.log(endTime-startTime )
  
    const actions = [];

   
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length - i - 1; j++) {
            if (data[j] > data[j + 1]) {
                [data[j], data[j + 1]] = [data[j + 1], data[j]];

               
                actions.push([...data]); 
            }
        }
    }

    
    runtimeDisplay.innerText = `Runtime: ${((endTime - startTime)).toFixed(3)} ms`;

    
    for (let action of actions) {
        graphs(context, action, canvasHeight);
        await sleep(150); 
    }
}












    