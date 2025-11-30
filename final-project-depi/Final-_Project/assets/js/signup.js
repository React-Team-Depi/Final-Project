// salma

const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');
const body = document.body;

document.getElementById('toggle').addEventListener('click', () => {
  body.classList.toggle('dark');
  
  if (body.classList.contains('dark')) {
    moonIcon.style.display = 'inline';
    sunIcon.style.display = 'none';
  } else {
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'inline';
  }
});
const form = document.getElementById("signupForm");

$(function () {
    $("#country").countrySelect({
      defaultCountry: "eg",
    });
  });

  
form.addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;

    const arName = document.getElementById("arName").value;
    if (!/^[\u0621-\u064A]+( [\u0621-\u064A]+)*$/.test(arName)) {

        document.getElementById("arNameError").textContent ="الاسم بالعربية يجب أن يحتوي على ٢–٣٠ حرفًا عربيًا فقط";
        document.getElementById("arNameError").textContent =
            "الاسم بالعربية يجب أن يحتوي على ٢–٣٠ حرفًا عربيًا فقط";
        valid = false;
    } else {
        document.getElementById("arNameError").textContent = "";
    }

    const enName = document.getElementById("enName").value;
    if (!/^[a-zA-Z0-9 ]{3,12}$/.test(enName)) {
        document.getElementById("enNameError").textContent =
            "Username must be 3-12 letters or numbers";
        valid = false;
    } else {
        document.getElementById("enNameError").textContent = "";
    }

    const email = document.getElementById("email").value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").textContent =
            "Enter a valid email address";
        valid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    const password = document.getElementById("password").value;
    if (!/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
        document.getElementById("passwordError").textContent =
            "Password must be 8+ chars, include 1 uppercase & 1 number";
        valid = false;
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById("genderError").textContent = "Please select a gender";
        valid = false;
    } else {
        document.getElementById("genderError").textContent = "";
    }

}

)