const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Looping through images */

for (let i = 1; i <= 5; i++) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", "/images/pic" + i + ".jpg");
  thumbBar.appendChild(newImage);

  newImage.addEventListener("click", function () {
    const source = newImage.src;
    displayedImage.setAttribute("src", source);
  });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", function () {
  className = btn.getAttribute("class");

  if (className === "dark") {
    console.log(btn.className);
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else if (this.className === "light") {
    console.log(btn.className);
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
});
