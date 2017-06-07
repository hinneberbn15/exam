Array.prototype.map = function (cb) {
    const newArr = [];

    for (let i = 0; i < this.length; i += 1){
        newArr.push(cb(this[i]));
    }
    
    return newArr;
} 

const arr = [1,2,3];

console.log(arr.map((val) => val * val))



