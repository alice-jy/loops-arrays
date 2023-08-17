//create a loop that counts til 100 and prints out each number
// for each multiple of 3, print "Fizz" replacing the number
// for each multiple of 5, print "Buzz" replacing the number
//for numbers that are multiples of both 3 & 5, print "FizzBuzz" replacing the number

for (let i = 1; i < 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {

        console.log("FizzBuzz");

    } else if (i % 5 === 0) {

        console.log("Buzz");

    } else if (i % 3 === 0) {

        console.log("Fizz");

    } else {

        console.log(i);
        
    }
}