let ACStatus = false;
let ACSpeed = 0;
let ACtemp = 18;
function openAC() {
  ACStatus = true;
  ACSpeed = 1;
  console.log(`AC is opened and AC speed : 1`);
}
function closeAC() {
  ACStatus = false;
  ACSpeed = 0;
  console.log(`AC is closed and AC speed : 0`);
}
function toggleAC() {
  if (ACStatus) {
    closeAC();
  } else {
    openAC();
  }
}
function increasetemp() {
  if (ACStatus && ACtemp < 29) {
    ACtemp += 1;
    console.log(`AC temp : ${ACtemp}`);
  }
}
function decreasetemp() {
  if (ACtemp <= 29 && ACStatus && ACtemp > 18) {
    ACtemp -= 1;
    console.log(`AC temp : ${ACtemp}`);
  }
}
function speed() {
  if (ACStatus && ACSpeed < 3) {
    ACSpeed += 1;
    console.log(`AC speed : ${ACSpeed}`);
  }
}
