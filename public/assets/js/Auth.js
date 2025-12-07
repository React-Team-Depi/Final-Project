// omar goher


let button = document.querySelector(".btn-submit");
let emailInput = document.querySelector(".email");
let passInput = document.querySelector(".pass");
let alert1 = document.querySelector(".alert1");
let emailerr = document.querySelector(".emailerr");
let passerr = document.querySelector(".passerr");

button.addEventListener("click", (e) => {
  let email = emailInput.value.trim();
  let pass = passInput.value.trim();
  alert1.innerHTML = "";
  emailerr.innerHTML = "";
  passerr.innerHTML = "";

  if (email === "" && pass === "") {
    alert1.innerHTML = `<p class="alert alert-danger text-center mt-2">Please enter Email and Password</p>`;
    e.preventDefault();
  } else if (email === "") {
    emailerr.innerHTML = `<p class="alert alert-danger text-center mt-2">Please enter Email</p>`;
    e.preventDefault();
  } else if (pass === "") {
    passerr.innerHTML = `<p class="alert alert-danger text-center mt-2">Please enter Password</p>`;
    e.preventDefault();
  }
});



