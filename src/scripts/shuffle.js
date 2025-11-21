//Array and list js file//
let array= ["1", "2", "3", "4", "5"];
// Add new item to the list//

// Fisher-Yates Shuffle Algorithm From Wiki//
function shuffleArray(array) {
    for (let i = array.length - 1; i >= 1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
shuffleArray(array);
console.log(array);
