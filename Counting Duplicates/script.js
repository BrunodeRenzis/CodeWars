function duplicateCount(text){
    let counter = 0;
    let obj = {};
      for(let i of text)
      {
        i = i.toLowerCase();
          if(!obj[i])
          {
            obj[i] = 1;
          }
          else
          {
            obj[i]++;
          }
      }
    
        for(let i in obj)
        {
            if(obj[i]>1)
            {
              counter++;
            }
        }
    return counter;
  }