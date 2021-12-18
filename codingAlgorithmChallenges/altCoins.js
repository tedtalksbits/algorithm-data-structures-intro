let A = [1, 1, 0, 1, 1];


function solution(A) {


   let flips = 0;

   for (let i = 0; i < A.length; i++) {
      if (A[i] === A[i + 1]) {
         flips++;

      }


   }

   return flips;
}

const ans = solution(A)

console.log(ans);