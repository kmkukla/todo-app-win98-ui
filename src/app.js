const addBtn = document.getElementById("add-btn");
const cancelBtn = document.getElementById("cancel-btn");
const deleteBtn = document.getElementById("delete-btn");
const deleteAllBtn = document.getElementById("delete-all-btn");
const input = document.getElementById("input");
const listContainer = document.querySelector(".tree-view");
let listItems = document.querySelectorAll("li");

addBtn.addEventListener("click", addItem);
cancelBtn.addEventListener("click", cancelAction);
deleteBtn.addEventListener("click", deleteItem);
deleteAllBtn.addEventListener("click", deleteAllItems);

// functions
function addItem() {
  if (input.value) {
    const item = document.createElement("li");
    item.textContent = input.value;
    listContainer.appendChild(item);
    input.value = "";
  }
  listItems = document.querySelectorAll("li");
  listItems.forEach((item) =>
    item.addEventListener("click", function (e) {
      listItems.forEach((elem) => elem.classList.remove("selected"));
      e.currentTarget.classList.add("selected");
    })
  );
}

function deleteItem() {
  listItems.forEach((item) => {
    item.classList.contains("selected")
      ? item.parentNode.removeChild(item)
      : null;
  });
}

function cancelAction() {
  input.value ? (input.value = "") : null;
  listItems.forEach((item) => item.classList.remove("selected"));
}

function deleteAllItems() {
  listItems = document.querySelectorAll("li");
  listItems.forEach((item) => item.parentNode.removeChild(item));
}
