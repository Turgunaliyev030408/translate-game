const olmaBtn = document.querySelector("#apple");
const appleBtn = document.querySelector("#olma");
const bananBtn = document.querySelector("#banana");
const bananaBtn = document.querySelector("#banan");
const pamidorBtn = document.querySelector("#tomato");
const tomatoBtn = document.querySelector("#pamidor");

let tanSoz = null;

olmaBtn.addEventListener("click", () => {
  if (tanSoz) {
    if (tanSoz == olmaBtn.id) {
      olmaBtn.className = "green";
    } else {
      olmaBtn.className = "red";
    }
  } else {
    tanSoz = olmaBtn.textContent;
    olmaBtn.className = "orange";
  }
});

appleBtn.addEventListener("click", () => {
  if (tanSoz) {
    if (tanSoz == appleBtn.id) {
      appleBtn.className = "green";
    } else {
      appleBtn.className = "red";
    }
  } else {
    tanSoz = appleBtn.textContent;
    appleBtn.className = "orange";
  }
});

bananaBtn.addEventListener("click", () => {
  if (tanSoz) {
    if (tanSoz == bananaBtn.id) {
      bananaBtn.className = "green";
    } else {
      bananaBtn.className = "red";
    }
  } else {
    tanSoz = bananaBtn.textContent;
    bananaBtn.className = "orange";
  }
});

bananBtn.addEventListener("click", () => {
  if (tanSoz) {
    if (tanSoz == bananBtn.id) {
      bananBtn.className = "green";
    } else {
      bananBtn.className = "red";
    }
  } else {
    tanSoz = bananBtn.textContent;
    bananBtn.className = "orange";
  }
});

tomatoBtn.addEventListener("click", () => {
  if (tanSoz) {
    if (tanSoz == tomatoBtn.id) {
      tomatoBtn.className = "green";
    } else {
      tomatoBtn.className = "red";
    }
  } else {
    tanSoz = tomatoBtn.textContent;
    tomatoBtn.className = "orange";
  }
});

pamidorBtn.addEventListener("click", () => {
  if (tanSoz) {
    if (tanSoz == pamidorBtn.id) {
      pamidorBtn.className = "green";
    } else {
      pamidorBtn.className = "red";
    }
  } else {
    tanSoz = pamidorBtn.textContent;
    pamidorBtn.className = "orange";
  }
});
