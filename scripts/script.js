//Skriver ut det som ska på "display"
function dis(value) {
  document.getElementById("display").value += value;
}
//Räknar ut allt
function solve() {
  let x = document.getElementById("display").value;
  let result = eval(x);

  // Kontrollera om resultatet är ett decimaltal
  if (result % 1 !== 0) {
    result = result.toFixed(3); // Avrunda till 3 decimaler
  }
  
  document.getElementById("display").value = result;
}

//Kallar på "clr"
  function clr() {
  document.getElementById("display").value = ""
}
 //Backspace
  function backspace() {
    let display = document.getElementById("display").value;
    document.getElementById("display").value = display.substring(0, display.length - 1);
}