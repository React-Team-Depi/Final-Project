// nav bar toggle
// const menuToggle = document.getElementById("menuToggle");
// const mobileMenu = document.getElementById("mobileMenu");

// if (menuToggle && mobileMenu) {
//   menuToggle.addEventListener("click", () => {
//     mobileMenu.classList.toggle("open");
//   });
// }

// قراءة الدرس من الـ array
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
  document.querySelector("main").innerHTML = "<p>⚠ الدرس غير موجود</p>";
}
const nextButton = document.querySelector(".button");

nextButton.addEventListener("click", () => {
  // البحث عن الدرس الحالي في الـ array
  const currentIndex = lessons.findIndex((l) => l.id === id);

  // تحديد الدرس التالي
  const nextLesson = lessons[currentIndex + 1];

  if (nextLesson) {
    // تغيير الـ URL ليحتوي على ID الدرس الجديد
    window.location.href = `?id=${nextLesson.id}`;
  } else {
    alert("✅ هذا هو آخر درس");
  }
});

// added by salah

const video = document.getElementById("camera");
const startBtn = document.getElementById("startBtn");

startBtn.onclick = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
    });
    video.srcObject = stream;
  } catch (err) {
    alert("⚠️ تم رفض الإذن أو لا توجد كاميرا متاحة.");
  }
};
