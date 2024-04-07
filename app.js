let count = 0;
function countColor(count) {
  if (count > 0) {
    document.getElementById("Count").style.color = "green";
  } else if (count < 0) {
    document.getElementById("Count").style.color = "red";
  } else {
    document.getElementById("Count").style.color = "black";
  }
}
document.getElementById("Increase").addEventListener("click", () => {
  document.getElementById("Count").innerHTML = count + 1;
  count++;
  countColor(count);
});
document.getElementById("Decrease").addEventListener("click", () => {
  document.getElementById("Count").innerHTML = count - 1;
  count--;
  countColor(count);
});
document.getElementById("Reset").addEventListener("click", () => {
  document.getElementById("Count").innerHTML = 0;
  count = 0;
  countColor(count);
});
