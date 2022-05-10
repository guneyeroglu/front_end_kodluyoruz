let mySVG = `<svg class="selected-list-item" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>`;

let myUL = document.querySelector("ul");
myUL.classList.add("list-item-fixed");
if (localStorage.getItem("myItems") == null) {
  localStorage.setItem("myItems", JSON.stringify([]));
}
let storedList = JSON.parse(localStorage.getItem("myItems"));

myUL.innerHTML = "";

storedList.forEach((stored) => {
  myUL.innerHTML += `<li>${stored}</li>`;
});

let myLI = document.querySelectorAll("li");
let booleanValue = false;

if (storedList.length == 0) {
  booleanValue = true;
}
myLI.forEach((element) => {
  element.addEventListener("click", checkedElement);
  if (booleanValue) {
    storedList.push(element.innerHTML);
  }
});

localStorage.setItem("myItems", JSON.stringify(storedList));

function checkedElement() {
  if (this.classList.contains("checked")) {
    this.classList.remove("checked");
    this.innerHTML = this.innerHTML.replace(mySVG, "");
  } else {
    this.classList.add("checked");
    if (!this.innerHTML.includes(mySVG)) {
      this.innerHTML += mySVG;
      this.querySelector(".selected-list-item").addEventListener(
        "click",
        removeLI
      );
    }
  }
}

function removeLI() {
  let elementContent = this.parentElement.innerHTML.replace(mySVG, "");
  storedList.splice(storedList.indexOf(elementContent), 1);
  myUL.removeChild(this.parentElement);
  localStorage.setItem("myItems", JSON.stringify(storedList));
}
function newElement() {
  let taskDOM = document.querySelector("#task");
  if (taskDOM.value.trim()) {
    let task = document.createElement("li");
    task.addEventListener("click", checkedElement);
    task.innerHTML = taskDOM.value;
    myUL.appendChild(task);
    storedList.push(task.innerHTML);
    localStorage.setItem("myItems", JSON.stringify(storedList));
    taskDOM.value = "";
    $(document).ready(function () {
      $(".toast").toast("hide");
    });
  } else {
    console.log("error");
    $(document).ready(function () {
      $(".toast").toast("show");
    });
  }
}
