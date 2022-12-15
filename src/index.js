// JavaScript HTML DOM Elements
const root = document.getElementById("root");
const toggleBtn = document.getElementById("toggle-btn");
const iconGit = document.getElementById("icon-git");
const iconTwitter = document.getElementById("icon-twitter");
const iconLinkedin = document.getElementById("icon-linkedin");
const iconYoutube = document.getElementById("icon-youtube");

// Add Event Listener
toggleBtn.addEventListener("click", toggleSwitchBtn);

// Functions
function toggleSwitchBtn() {
  if (toggleBtn.src.indexOf("toggle-btn-dark.svg") != -1) {
    toggleBtn.src = "./assets/images/toggle-btn-white.svg";
    iconGit.src = "./assets/images/icons/git-white.svg";
    iconTwitter.src = "./assets/images/icons/twitter-white.svg";
    iconLinkedin.src = "./assets/images/icons/linkedin-white.svg";
    iconYoutube.src = "./assets/images/icons/youtube-white.svg";
    root.classList.add("dark");
  } else {
    toggleBtn.src = "./assets/images/toggle-btn-dark.svg";
    iconGit.src = "./assets/images/icons/git-dark.svg";
    iconTwitter.src = "./assets/images/icons/twitter-dark.svg";
    iconLinkedin.src = "./assets/images/icons/linkedin-dark.svg";
    iconYoutube.src = "./assets/images/icons/youtube-dark.svg";
    root.classList.remove("dark");
  }
}

console.log(root);
