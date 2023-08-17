const arrNum = [2,4,6,8,11,20,15,22];
const result = [];

for (let i = 0; i < arrNum.length; i++){

    if (arrNum[i]%2!==0){
        result.push(arrNum[i]);
    }

}

console.log(result);