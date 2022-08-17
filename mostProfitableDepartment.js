

function mostProfitableDepartment(salesData){
    let dept={}
    for(let i=0;i<salesData.length;i++){
      let departments=salesData[i].department
      let sale= salesData[i].sales;
      if(dept[departments]==undefined){
         dept[departments]=sale
         }else{
           dept[departments]=dept[departments]+sale
         }
    }
    let maximum=0;
    let successfulDept="";
    
    for(item in dept){
      if(dept[item]>maximum){
        maximum=dept[item];
        successfulDept=item;
      }
    }
    return successfulDept
  }