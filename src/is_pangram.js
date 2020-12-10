
const isPangram = function(text) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  const letters = text.toLowerCase().split('');
  const letterCount = {};

  letters.forEach(char => {
    
    if(letterCount[char]){
      letterCount[char] += 1;
    }
    else{
      letterCount[char] = 1;
    }

  })
  console.log(letterCount);
  for (const letter of alpha){
    if(!letterCount[letter]){
      console.log(letter);
      return false;
    }
  }
  return true;
};

module.exports = isPangram;
