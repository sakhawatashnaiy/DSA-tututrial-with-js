// let money = 100;
// let totalApple = 0;

// function buyApple(x) {
//   if (x > 0) {
//     console.log("I have", x, "RS and total apples:", totalApple);
//     buyMore(x);
//   } else {
//     console.log("I don't have money to buy apple. Total apples:", totalApple);
//   }
//   return totalApple;
// }

// function buyMore(x) {
//     totalApple++;
//   buyApple(x -10);
// }

// buyApple(money);
   

    //   This vesion with  while loops

      let money =100;
      let totalapple = 0;
         console.log("meray pass abhi 100 hai" ,money);
         while ( money >=10){
              money -= 10;
              totalapple++;
              console.log(money ,totalapple);
         }
           console.log("pisa khatam houchoukay ha ab ap apple nai kharidsktay", totalapple);
