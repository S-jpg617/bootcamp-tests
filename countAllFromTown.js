function allFromTown(regNumbers,regStr){
    var items=regNumbers.split(',');
    var regNumbersForTown=[]
    for(var i=0;i<items.length;i++){
      if(items[i].trim().startsWith(regStr)){
        regNumbersForTown.push(items[i].trim())
      }
    }
   return regNumbersForTown;
  }