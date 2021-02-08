function friend(friends){
    let arrayReturn=[];
    for(let i=0;i<friends.length;i++)
      {
          if(friends[i].length==4)
          {
            arrayReturn.push(friends[i]);
          }
      }
    return arrayReturn;
  }