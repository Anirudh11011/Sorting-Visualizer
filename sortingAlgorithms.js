        const bs = document.getElementById("bs"); //bubble sort
        const bs_context = bs.getContext("2d");

        const ins= document.getElementById("ins");  //insertion sort
        const ins_context = ins.getContext("2d");

        const mg= document.getElementById("mg");  //merge sort
        const mg_context = mg.getContext("2d");
        
        const hp = document.getElementById("hp"); //heap sort
        const hp_context = hp.getContext("2d");

        const sl = document.getElementById("sl");  //selection sort
        const sl_context = sl.getContext("2d");

        const qk = document.getElementById("qk"); //quick sort
        const qk_context = qk.getContext("2d");

        const qk3 = document.getElementById("qk3"); //quick sort 3 median
        const qk3_context = qk3.getContext("2d");

        let bs_data = [];
        let ins_data = [];
        let mg_data = [];
        let hp_data = [];
        let sl_data = [];
        let qk_data = [];
        let qk3_data = [];
        let selectedAlgorithm = '';



function Store_data(data) {
    
    const all_data = JSON.stringify(data, null, 2);

    
    const data1 = new Blob([all_data], { type: 'text/plain' });

   
    const url = URL.createObjectURL(data1);

   
    const a = document.createElement("a");
    a.href = url;                  
    a.download = "Inputs.txt";  
    a.style.display = 'none';      

   
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

   
    URL.revokeObjectURL(url);
}


function generateRandomData(size) {
    const randomData = Array.from({ length: size }, () => Math.floor(Math.random() * 250) + 10);

   
    bs_data = [...randomData];
    ins_data = [...randomData];
    mg_data = [...randomData];
    hp_data = [...randomData];
    sl_data = [...randomData];
    qk_data = [...randomData];
    qk3_data = [...randomData];

  
    graphs(bs_context, bs_data, bs.height);
    graphs(ins_context, ins_data, ins.height);
    graphs(mg_context, mg_data, mg.height);
    graphs(hp_context, hp_data, hp.height);
    graphs(sl_context, sl_data, sl.height);
    graphs(qk_context, qk_data, qk.height);
    graphs(qk3_context, qk3_data, qk3.height);


    const dumpData = {
        bs_data,
    };

    Store_data(dumpData);
}

        





        function generateNewData() {
            
            const dataSize = parseInt(document.getElementById("dataSize").value, 10) || 50; 
            generateRandomData(dataSize);  
        }

        
        function graphs(context, data, canvasHeight) {
            context.clearRect(0, 0, context.canvas.width, context.canvas.height);
            const graph_size = context.canvas.width / data.length;
            data.forEach((value, index) => {
                context.fillStyle = "teal";
                context.fillRect(index * graph_size, canvasHeight - value, graph_size - 2, value);
                context.fillStyle = "black";
                context.font = "0px Arial";
                context.textAlign = "center";
                context.fillText(value, index * graph_size + graph_size / 2, canvasHeight - value - 5);
            });
        }

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

       

        
        function selectAlgorithm(algorithm) {
            selectedAlgorithm = algorithm;
            compareMode = false;
            document.querySelector(".canvas-container").style.display = "flex";
            document.querySelectorAll(".canvas-container > div").forEach(div => div.style.display = "none");
            document.getElementById(`${algorithm}SortContainer`).style.display = "block";
            generateRandomData(5);
        }

        function runSelectedSort() {
            if (compareMode) {
               
                Bubble_Sort(bs_data, bs_context, bs.height, document.getElementById("runtime1"));
                Insertion_Sort(ins_data, ins_context, ins.height, document.getElementById("runtime2"));
                Merge_Sort(mg_data, mg_context, mg.height, document.getElementById("runtime3"));
                Heap_Sort(hp_data, hp_context, hp.height, document.getElementById("runtime4"));
                Selection_Sort(sl_data, sl_context, sl.height, document.getElementById("runtime5"));
                Quick_Sort(qk_data, qk_context, qk.height, document.getElementById("runtime6"));
                QuickSort_3(qk3_data, qk3_context, qk3.height, document.getElementById("runtime7"));
            } else {
               
                if (selectedAlgorithm === 'bubble') { 
                    Bubble_Sort(bs_data, bs_context, bs.height, document.getElementById("runtime1"));
                } else if (selectedAlgorithm === 'insertion') {
                    Insertion_Sort(ins_data, ins_context, ins.height, document.getElementById("runtime2"));
                } else if (selectedAlgorithm === 'merge') {
                    Merge_Sort(mg_data, mg_context, mg.height, document.getElementById("runtime3"));
                } else if (selectedAlgorithm === 'heap') {
                    Heap_Sort(hp_data, hp_context, hp.height, document.getElementById("runtime4"));
                } else if (selectedAlgorithm === 'selection') {
                    Selection_Sort(sl_data, sl_context, sl.height, document.getElementById("runtime5"));
                } else if (selectedAlgorithm === 'quick') {
                    Quick_Sort(qk_data, qk_context, qk.height, document.getElementById("runtime6"));
                } else if (selectedAlgorithm === 'quickMedian') {
                    QuickSort_3(qk3_data, qk3_context, qk3.height, document.getElementById("runtime7"));
                } else {
                    alert("Please select an algorithm first!");
                }
            }
        }
        
        

        function compareSorts() {
            document.querySelector(".canvas-container").style.display = "flex";
            document.querySelectorAll(".canvas-container > div").forEach(div => div.style.display = "block");
        
          
            compareMode = true;
        
           
            const dataSize = parseInt(document.getElementById("dataSize").value, 10) || 20;
            generateRandomData(dataSize);
        
            
            Bubble_Sort(bs_data, bs_context, bs.height, document.getElementById("runtime1"));

            Insertion_Sort(ins_data, ins_context, ins.height, document.getElementById("runtime2"));

            Merge_Sort(mg_data, mg_context, mg.height, document.getElementById("runtime3"));

            Heap_Sort(hp_data, hp_context, hp.height, document.getElementById("runtime4"));

            Selection_Sort(sl_data, sl_context, sl.height, document.getElementById("runtime5"));

            Quick_Sort(qk_data, qk_context, qk.height, document.getElementById("runtime6"));

            QuickSort_3(qk3_data, qk3_context, qk3.height, document.getElementById("runtime7"));

        }
        