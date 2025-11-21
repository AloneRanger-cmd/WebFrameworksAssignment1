//Array and list js file//
let list= ["1", "2", "3", "4", "5"];
// Add new item to the list//
document.getElementById("addMusic").addEventListener("click", function() {
    const input = document.getElementById("countryInput");
    const newItem = input.value.trim();
    if (newItem !== "") {
        const listElement = document.getElementById("list");
        const li = document.createElement("li");
        li.textContent = newItem;
        listElement.appendChild(li);
        input.value = "";
    }
});
// Get current list items//
document.getElementById("getList").
addEventListener("click", function() {
    const items = document.querySelectorAll("#list li");
    const currentList = [];
    items.forEach(item => {
        currentList.push(item.textContent);
    });
    console.log(currentList);
});
console.log(list);