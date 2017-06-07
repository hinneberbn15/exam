function reverseArr(arr) { 
    let counter = arr.length;
    let temp = null;

    for(let i=0; i<arr.length-1; i++){
        temp=arr[i];
        arr[i] =arr[counter-1];
        arr[counter]=temp ;
    }

}


const arr = [1,2,3];
reverseArr(arr);
console.log(arr) // [3,2,1];