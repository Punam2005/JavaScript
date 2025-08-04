let arr=[1,2,3,4,5];
//returns the square of each element in the array
//callback function
arr.forEach(function square(val){
    console.log(val*val);
})

//map function
let newArr=arr.map((val)=>{
    return val;
})
console.log(newArr);

//setTimeout example
let timeoutId;
function startTimer(){
    timeoutId=setTimeout(() => {
        window.alert("Timer finished");
    }, 3000);
}
function clearTimer(){
    clearTimeout(timeoutId);
    window.alert("Timer cleared");
}