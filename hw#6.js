//Task 1
function printTimeout (str,n){
  setTimeout(()=>{console.log(str);},1000*n);
}

//Task2
function sumAll(n){
  if (n==1) return 1;
  return n+sumAll(n-1);
}

//Task 3
function bombTimer (str,time){
   let timer = setTimeout( () => {

        if(time==0){

            clearTimeout(timer);

            return console.log(str);
            
        }

        console.log(time);

        return bombTimer2(str, time-1);

    },1000)

}

//Task 4
function factorial(n) {

  return n == 0 ? 1 : n * factorial(n - 1);
}

//Task 6


