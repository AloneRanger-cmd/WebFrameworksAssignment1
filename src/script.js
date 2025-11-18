//Script to shuffle songs in playlist page//
//Array element to hold songs//
document.getElementById('add-btn').addEventListener('click', function() {
        const newTodo = document.getElementById('new-todo').value;
        if (newTodo.trim() === '') return;
        const li = document.createElement('li');
        li.textContent = newTodo;
        document.getElementById('todo-list').appendChild(li);
        document.getElementById('new-todo').value = '';
      });
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
