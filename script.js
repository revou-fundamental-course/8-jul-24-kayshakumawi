// this javascript

function updateResult(){
  let weightValue = document.getElementById('input-berat-badan').value;
  console.log(parseInt(weightValue) + 10);
  //jika weightvalue tidak sama dengan null
  if (weightValue != null && weightValue != '') {
    document.querySelector('#bmi-result').innerHTML = weightValue;
  } else {
    alert('inputan anda kosong!');
  }
}

// Function 
function calculateBMI($weight, $height) {
  // Convert height to meters
  $height = $height / 100;

  // Calculate BMI
  return $weight / ($height * $height);
}

// Check jika form ter-submit
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Retrieve user input
  $weight = $_POST["weight"];
  $height = $_POST["height"];

  // Calculate BMI
  $bmi = calculateBMI($weight, $height);

}