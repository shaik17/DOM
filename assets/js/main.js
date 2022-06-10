const button = document.getElementById("input_button");
const inputValue = document.getElementById("input_food_name");
const foodContainer = document.getElementById("food_container");
const alert = document.getElementById("alert");
const list_item = document.getElementById("list_item");

const foodItems = () => {
  if (foodContainer.children.length > 0) {
    list_item.className = "";
  } else {
    list_item.className = "display-none";
  }
  button.addEventListener("click", () => {
    if (inputValue.value.length > 0) {
      const li = document.createElement("li");
      const divitem = document.createElement("div");
      const divEdit = document.createElement("div");
      const createNode = document.createTextNode(inputValue.value);
      li.className = "food_item";
      divitem.append(createNode);
      divEdit.innerHTML = `<div class="fa-solid fa-xmark"></div>`;
      li.append(divitem);
      li.append(divEdit);
      foodContainer.append(li);
      divEdit.addEventListener("click", () => {
        deletefuncton(divEdit);
      });
      if (foodContainer.children.length > 0) {
        list_item.className = "";
      } else {
        list_item.className = "display-none";
      }
      clearFunction("Food item is update");
    } else {
      const h4 = document.createElement("h4");
      const createError = document.createTextNode("Enter your food name");
      h4.className = "danger";
      h4.append(createError);
      alert.append(h4);
      setTimeout(() => {
        alert.innerText = "";
      }, 1000);
    }
  });
};

const deletefuncton = (divEdit) => {
  divEdit.parentElement.remove();
  if (foodContainer.children.length > 0) {
    list_item.className = "";
  } else {
    list_item.className = "display-none";
  }
};

// clear input field
const clearFunction = (message) => {
  inputValue.value = "";
  const h4 = document.createElement("h4");
  const createNode = document.createTextNode(message);
  h4.className = "alert";
  h4.append(createNode);
  alert.append(h4);
  setTimeout(() => {
    alert.innerText = "";
  }, 1000);
};

// function run
foodItems();
