let toggleStatus = false;

let toggle = function() {
  let getSidebar = document.querySelector(".sidebar");
  let getSidebarUl = document.querySelector(".sidebar ul");
  let getSidebarTitle = document.querySelector(".sidebar span");
  let getSidebarLink = document.querySelectorAll(".sidebar a");

  if (toggleStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "272px";
    getSidebarTitle.style.opacity = "0.5";

    let arrayLength = getSidebarLink.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLink[i].style.opacity = "1";
    }

    toggleStatus = true;
  }

  else if (toggleStatus === true) {
    getSidebar.style.width = "0px";
    getSidebarTitle.style.opacity = "0";

    let arrayLength = getSidebarLink.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLink[i].style.opacity = "0";
    }

    getSidebarUl.style.visibility = "hidden";

    toggleStatus = false;
  }
}
