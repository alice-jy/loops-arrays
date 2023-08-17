//declare a string with an input value 
const lowercase = "hello";
const numVowels = 0;
const numConsonants = 0; 

for (let i = 0; i < lowercase.length; i++){
    //count vowels & count consonants
    if (lowercase[i] === "a" || lowercase[i] === "e" || lowercase[i] === "i" || lowercase[i] === "o" || lowercase[i] === "u"){
        //add 1 to numVowels
          numVowels++;
    } else{
        //add 1 to numConsonants
        numConsonants++; 
    }
}

return numConsonants, numVowels;

//print the word followed by how many consonants and vowels it has
console.log(lowercase + " has " + numConsonants + " consonants and " + numVowels + " vowels.")




