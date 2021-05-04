var cocolPics = document.querySelectorAll(".cocacolapic");

for (cocolPic of cocolPics) {
    cocolPic.addEventListener("click", extensionPic, false);
    cocolPic.addEventListener("mouseout", reductionPic, false);
}
function extensionPic() {   
    this.style.width = "700px"; 
}

function reductionPic() {
    this.style.width = "270px";
}  


