// nav bar toggle and

//mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

// fetch api not this

const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get("id"));
const lesson = lessons.find((l) => l.id === id);

if (lesson) {
  document.getElementById("lesson-title").textContent = lesson.title;
  document.getElementById("lesson-img").src = lesson.img;
  document.getElementById("lesson-info").textContent = lesson.info;

  const goalsList = document.getElementById("lesson-goals");
  goalsList.innerHTML = "";
  lesson.goals.forEach((goal) => {
    const li = document.createElement("li");
    li.textContent = goal;
    goalsList.appendChild(li);
  });
} else {
  document.querySelector("main").innerHTML = "<p>⚠️ الدرس غير موجود</p>";
}
