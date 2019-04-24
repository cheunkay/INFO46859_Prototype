/* JJ Bastida's JS code for toggling visibility of GDS phases */

var dropdowns = document.getElementsByClassName("dropdown");
for (i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener("click", function () {
        
        if (this.parentElement.children[2].style.visibility == "visible") {
            this.parentElement.children[2].style.visibility = "hidden";
            this.children[0].innerHTML = "▼"
        }
        else if (this.parentElement.children[2].style.visibility == "hidden" || this.parentElement.children[2].style.visibility == "") {
            this.parentElement.children[2].style.visibility = "visible";
            this.children[0].innerHTML = "▲"
        }
    })
}