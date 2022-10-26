function sendmail() {
    let email = document.getElementById("sender_email");
    let name = document.getElementById("sender_name");
    let sub = document.getElementById("subject");
    let msg = document.getElementById("msg");
    let submit = document.getElementById("email_btn");
    submit.addEventListener("click", () => {
      if (email.value == "" || name.value=="" || sub.value=="" || msg.value=="" ) {
        error();
      } else {
        sendEmail();
        alert("Message sent successfully!")
        let form = document.getElementById("formm");
        form.reset();
      }
    });
  }


  sendmail();
  function error() {
    alert("Please fill all the details");
  }
  function sendEmail() {
    var templateParams = {
      from_name: document.getElementById("sender_name").value,
      sub: document.getElementById("subject").value,
      to_name: "Padmanabh Desai",
      mesg: document.getElementById("msg").value,
      from_email: document.getElementById("sender_email").value,
    };
  
    emailjs.send("service_jryx9iq", "template_p6s9hrk", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  }
