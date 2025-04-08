//  Searching an element in array

//   by statically 
//   detecting an element
 
    //   let data = [1,2,3,4,5,6,7,8,9];
    //   let item = 5;
    //   let index = undefined;
    //   for(let i =0; i<=data.length; i++){
    //       if(data[i]===item){
    //           index = i;
    //           break;

    //       }
    //   }
    //    console.log(index);  
        // console.log(data.indexOf(item));
        // data.splice(2,1)
        // console.log(data);
        

        //   by dynamically
           function SearchElement(){
            let data = [1,2,3,4,5,6,7,8,9];
            let item = document.getElementById('elementsearch').value
            let index = undefined;
            for(let i =0; i<=data.length; i++){
                if(data[i]===parseInt(item)){
                    index = i;
                    break;s
      
                }
            }
               alert(index)
           }