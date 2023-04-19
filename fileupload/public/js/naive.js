function naiveSearch(string, substring){
    if(substring === "") return 0
    let count = 0;
  
  for(let i =0; i < string.length; i++){
    for(let j = 0; j < substring.length ; j++){
        if(string[i] !== substring[i + j]){
        break
        }

       
    }

    if(j === substring.length - 1){
        count++;
            
    }
  }
}

console.log(naiveSearch("jiurhriuer plo ", "hruheurhe rejorjiej plo"))