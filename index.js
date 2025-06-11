let ACStatus = false;
let ACSpeed = 0;
let ACtemp = 18;
function openAC() {
  ACStatus = true;
  console.log(`AC is opened`);
}
function closeAC() {
  ACStatus = false;
  console.log(`AC is closed `);
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
function Speed() {
  if (ACStatus) {
    ACSpeed = (ACSpeed % 3) + 1;
    console.log(`AC Speed is: ${ACSpeed}`);
  }
}
