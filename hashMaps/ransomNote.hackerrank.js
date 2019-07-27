/* Evil guy wants to write a ransom note using words found in a magazine,
   does he have enough words to write out his note?
*/

function checkMagazine(magazine, note) {
    let counter = {};
    magazine.forEach(word => {
        if (counter.hasOwnProperty(word)) {
            counter[word]++;
        } else { 
            counter[word] = 1;
        }
    });

    for (let i = 0; i < note.length; i++) { 
        let word = note[i];
        if (counter.hasOwnProperty(word) && counter[word] > 0) {
            counter[word]--;
        } else {
            console.log("No"); return;
        }        
    }
    console.log("Yes"); return;
}