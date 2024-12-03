function closeText() {
    document.getElementById("tips").style.opacity = 0;
    document.getElementById("opentext").style.display = "block";
    document.getElementById("closetext").style.display = "none";
}

function openText() {
    document.getElementById("tips").style.opacity = 100;
    document.getElementById("opentext").style.display = "none";
    document.getElementById("closetext").style.display = "block";
}

function earlyAccess() {
    alert("This page is being worked on and it will be released once the site is fully released.")
}
