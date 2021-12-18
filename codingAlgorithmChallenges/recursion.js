// this recursive function returns the sum of all numbers from "number" to 1
// eg.number = 3 => 3 + 2 + 1 => 6
// eg.number = 20 => 20 + 19 + 18 ... => 210

function recursion(number) {
   //base case to avoid infinite loop
   if (number <= 1) {
      return number
   }
   return (number + recursion(number - 1))

}


console.log(recursion(20));

