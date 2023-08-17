//create a new array that takes the values in the original array and reverses the order
const myArr=[1,2,3];
const newArr=[];
//use a for loop to loop through the array and push the values into the new array
for(let i=myArr.length-1; i>=0;i--){
    newArr.push(myArr[i]);
}
//print new array
console.log(newArr);