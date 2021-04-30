//nickname generator

//HTML elements variables
let FNameIn = document.getElementById("first")
let LNameIn = document.getElementById("last")
let OutputEl = document.getElementById("output");
let x = 0;

// Event Listener
document.getElementById('btn').addEventListener('click', generate)

//Array
let Nick = ["Strong", "Smart", "Intresting", "Shinobi", "Silent", "Loud", "Master", "Immovable", "Unstopable", "Limit Breaker"];

// Nickname Generator functions
function generate() {
  x = Math.random()*10;
  RandomNumGen();
  console.log(x);
  let FNameOut = FNameIn.value ;
  let LNameOut = LNameIn.value;
  if(FNameOut == ""|| LNameOut == "" ){
    OutputEl.innerHTML = "Please Enter your First and Last name"
  }else {
    OutputEl.innerHTML = FNameOut + " " + LNameOut + " " + "the" + " " + Nick[x];
  }
} 


