//nickname generator

//HTML elements variables
let FNameIn = document.getElementById("first")
let LNameIn = document.getElementById("last")
let OutputEl = document.getElementById("output");
let GEN = document.getElementById('btn-1');
let GENALL = document.getElementById('btn-2');

// Event Listener
GEN.addEventListener('click', Generate);
GENALL.addEventListener('click', GenerateAll);

// Global variables
let FNameOut = "";
let LNameOut = "";

//Array
let Nick = ["Strong", "Smart", "Intresting", "Shinobi", "Silent", "Loud", "Master", "Immovable", "Unstopable", "Limit Breaker"];

// Nickname Generator functions
function Generate() {
  // get first and last name
  FNameOut = FNameIn.value;
  LNameOut = LNameIn.value;

  //Generate Random Number
  let x = 0;
  x = Math.floor(Math.random()*10);

  //Nickname Output
  if(FNameOut == ""|| LNameOut == "") {
    OutputEl.innerHTML = "Please Enter your First and Last name"
  }else {
    OutputEl.innerHTML = FNameOut + " " + LNameOut + " the " + Nick[x];
  }
} 

function GenerateAll() {
  //get first and last name
  FNameOut = FNameIn.value;
  LNameOut = LNameIn.value;

  //Clear Output
  //OutputEl.innerHTML = "";
  let OutputString = "";
  //output Nicknames

  for(let i = 0; i < Nick.length; i++) {
    OutputString += FNameOut + " " + LNameOut + " the " + Nick[i] + ",    ";
  }
  OutputEl.innerHTML = OutputString;
}

