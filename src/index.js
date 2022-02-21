module.exports = function toReadable (number) {
  const obj1 = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',   
  }

  const obj10 = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  }
  if(number < 1) {return 'zero'}
  if(number < 20) {
    return obj1[number]
  } 
  if (number > 19 & number < 100) {
    let number1 = number.toString().split('').map(Number);
    if(number1[1] === 0) {
        return `${obj10[number1[0]]}`
    }else{
        return `${obj10[number1[0]]} ${obj1[number1[1]]}`
    }      
  } if(number > 99 & number < 120 ) {
      let number2 = number.toString().split('').map(Number);
      let number3 = +number2.slice(-2).join('');
    if(number % 100 === 0) {
       return `${obj1[number2[0]]} hundred`
    }else if(number2[1] === 0) {
        return `${obj1[number2[0]]} hundred ${obj1[number2[2]]}`
      } else {
        return `${obj1[number2[0]]} hundred ${obj1[number3]}` 
      } 
  } if(number > 119) {
    let number2 = number.toString().split('').map(Number);
    if(number % 100 === 0) {
      return `${obj1[number2[0]]} hundred` 
    } else if(number % 10 === 0) {
      if(number % 100 < 20) { return `${obj1[number2[0]]} hundred ${obj1[number2.slice(1).join('')]}`} else {
       return `${obj1[number2[0]]} hundred ${obj10[number2[1]]}`
      }} else if (number2[1] === 0) {
       return `${obj1[number2[0]]} hundred ${obj1[number2[2]]}` 
    } else if (number2.slice(1).join('') < 20) {
       return `${obj1[number2[0]]} hundred ${obj1[number2.slice(1).join('')]}`
    } else {
      return `${obj1[number2[0]]} hundred ${obj10[number2[1]]} ${obj1[number2[2]]}` 
    }
}
}


