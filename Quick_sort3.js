let i
let j;
 
   
    function partitionA(a , l , r) {
 
        i = l - 1;
        j = r;
        var p = l - 1, q = r;
        var v = a[r];
 
        while (true) {
 
        
            while (a[++i] < v)
                ;
 
            
           
            while (v < a[--j])
                if (j == l)
                    break;
 
        
            if (i >= j)
                break;
 
          
            var temp = a[i];
            a[i] = a[j];
            a[j] = temp;
 
          
            if (a[i] == v) {
                p++;
                temp = a[i];
                a[i] = a[p];
                a[p] = temp;
 
            }
 
        
            if (a[j] == v) {
                q--;
                temp = a[q];
                a[q] = a[j];
                a[j] = temp;
            }
        }
 
        var temp = a[i];
        a[i] = a[r];
        a[r] = temp;
 
      
        j = i - 1;
        for (k = l; k < p; k++, j--) {
            temp = a[k];
            a[k] = a[j];
            a[j] = temp;
        }
 
      
        i = i + 1;
        for (k = r - 1; k > q; k--, i++) {
            temp = a[i];
            a[i] = a[k];
            a[k] = temp;
        }
    }
 
    
    function quicksortA(a , l , r) {
        if (r <= l)
            return;
 
        i = 0;
        j = 0;
 
      
        partitionA(a, l, r);

        quicksortA(a, l, j);
        quicksortA(a, i, r);
    }














    async function QuickSort_3(data, context, canvasHeight, runtimeDisplay, low = 0, high = data.length - 1) {
        const startTime = performance.now(); 
        quickSortA(data.slice(),0,data.length-1);
        const endTime = performance.now(); 
        console.log("Quick Sort 3");
        console.log(endTime - startTime);
    
        function Median_Of_Three(arr, low, high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[low] > arr[mid]) [arr[low], arr[mid]] = [arr[mid], arr[low]];
            if (arr[low] > arr[high]) [arr[low], arr[high]] = [arr[high], arr[low]];
            if (arr[mid] > arr[high]) [arr[mid], arr[high]] = [arr[high], arr[mid]];
            return mid;
        }
    
     
        async function partition(arr, low, high) {
            let medianIndex = Median_Of_Three(arr, low, high);
            [arr[medianIndex], arr[high]] = [arr[high], arr[medianIndex]]; 
    
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
    
      
        async function QuickSort_Median_Helper(arr, low, high) {
            if (low < high) {
                let pi = await partition(arr, low, high);
                await QuickSort_Median_Helper(arr, low, pi - 1);
                await QuickSort_Median_Helper(arr, pi + 1, high);
            }
        }
    
        await QuickSort_Median_Helper(data, low, high);
        
        
        runtimeDisplay.innerText = `Runtime: ${(endTime - startTime).toFixed(2)} ms`;
    }
    
 
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    