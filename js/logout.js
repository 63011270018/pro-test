let user_data = localStorage.getItem("user_data");
if (user_data.length > 0) {
  $("#button-login").addClass("d-none");
  $("#button-logout").removeClass("d-none");
} else {
  $("#button-login").removeClass("d-none");
  $("#button-logout").addClass("d-none");
}

function logout() {
  $("#button-login").removeClass("d-none");
  $("#button-logout").addClass("d-none");
  localStorage.setItem("user_data", "");
  localStorage.setItem("first_name", "");
  localStorage.setItem("last_name", "");
  localStorage.setItem("role", "");
  $(".btn-signin").removeClass("d-none");
  $("#profile").addClass("d-none");
  window.location.href = "/login.html";
}

let url = $(location).attr("pathname").split("/");
console.log(url[2]);

if (url[2] == "") {
  $(".active-cl").addClass("active-cl");
  $(".text-menu-navba-1").addClass("active-cl");
} else if (url[2] == "allroom.php") {
  $(".active-cl").addClass("active-cl");
  $(".text-menu-navba-2").addClass("active-cl");
} else if (url[2] == "contact.php") {
  $(".active-cl").addClass("active-cl");
  $(".text-menu-navba-3").addClass("active-cl");
}
