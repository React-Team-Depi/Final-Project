//  omar goher
let button = document.querySelector(".btn-go");
let input = document.querySelector(".inp");
let err = document.querySelector(".nameerr");

button.addEventListener("click", (e) => {
  let play = document.querySelector(".play");
  let inputEnter = input.value.trim();
  err.innerHTML = "";
  play.innerHTML = "";
  input.classList.remove("errr");

  if (inputEnter === "") {
    err.innerHTML = `<p class="text-danger text-end fs-6">يجب إدخال اسم اللعب</p>`;
    input.classList.add("errr");
    e.preventDefault();
    return;
  }

  setInterval(() => {
    window.location.href = "question.html";
  }, 5000);

  play.innerHTML = `
  
                <div class="alert alert-success my-3 alert-dismissible  fade show text-end" role="alert">
                <h3 class=' text-center  '>مرحبًا ${inputEnter}</h3>
                <h3 class=' text-center  '>بعد ثواني  يتم تحويللك الي الاختبار </h3>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                
                `;
});