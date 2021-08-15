/*jshint esversion: 8 */
  
  module.exports = function toReadable(number) {
    const textNum = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: 'eleven', 
        12: "twelve", 
        13: "thirteen", 
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety"
      };
    
      const c = number % 10;
      const b = Math.floor(number / 10) % 10;
      const a = Math.floor(number / 100) % 10;
    
      let result = 0;
    
      if (number < 100) { if (number === 0) {result = 'zero';} else {
        if (b !== 0) 
              { if (b === 1) 
                { result = textNum[`${b}${c}`];} 
              else { if (c === 0) {result = textNum[`${b}${c}`];}            
              else {result = `${textNum[`${b}0`]} ${textNum[c]}`;}}}
        
        else {result = textNum[c];}}}
      else {
        if (b !== 0) 
              { if (b === 1) 
                {result = `${textNum[a]} hundred ${textNum[`${b}${c}`]}`;} 
               else { if (c === 0) {result = `${textNum[a]} hundred ${textNum[`${b}${c}`]}`;}            
               else {result = `${textNum[a]} hundred ${textNum[`${b}0`]} ${textNum[c]}`;}}}
        
        else {if (c !== 0) {result = `${textNum[a]} hundred ${textNum[c]}`;} else {result = `${textNum[a]} hundred`;}}}

      return result;
    };