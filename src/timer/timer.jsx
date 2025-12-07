import React, { useState } from "react";
import styles from "./timer.module.css";
import Question from "./Question";

function Timer() {
  const [inputEnter, setInputEnter] = useState("");
  const [err, setErr] = useState("");
  const [playMsg, setPlayMsg] = useState("");
  const [showQuestion, setShowQuestion] = useState(false);

  const handleStart = (e) => {
    e.preventDefault();
    setErr("");
    setPlayMsg("");

    if (inputEnter.trim() === "") {
      setErr("يجب إدخال اسم اللعب");
      return;
    }

    setPlayMsg(`مرحبًا ${inputEnter}, بعد ثوانٍ سيتم تحويلك للاختبار`);

    setTimeout(() => {
      setShowQuestion(true);
    }, 3000);
  };

  if (showQuestion) {
    return <Question />;
  }

  return (
    <div className={styles.timerbody}>
      <div className={`container mt-5 ${styles.timercontent} ${styles.timerbody}`}>
        <div className="row">
          <div className={`showTimer mt-3 ${styles.showTimer}`}>
            <h6 className={`title text-black mb-5 ${styles.title}`}>
              <span>تحدي الوقت</span>
            </h6>

            <p className="text-end fs-6 my-5">
              لديك 60 ثانية، حاول الإجابة على أكبر قدر ممكن من الأسئلة بشكل صحيح
              ستحصل على 10 نقاط مقابل كل إجابة صحيحة وستخسر 5 نقاط مقابل كل
              إجابة خاطئة
            </p>

            <h4 className="text-end fs-6">لم تقم بتسجيل الدخول</h4>
            <p className="text-end fs-6 mb-5">
              الرجاء إدخال اسمك لعرضه بجانب ترتيبك في قائمة اللاعبين
            </p>

            <div className={`contain text-end ${styles.contain}`}>
              <span className="text-end">
                <i className="fa-regular fa-user" />
              </span>
              <input
                type="text"
                className={`form-control mb-2 text-end inp ${styles.inp}`}
                placeholder="الاسم"
                value={inputEnter}
                onChange={(e) => setInputEnter(e.target.value)}
              />
            </div>

            {err && <p className="nameerr text-danger fs-6">{err}</p>}

            {playMsg && (
              <div className="play alert alert-success text-end my-3">{playMsg}</div>
            )}

            <hr className="mt-5 m-auto" />

            <div className="text-end">
              <button
                className={`btn btn-success my-4 btn-go ${styles.btnGo}`}
                onClick={handleStart}
              >
                ابدأ الاختبار
              </button>
            </div>
          </div>

          <div className="play"></div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
