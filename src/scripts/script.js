//Array and list js file//
let array= ["1", "2", "3", "4", "5"];

// Add new item to the list//
document.getElementById("addMusic").addEventListener("click", function() {
    const input = document.getElementById("musicInput");
    const newItem = input.value.trim();
    if (newItem !== "") {
        array.push(newItem); // Add to array as well
        renderList();
        input.value = "";
    }
});

// Function to render the list from the array
function renderList() {
const listElement = document.getElementById("list");
const fragment = document.createDocumentFragment();
array.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    fragment.appendChild(li);
});
listElement.appendChild(fragment);
    listElement.innerHTML = array.map(item => `<li>${item}</li>`).join("");
}

// Fisher-Yates Shuffle Algorithm From Wiki//
function shuffleArray(array) {
    for (let i = array.length - 1; i >= 1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Shuffle button functionality//
document.getElementById("shuffleButton").addEventListener("click", function() {
    const shuffledArray = shuffleArray(array.slice());
    alert("Shuffled Array: " + shuffledArray.join(", "));
});
