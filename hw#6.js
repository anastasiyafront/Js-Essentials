//Task 1
function printTimeout (str,n){
  setTimeout(()=>{console.log(str);},1000*n);
}

//Task2
function sumAll(n){
  if (n===1) return 1;
  else {
    return count = n+sumAll(n-1);
}
}

//Task 3
function bombTimer(str,time){
  if (time===0){
    return console.log(str);
  }
    else {
      console.log (time);
      return bombTimer(str,time-1);
    }
}

//Task 4
function factorial(n) {

  return n == 0 ? 1 : n * factorial(n - 1);
}

//Task 7

function minMax(arr){
    let obj={
    min:0,
    max:0,
  }
    
obj.min = Math.min.apply(null,arr);
obj.max = Math.max.apply(null,arr);
  return obj;
}


