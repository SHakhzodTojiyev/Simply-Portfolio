// JavaScript HTML DOM Elements
const toggleBtn = document.getElementById("toggle-btn");


// Add Event Listener
toggleBtn.addEventListener("click", toggleSwitchBtn);

// Functions
function toggleSwitchBtn() {
  if(toggleBtn.src.indexOf('toggle-btn-dark.svg')!=-1){
     toggleBtn.src = "./assets/images/toggle-btn-white.svg";
  }else {
    toggleBtn.src = "./assets/images/toggle-btn-dark.svg";
  }
};
                      
