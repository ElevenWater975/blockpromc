function closeText() {
    document.getElementById("allstuff-container").style.opacity = 0;
    document.getElementById("tips").style.opacity = 0;
    document.getElementById("opentext").style.opacity = 100;
    document.getElementById("selector").style.opacity = 0;
    document.getElementById("closetext").style.opacity = 0;
}

function openText() {
    document.getElementById("allstuff-container").style.opacity = 100;
    document.getElementById("tips").style.opacity = 100;
    document.getElementById("selector").style.opacity = 100;
    document.getElementById("closetext").style.opacity = 100;
    document.getElementById("opentext").style.opacity = 0;
}

function alreadyHere() {
    alert("You are already on this page.");
}
