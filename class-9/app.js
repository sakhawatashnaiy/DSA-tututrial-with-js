let data = [40,30,12,25];

  for(let i=0; i< data.length; i++){
    console.log(data);
       for(let  j=0; j<data.length;j++){
          if(data[j]>data[j+1]){
              let temp = data[j];
            data[j]=data[j+1];
            data[j+1]=temp
          }
       }
  }
      