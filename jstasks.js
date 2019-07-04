// Task 1 Build a function that does currency converter from USD to UAH (1 USD = 8 UAH).
function convert (amount){
  const Rate= 8;
  return amount*Rate;
}

//Task 2 A function which returns reversed string.
function reverse(str){
  var splitStr= str.split('');
  var reverseStr= splitStr.reverse();
  var jointStr= reverseStr.join("");
  return jointStr;
}
  
//Task 3 A function which prints the stair picture of size n
function printStairs(n){
  let str= '';
  for (let i= 0;i<n;i++){
    console.log(str+='#');
}

//Task 4 A function which returns total sum of a range
function startRange (start,end){
  let sum = 0;
  for (let i=start;i<=end;i++){
  sum = sum + i;  
  }
  return sum;
}

//Task 5 Write a function which returns the smallest of three numbers.
function min(a,b,c){
  return min = (a<=b ? a:b);(b<=c ? b:c);(c<=b ? c:b);
}
  
//Task 7 A function which transforms first and last letter to uppercase (use built in string’s method).
function firstAndLastToUpper(str){
return str[0].toUpperCase() + str.toLowerCase.slice(1); 
  str[str.length-1].toUpperCase() + str.toLowerCase.slice(str.length-1);
  console.log(str);
}
