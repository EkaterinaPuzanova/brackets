module.exports = function check(str, bracketsConfig) {
  let arrStr = str.split('');
  
  let result = [];
 
  const openbracketsConfig = [];
  const closebracketsConfig = [];

  for (let i = 0; i < bracketsConfig.length; i += 1) {
    openbracketsConfig[i] = bracketsConfig[i][0];
    closebracketsConfig[i] = bracketsConfig[i][1];
  }

  let bracket = [];
  let l = 0;
  for (let m = 0; m < openbracketsConfig.length ; m += 1) {
    if ( openbracketsConfig[m] === closebracketsConfig[m]) {
      bracket[l]  = openbracketsConfig[m];
      l = l + 1;
    }
  }

  for (let x = 0; x < bracket.length ; x += 1) {
    let s = 0;
    for (let k = 0; k < arrStr.length; k += 1) {
      if (arrStr[k] === bracket[x]) {
        s = s + 1;
      }
      if ((arrStr[k] === bracket[x]) && (s % 2 === 0)) {
      arrStr[k] = ' ';
      }
    }
  }
     
  for (let q = 0; q < arrStr.length; q += 1) {
      if (openbracketsConfig.includes(arrStr[q])) {
        let movingArr = result.splice(q);
        result[q] = arrStr[q];
        result[q+1] = closebracketsConfig[openbracketsConfig.indexOf(arrStr[q])];
        result = result.concat(movingArr)
      }     
  }

  if (result.reduce((a,b) => a + b) === str) {
    return true;
  } else {
    return false;
  }
 
}
