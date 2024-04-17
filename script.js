function loadNavbarAndFooter() {
    var xhrFooter = new XMLHttpRequest();
    xhrFooter.open("GET", "footer.html", true);
    xhrFooter.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("footer-placeholder").innerHTML = this.responseText;
        }
    };
    xhrFooter.send();
}
document.addEventListener("DOMContentLoaded", function () {
    loadNavbarAndFooter();
});