$("#btn-login").on("click", async function () {
  const data = {
    email: $("#emailLogin").val(),
    password: $("#passwordlLogin").val(),
  };

  $.ajax({
    type: "POST",
    url: "process/login.php",
    data: { data },
    success: function (response) {
      if (response.status == "success") {
        localStorage.setItem("first_name", response.user_data.first_name);
        localStorage.setItem("last_name", response.user_data.last_name);
        localStorage.setItem("user_data", response.user_data.id);
        localStorage.setItem("role", response.user_data.role);
        $("#emailLogin").val("");
        $("#passwordlLogin").val("");
        $(".btn-signin").addClass("d-none");
        $("#profile").removeClass("d-none");
        if (response.user_data.role == "admin") {
          // Swal.fire("เข้าสู่ระบบสำเร็จสำเร็จ!", "", "success");
          setTimeout(function () {
            $("#exampleModal").modal("hide");
            window.location.href = "index-travel.html";
          }, 2000);
        } else {
          // Swal.fire("เข้าสู่ระบบสำเร็จสำเร็จ!", "", "success");
          setTimeout(function () {
            $("#exampleModal").modal("hide");
            window.location.href = "index-travel.html";
          }, 2000);
        }
      } else {
        Swal.fire(
          "เข้าสู่ระบบไม่สำเร็จสำเร็จ!",
          `${response.message}`,
          "error"
        );
        // setTimeout(function () {
        //   location.reload();
        // }, 2000);
      }
    },
    error: function (error) {
      console.error(error);
    },
  });
});
