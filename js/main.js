window.onload= function () {

  var dropdown= document.getElementById("dropdown");
  var submenu = document.getElementById("submenu");

  dropdown.onmouseover= function() {
    submenu.style.display="block";

  }
  dropdown.onmouseout= function() {
    submenu.style.display="none";
  }

}
