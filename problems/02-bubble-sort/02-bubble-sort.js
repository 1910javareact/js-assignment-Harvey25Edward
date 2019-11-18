/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    {
        let swapp;
        let n = numArray.length-1;
        let x=numArray;
        do {
            swapp = false;
            for (let i=0; i < n; i++)
            {
                if (x[i] < x[i+1])
                {
                   var temp = x[i];
                   x[i] = x[i+1];
                   x[i+1] = temp;
                   swapp = true;
                }
            }
            n--;
        } while (swapp);
     return x; 
    
}