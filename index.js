function mondayWork(string = "go to the office") {
  return `This Monday, I will ${string}.`
}

function saturdayFun(string = "roller-skate") {
  return `This Saturday, I want to ${string}!`
}

function wrapAdjective(punc = "*") {
  let innerFunction = function(string = "special") {
    return `You are ${string}${punc}`
  }
  
  return innerFunction()
}