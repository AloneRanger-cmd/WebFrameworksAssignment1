//Script to shuffle songs in playlist page//
//Array element to hold songs//
const array = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
      userInput = document.querySelector("#users");
//Display array elements in list//

if (Array.isArray(array)) {
    // use join for a controlled separator, or JSON for nested/object values
    document.getElementById("demo").textContent = array;
} else if (array == null) {
    document.getElementById("demo").textContent = "";
}

//Event listener to add names to array//
document.querySelector("#btn").addEventListener("click", (e) => {
    e.preventDefault();
    myarray.push(...userInput.value.split(",").map(s => s.trim()));


});

// Fisher-Yates Shuffle Algorithm From Wiki//
function shuffleArray(array) {
    for (let i = array.length - 1; i >= 1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

<button onclick="shuffleArray()">Shuffle Names</button>
