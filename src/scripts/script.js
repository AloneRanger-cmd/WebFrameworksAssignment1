//Array and list js file//
// Get all list items with class="list"html present web hidden//
let list = document.getElementsByClassName("list");

// Create an array from the list items//
const array = [];

// Populate the array with list item contents//
for (let i = 0; i < list.length; i++) {
        array.push(list[i].innerHTML);
    }

// Add new songs to the list//
document.getElementById("addMusic").addEventListener("click", function() {
    let musicInput = document.getElementById("musicInput").value;
    if (musicInput) {
        array.push(musicInput);
        let li = document.createElement('li');
        li.innerText = musicInput;
        document.getElementById("myList").appendChild(li);
        // Clear input field//
        document.getElementById("musicInput").value = "";
    }
});

// Display the first paragraph with class="intro"//
document.getElementById("demo").innerHTML = 
'The first item on the list (index 0) with class="list" is: ' + list[0].innerHTML;

// Pre Render//
let data = array;
        let asd = document.getElementById("myList");
        for (i = 0; i < data.length; ++i) {
            let li = document.createElement('li');
            li.innerText = data[i];
            asd.appendChild(li);
        }

// Shuffle Function//
function shuffleArray(array) {
    // Fisher-Yates Shuffle Algorithm From Wiki//
    for (let i = array.length - 1; i >= 1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    // Update the displayed list after shuffling//
    let data = array;
        let content = document.getElementById("myList");
        // Remove previous list items to avoid duplicates//
        while (content.firstChild) {
        content.removeChild(asd.firstChild);
    }
        // Render shuffled list//
        for (i = 0; i < data.length; ++i) {
            let li = document.createElement('li');
            li.innerText = data[i];
            content.appendChild(li);
        }
    return array;
}

// Shuffle button event listener//
document.getElementById("shufflebtn").addEventListener("click", function() {
    shuffleArray(data);
    console.log(data);
});

