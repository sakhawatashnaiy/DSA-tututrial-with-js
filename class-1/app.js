// /Dsa in js Questions//////
//  question Node.1
//    Sum of 1 to 5;
    
  function sumofNatitralNumber(num){
    //    let sum =0 ;
    //    for(let i=1; i<=num;i++){
    //       sum = sum+i;
    //    }
    //      return sum;
         return num*(num+1)/2
  }
     console.log(sumofNatitralNumber(5));
     console.log(sumofNatitralNumber(10));

    // Second Question/
        //   find the sum of digits of a number
         
          function SumofDigits(num){
               let sum = 0;
               while(num>0){
                  sum+=num%10;
                  num = Math.floor(num/10);
               }
                  return sum ;

          }
             console.log(SumofDigits(235));


                // Question Node.3
                //  count the number of digits
                
                  
                  function CountDigits(num){
                      num = Math.abs(num);
                      let count = 0;
                      do{
                         count ++;
                         num = Math.floor(num/10)
                      } while(num>0)
                        return count;
                  }
                    console.log(CountDigits(123));
                     
                  //   Question N0.4
                  