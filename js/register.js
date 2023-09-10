$("#btn-register").on("click", async function () {
    const data = {
      first_name: $("#first_name").val(),
      last_name: $("#last_name").val(),
      email: $("#email").val(),
      password: $("#password").val(),
    };
  
    $.ajax({
      type: "POST",
      url: "http://localhost/pro-test/process/register.php",
      data: { data },
      success: function (response) {
        Swal.fire("สมัครสมาชิกสำเร็จสำเร็จ!", ``, "success");
      },
      error: function (error) {
        console.error(error);
      },
    });
  });
  