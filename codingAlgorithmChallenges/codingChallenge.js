/*

This is a demo task.

Write a function:

class Solution { public int solution(int[] A); }

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
*/

const A = [1, 2, 3, 4];
const B = [-1, -3];
const C = [1, 3, 6, 4, 1, 2];

function challenge(arr) {
   const smallest = Math.min(...arr)
   const largest = Math.max(...arr)
   console.log(smallest, largest);

   //if smallest is negative return 1
   if (smallest < 0) {
      return 1
   }

   for (let i = smallest; i <= largest; i++) {
      console.log(i);

      //if i is not in A return i
      if (!arr.includes(i)) {
         console.log(i);
         return i;
      }

      //if A has all values of i return largest + 1
      else if (arr.every((e) => e === 3)) {

         return "hey"
      }

   }

}


const a = challenge(A)
const b = challenge(B)
const c = challenge(C)

console.log(a);
console.log(b);
console.log(c);


