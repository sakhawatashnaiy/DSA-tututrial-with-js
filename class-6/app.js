// Dsa class-6
//  merge two arrays
//   Methods One
  let data = [20,30,40,50,60,70,1000,300,500];
  let data2 = [30,50,20,10,6,70,99,200];
  let data3 =[];
  for(let i=0 ;i<data.length;i++){
      data3[i]=data[i]
      
  }
    for(let i=0; i<data2.length;i++){
          data3[data.length+i]=data2[i]
    }
   console.log(data3);


      let dummy = [100,200,300,400,500,600,700,800];
      dummy.reverse();
      console.log(dummy);

        // Methods two for mergin array

          let fruits = ["apple","kenou","strwaberry","chekou"];
          let fruits1 = ["mangoe","apple","orange","cheery"];
           let fruits2= [...fruits,...fruits1];
           console.log(fruits2);