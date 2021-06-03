//pair programmed with Bernard Young

const wordSearch = (letters, word) => {
  if (letters.length !== 0) {
    let verticalArray = [];
    for (let i = 0; i < letters[0].length; i++) {
      verticalArray.push([]);
    }

    for (i = 0; i < letters.length; i++) {
      for (j = 0; j < letters[i].length; j++) {
        verticalArray[j].push(letters[i][j]);
      }
    }

    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = verticalArray.map(ls => ls.join(''));

    for (let row of horizontalJoin) {
      for (let column of verticalJoin) {
        if (row.includes(word) && column.includes(word)) {
          return true;
        }
            
      }
    }
  }
  return false;
}



module.exports = wordSearch;