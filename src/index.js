module.exports = function check(str, bracketsConfig) {
  const pairs = [];
  
  for (let pair of bracketsConfig) {
      pairs.push(pair.join(""));
  }

  let chars = '';
  
  while (str != chars) {
    chars = str;
    
    pairs.forEach(element => {
      str = str.replace(element,"");
    });
  }
  
  str.length > 0 ? chars = false : chars = true;
  
  return(chars);
}
