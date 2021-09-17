
//problem 1 --- Runtime  O(n^2) indexof has to iterate through the array 

let falseTest = [1,2,3,4]
let trueTest = [0, 5, 10,-10,8]

sumZero = (nums) => {
  for(let i = 0; i<nums.length;i++) {
    let opposite = nums[i] * -1
    if(nums.indexOf(opposite)> -1){
      console.log('true')
      return true
    }else{
      console.log('false')
      return false
    }
  };
}
// sumZero(falseTest)
// sumZero(trueTest)


//problem 2 --- Runtime O(n)
let existingChars = {

}
let testWord = 'goofy'
uniqueChars = (word) => {
  for(let i = 0; i<word.length;i++) {
    let char = `${word[i]}`
    if(existingChars[word[i]]){
      console.log('this contains multiple of the same character')
      return true
    }
    
    existingChars[char] = 1
    console.log(existingChars)
  };
  console.log('no multiples')
  return false
}
// uniqueChars(testWord)


//problem 3 --- Runtime should be O(n)
//right now it will only work for all lowercase letter inputs and no special characters like ".,!?"
let lettersObj = {

}
let keyCount = 0
let testSentence = "the quick brown fox jumps over the lazy dog"
pangram = (sentence) => {
  for(let i =0; i<sentence.length;i++){
    if(sentence[i] !== ' '){
    lettersObj[sentence[i]] = 1
  }
  }
  for (let key in lettersObj){
    keyCount += 1
    console.log(keyCount)
  }
  if(keyCount == 26){
    console.log('this is a panagram')
    return true
  }else if(keyCount > 26){
    console.log("please remove any special characters like (!,.?) as well as any capital letters and try running again")
    return false
  }
  console.log('not a panagram')
  return false
}


// pangram(testSentence)


//problem 4 --- runtime O(n)

let longestLength = {
  length : 0
}
let longWord = ''
let testList = ['hi','hello','nice','to','meet','you','goodbye','cya']
longestWord = (wordList) => {
    wordList.forEach(word => {
      if(longestLength.length < word.length){
        longestLength.length = word.length
        longWord = word
      }
    });
    console.log(`the longest word in the list is ${longWord}`)
}
// longestWord(testList)
// 