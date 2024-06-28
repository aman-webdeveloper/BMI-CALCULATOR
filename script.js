function CalculateBMI() {
  var height = document.getElementById("hieght-input").value;
  var weight = document.getElementById("weight-input").value;

  // Check if height or weight is empty
  if (height === "" || weight === "") {
    alert("Enter the data👇");
    return;
  }

  var result = parseFloat(weight) / (parseFloat(height) / 100) ** 2;
  if (!isNaN(result)) {
    document.getElementById("bmi-output").innerHTML = result.toFixed(2);
    if (result < 18.5) {
      document.getElementById("bmi-status").innerHTML = "Underweight";
    } else if (result < 25) {
      document.getElementById("bmi-status").innerHTML = "Healthy";
    } else if (result < 30) {
      document.getElementById("bmi-status").innerHTML = "Overweight";
    } else {
      document.getElementById("bmi-status").innerHTML = "Obesity";
    }
  }
}
