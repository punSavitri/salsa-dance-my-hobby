
//change theme of the body
let theme = "dark";
function toggleTheme() {
  if (theme === "light") {
    theme = "dark";
    document.querySelector("body").classList.add("dark");
  } else {
    theme = "light";
    document.querySelector("body").classList.remove("dark");
  }
}
let changeThemeButton = document.querySelector("#change-theme-button");
changeThemeButton.addEventListener("click", toggleTheme);

function order() {
  let question = prompt("Have you danced salsa before?");
  let name = prompt("What is your name?");
  let email = prompt("What is your email?");
  alert("Thank you " + name + "! We will be in touch soon with more details. Feel free to contact us if you have any questions punshakshi@gmail.com");
}

let getInTouchButton = document.querySelector("#get-in-touch-button");
getInTouchButton.addEventListener("click", order);