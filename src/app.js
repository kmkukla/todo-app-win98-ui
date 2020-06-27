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
window.addEventListener("DOMContentLoaded", setUpItems);

// functions
function addItem() {
  event.preventDefault();
  // check if an input contains only whitespace
  if (
    !input.value.replace(/\s/g, "").length ||
    checkIfAlreadyExists(input.value)
  ) {
    return;
  }
  if (input.value && !editFlag) {
    const item = document.createElement("li");
    item.textContent = input.value;
    listContainer.appendChild(item);
    addToLocalStorage(input.value);
    input.value = "";
  } else if (input.value && editFlag) {
    editLocalStorage(editElement.textContent);
    editElement.textContent = input.value;
    addBtn.textContent = "ADD";
    editFlag = false;
    input.value = "";
  }
  makeElemsSelectable();
}

function makeElemsSelectable() {
  listItems = document.querySelectorAll("li");
  listItems.forEach((item) =>
    item.addEventListener("click", function (e) {
      listItems.forEach((elem) => elem.classList.remove("selected"));
      e.currentTarget.classList.add("selected");
    })
  );
}

function checkIfAlreadyExists(val) {
  listItems = document.querySelectorAll("li");
  let itemsArray = [];
  listItems.forEach((item) => {
    itemsArray.push(item.textContent);
  });
  return itemsArray.some((item) => item === val);
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
      if (item.classList.contains("selected")) {
        removeFromLocalStorage(item.textContent);
        item.parentNode.removeChild(item);
      }
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
  localStorage.removeItem("list");
}

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

function editLocalStorage(val) {
  let items = getLocalStorage();
  items = items.map((item) => {
    if (item === val) {
      item = input.value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}

function addToLocalStorage(val) {
  const item = val;
  let items = getLocalStorage();
  items.push(item);
  localStorage.setItem("list", JSON.stringify(items));
}

function removeFromLocalStorage(val) {
  let items = getLocalStorage();
  items = items.filter((item) => item !== val);
  localStorage.setItem("list", JSON.stringify(items));
}

function setUpItems() {
  let items = getLocalStorage();
  items.forEach((item) => {
    const elem = document.createElement("li");
    elem.textContent = item;
    listContainer.appendChild(elem);
  });
  makeElemsSelectable();
}
