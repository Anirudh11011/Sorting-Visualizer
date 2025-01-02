function mergeA(arr, left, mid, right) {
    const n1 = mid - left + 1;
    const n2 = right - mid;

    
    const L = new Array(n1);
    const R = new Array(n2);

    
    for (let i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (let j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];

    let i = 0, j = 0;
    let k = left;

    
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

function mergeSortA(arr, left, right) {
    if (left >= right)
        return;

    const mid = Math.floor(left + (right - left) / 2);
    mergeSortA(arr, left, mid);
    mergeSortA(arr, mid + 1, right);
    mergeA(arr, left, mid, right);
}






























async function Merge_Sort(data, context, canvasHeight, runtimeDisplay) {
    const startTime = performance.now();
    mergeSortA(data.slice(),0,data.length-1); 
    const endTime = performance.now(); 
    console.log("Merge Sort");
    console.log(endTime-startTime )

   
    async function merge(arr, l, m, r) {
        let n1 = m - l + 1;
        let n2 = r - m;
        let L = arr.slice(l, m + 1);
        let R = arr.slice(m + 1, r + 1);
        
        let i = 0, j = 0, k = l;
        
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k++] = L[i++];
            } else {
                arr[k++] = R[j++];
            }
            graphs(context, data, canvasHeight); 
            await sleep(10); 
        }

        
        while (i < n1) {
            arr[k++] = L[i++];
            graphs(context, data, canvasHeight);
            await sleep(10);
        }
        
        while (j < n2) {
            arr[k++] = R[j++];
            graphs(context, data, canvasHeight);
            await sleep(10);
        }
    }

  
    async function Merge_Sort_Helper(arr, l, r) {
        if (l < r) {
            let m = l + Math.floor((r - l) / 2);
            await Merge_Sort_Helper(arr, l, m);
            await Merge_Sort_Helper(arr, m + 1, r);
            await merge(arr, l, m, r);
        }
    }

    await Merge_Sort_Helper(data, 0, data.length - 1);

    
    runtimeDisplay.innerText = `Runtime: ${(endTime - startTime).toFixed(4)} ms`;
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
