// let w = prompt("Enter number:56");
// console.log(w);
// msg = document.getElementById("text");
// msg.innerHTML = "Welcome to the page";
function convert() {
  let cm = Number(document.getElementById("input").value);
  let inches = cm / 2.54;
  let convertion = document.getElementById("result");
  convertion.innerHTML = inches.toFixed(2) + "Inches";
}
