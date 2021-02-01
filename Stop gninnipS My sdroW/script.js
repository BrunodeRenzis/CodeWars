function spinWords(cadena){
  let arrayString = cadena.split(' ');
  let cadenaAMostrar='';

  
  for(let i=0;i<arrayString.length;i++){
      if(arrayString[i].length>=5)
      {
          for(let j=arrayString[i].length-1;j>=0;j--)
          {
            cadenaAMostrar+=arrayString[i][j]
          }
        cadenaAMostrar+=' ';
      }
        
      else
      {
        cadenaAMostrar+=arrayString[i];
        cadenaAMostrar+=' ';
      }
  }
  console.log(cadenaAMostrar);
  
  return cadenaAMostrar.trim();
}