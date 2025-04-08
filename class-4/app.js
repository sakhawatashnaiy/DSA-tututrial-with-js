// Delete Element in array by static position
   
    //  let data = [30,20,45,76,20,80];
    //  let position = 3;
    //  for(let i = position; i<data.length-1; i++){
    //       data[i]=data[i+1];
    //  }
    //   data.length = data.length-1;
    //   console.warn(data);
    


       ///Delete Element in array by dynamic position;
           function removeElement(){
              let data = [30,20,45,76,20,80];
               console.log(data);
              let position = document.getElementById('position').value;
               position=parseInt(position);

                for(let i =position; i<data.length-1; i++){
                      data[i]= data[i+1];
                }
                  data.length = data.length-1;
                  console.warn(data);

           }