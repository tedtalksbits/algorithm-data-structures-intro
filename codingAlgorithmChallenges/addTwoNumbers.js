let l1 = [2, 4, 3], l2 = [5, 6, 4];


const addTwoNums = (l1, l2) => {

   function reverse(arr) {
      return Number(arr.reverse().toString().split(',').join(''));
   }
   const a = reverse(l1);
   const b = reverse(l2);
   return (a + b);

}

const answer = addTwoNums(l1, l2)

console.log(answer);