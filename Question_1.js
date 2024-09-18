function hasAllUniqueCharacters(text) {
  for (let i = 0; i < text.length; i++) {
    for (let j = i + 1; j < text.length; j++) {
      if (text[i] === text[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(hasAllUniqueCharacters("hello"));
console.log(hasAllUniqueCharacters("world"));
