function harmlessRansomNote(noteText, magText) {
  const noteArr = noteText.toLowerCase().split(' ');
  const magArr = magText.toLowerCase().split(' ');
  let magObj = {};
  let noteIsPossible = true;
  console.log(noteArr)
  console.log(magArr)

  magArr.forEach(word => {
    if (!magObj[word]) magObj[word] = 0;
    magObj[word]++
    console.log('magObj', magObj[word])

  });
  noteArr.forEach(word => {
    if (magObj[word]) {
      magObj[word]--;
      if (magObj[word] < 0) noteIsPossible = false
    } else noteIsPossible = false
  });
  return noteIsPossible;
}

let teste = harmlessRansomNote('Texto Base', 'Texto comparado Base')
console.log(teste)