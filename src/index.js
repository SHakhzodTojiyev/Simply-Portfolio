// JavaScript HTML DOM Elements
const root = document.getElementById("root");
const toggleBtn = document.getElementById("toggle-btn");


// Add Event Listener
toggleBtn.addEventListener("click", toggleSwitchBtn);

// Functions
function toggleSwitchBtn() {
  if(toggleBtn.src.indexOf('toggle-btn-white.svg')!=-1){
     toggleBtn.src = "./assets/images/toggle-btn-dark.svg";
     root.classList.add("dark")
  }else {
    toggleBtn.src = "./assets/images/toggle-btn-white.svg";
    root.classList.remove("dark")
  }
};
               
console.log(root);
