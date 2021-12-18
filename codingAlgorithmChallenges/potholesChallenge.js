let S = "XX..X..XXX..";


function solution(S) {
   let patches = 0;
   for (let i = 0; i < S.length; i++) {

      if (S[i] === 'X') {
         patches++;
         i += 2;
      }
   }
   return patches;
}

let ans = solution(S)

console.log(ans);