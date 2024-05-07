let words = 'sjkgrh kfcjfsdjh kfkjf uiewoq ncbk olqmnw'

function findLongestWord(){
      let list = words.split(' ');
      console.log(list);
      let big = list[0];
      for(let i=0;i<list.length;i++){
         if(list[i].length>big.length){
            big = list[i];
         }
      }  
      console.log(big)
}        
findLongestWord()
//------------------------------------------------------------------------


let numbers = [9, 7, 6 ,8, 4 ,3, 29]
function findMax(){
   let max = numbers[0];
   for(let i=0;i<numbers.length;i++){
      if(numbers[i]>max){
         max = numbers[i];
      }
   }
   console.log(max)
}
findMax()
//-------------------------------------------------------------------------


function reverseString(string){
    const newArr = string.split('');
    const reversedArr = newArr.reverse();
    const reversedStr = reversedArr.join('');
      return reversedStr;  
}

console.log(reverseString('Hello bro'))
//-------------------------------------------------------------------------

function titleCase(sentence) {
  let words = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }     return words.join(' ');
}
console.log(titleCase('this is a sample sentence'));
