import React from "react";
import styles from "./calender.module.css";

function Calender() {
  return (
    <>
      <header>
        <div className={styles["container"] + " " + styles["top"]}>
          <h1 id="title">نظام حجز المواعيد</h1>

          <div className={styles["muted"]} id="subtitle">
            في حال وجود أي استفسار، تواصل معي
          </div>

          <button id="langBtn" style={{ width: "auto" }}>
            English
          </button>
        </div>
      </header>

      <main className={styles["container"]}>
        <div className={styles["grid"]}>
          <aside className={styles["sidebar"] + " " + styles["card"]}>
            <div>
              <label id="teacherLabel">اختر المدرس</label>
              <select id="teacherSelect" />
            </div>

            <div style={{ marginTop: 12 }}>
              <label id="detailsLabel">تفاصيل الحجز</label>
              <input id="studentName" placeholder="اسم الطالب" />
              <input
                id="studentEmail"
                placeholder="البريد الإلكتروني (اختياري)"
                style={{ marginTop: 8 }}
              />
              <textarea
                id="notes"
                rows={3}
                placeholder="ملاحظات (اختياري)"
                style={{ marginTop: 8 }}
              />
              <button id="confirmBtn" style={{ marginTop: 10 }} disabled>
                تأكيد الحجز
              </button>
            </div>

            <div className={styles["card"]} style={{ marginTop: 12 }}>
              <div className={styles["small"]} id="currentBookings">
                الحجوزات الحالية
              </div>

              <div id="bookings" className={styles["bookings-list"]} />

              <button
                id="clearBtn"
                style={{ marginTop: 8, background: "#e55353" }}
              >
                مسح الحجوزات المحلية
              </button>
            </div>

            <div
              className={styles["muted"]}
              id="localNote"
              style={{ marginTop: 10, fontSize: 13 }}
            >
              هذه نسخة محلية: يتم حفظ الحجوزات في localStorage.
            </div>
          </aside>

          <section>
            <div className={styles["card"]}>
              <div>
                <div>
                  <label id="weekLabel">اختر بداية الأسبوع</label>
                  <input type="date" id="weekStart" />
                </div>
                <div className={styles["small"]} id="calendarHint">
                  انقر على خانة الوقت لاختيارها. الأوقات المحجوزة تظهر بعلامة.
                </div>
              </div>

              <div
                id="calendar"
                className={styles["calendar"]}
                style={{ marginTop: 12 }}
              />
            </div>

            <div className={styles["card"]} style={{ marginTop: 12 }}>
              <div className={styles["small"]} id="downloadHint">
                زر تنزيل ملف تقويم للحجز المختار
              </div>

              <button
                id="downloadIcsBtn"
                disabled
                style={{ marginTop: 8, background: "#0c8a6f" }}
              >
                تنزيل ملف تقويم (.ics)
              </button>
            </div>
          </section>
        </div>

        <footer id="footer">
          تم الإنشاء لمساعدتك على البدء — اطلب أي تعديل تريده
        </footer>
      </main>

      <div className={styles["modal"]} id="successModal">
        <div className={styles["modal-content"]}>
          <h3 id="popupTitle">✅ تم تأكيد الحجز</h3>
          <p id="popupMsg">شكراً! تم حجز الموعد بنجاح.</p>
          <button style={{ marginTop: 10 }}>إغلاق</button>
        </div>
      </div>
    </>
  );
}

export default Calender;
