const addBtn = document.getElementById("add-btn");
const cancelBtn = document.getElementById("cancel-btn");
const editBtn = document.getElementById("edit-btn");
const deleteBtn = document.getElementById("delete-btn");
const deleteAllBtn = document.getElementById("delete-all-btn");
const input = document.getElementById("input");
const listContainer = document.querySelector(".tree-view");
let listItems = document.querySelectorAll("li");
const form = document.querySelector("form");

let editElement;
let editFlag = false;

form.addEventListener("submit", addItem);
cancelBtn.addEventListener("click", cancelAction);
editBtn.addEventListener("click", editItem);
deleteBtn.addEventListener("click", deleteItem);
deleteAllBtn.addEventListener("click", deleteAllItems);

// functions
function addItem() {
  event.preventDefault();
  // check if an input contains only whitespace
  if (!input.value.replace(/\s/g, "").length) {
    return;
  }

  if (input.value && !editFlag) {
    const item = document.createElement("li");
    item.textContent = input.value;
    listContainer.appendChild(item);
    input.value = "";
  } else if (input.value && editFlag) {
    editElement.textContent = input.value;
    addBtn.textContent = "ADD";
    editFlag = false;
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

function editItem() {
  listItems.forEach((item) => {
    if (item.classList.contains("selected")) {
      editElement = item;
      input.value = editElement.innerHTML;
      editFlag = true;
      addBtn.textContent = "Edit";
    }
  });
}

function deleteItem() {
  if (listContainer.children.length > 0) {
    listItems.forEach((item) => {
      item.classList.contains("selected")
        ? item.parentNode.removeChild(item)
        : null;
    });
  }
}

function cancelAction() {
  input.value ? (input.value = "") : null;
  listItems.forEach((item) => item.classList.remove("selected"));
  editFlag = false;
  addBtn.textContent = "ADD";
}

function deleteAllItems() {
  listItems = document.querySelectorAll("li");
  listItems.forEach((item) => item.parentNode.removeChild(item));
}
