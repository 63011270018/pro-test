const Api = (() => {
    function initial(method = "GET") {
      return {
        method: method,
        headers: {
          Accept: "application/json",
        },
      };
    }
    return {
      async get(url) {
        let init = initial("GET");
        let response = await fetch(url, init);
        let result = await response.json();
        return result;
      },
      async delete(url) {
        let token = $("#token").val();
        let init = initial("DELETE");
        init.headers["X-CSRF-TOKEN"] = token;
        let response = await fetch(url, init);
        let result = await response.json();
  
        return result;
      },
      async post(url, data) {
        let token = $("#token").val();
        let init = initial("POST");
        init.headers["X-CSRF-TOKEN"] = token;
        init.body = JSON.stringify(data);
        let response = await fetch(url, init);
        let result = await response.json();
        //   if (result.errorCode === undefined) {
        //     throw "มีบางอย่างผิดพลาด";
        //   }
        //   if (result.errorCode == 100) {
        //     window.location.href = "/admin/login";
        //     return null;
        //   }
        //   if (result.errorCode !== 0) {
        //     throw result.errorMessage;
        //   }
        return result;
      },
      async postFormdata(url, data) {
        let init = initial("POST");
        delete init.headers["Content-Type"];
        console.log(init);
        init.headers["X-CSRF-TOKEN"] = $("#token").val();
        init.body = data;
        let response = await fetch(url, init);
        let result = await response.json();
        //   if (result.errorCode === undefined) {
        //     throw "มีบางอย่างผิดพลาด";
        //   }
        //   if (result.errorCode == 100) {
        //     window.location.href = "/admin/login";
        //     return null;
        //   }
        //   if (result.errorCode !== 0) {
        //     throw result.errorMessage;
        //   }
        return result;
      },
    };
  })();
  