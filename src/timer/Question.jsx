import React, { useState, useEffect } from "react";
import styles from "./timer.module.css";

const questions = [
  { q: "ما هي أول سورة في القرآن الكريم؟", answers: ["الفاتحة", "البقرة", "الإخلاص", "الكوثر"], correct: "الفاتحة" },
  { q: "كم عدد الصلوات المفروضة في اليوم والليلة؟", answers: ["ثلاث", "أربع", "خمس", "ست"], correct: "خمس" },
  { q: "من هو أول الأنبياء؟", answers: ["إبراهيم عليه السلام", "نوح عليه السلام", "آدم عليه السلام", "موسى عليه السلام"], correct: "آدم عليه السلام" },
  { q: "أين وُلد النبي محمد صلى الله عليه وسلم؟", answers: ["المدينة المنورة", "مكة المكرمة", "القدس", "الطائف"], correct: "مكة المكرمة" },
  { q: "كم عدد أركان الإسلام؟", answers: ["4", "5", "6", "7"], correct: "5" },
  { q: "ما هي أطول سورة في القرآن الكريم؟", answers: ["آل عمران", "البقرة", "النساء", "المائدة"], correct: "البقرة" },
  { q: "ما اسم أم النبي محمد صلى الله عليه وسلم؟", answers: ["خديجة", "آمنة", "حليمة", "صفية"], correct: "آمنة" },
  { q: "كم سنة استمر نزول القرآن الكريم؟", answers: ["10 سنوات", "20 سنة", "23 سنة", "30 سنة"], correct: "23 سنة" },
  { q: "ما هو عدد سور القرآن الكريم؟", answers: ["100", "110", "114", "120"], correct: "114" },
  { q: "من هو أول خليفة للمسلمين بعد وفاة النبي؟", answers: ["عمر بن الخطاب", "عثمان بن عفان", "أبو بكر الصديق", "علي بن أبي طالب"], correct: "أبو بكر الصديق" },
  { q: "ما هي السورة التي تُسمى قلب القرآن؟", answers: ["الكهف", "يس", "الملك", "الرحمن"], correct: "يس" },
  { q: "كم عدد أركان الإيمان؟", answers: ["4", "5", "6", "7"], correct: "6" },
  { q: "من هو النبي الذي ابتلعه الحوت؟", answers: ["يوسف", "يونس", "موسى", "صالح"], correct: "يونس" },
  { q: "في أي غزوة فُرض صيام رمضان؟", answers: ["بدر", "أحد", "الخندق", "لم ترتبط بغزوة"], correct: "بدر" },
  { q: "ما هو اسم جبل عرفة؟", answers: ["النور", "عرفات", "الرحمة", "الطور"], correct: "الرحمة" },
  { q: "كم عدد آيات سورة البقرة؟", answers: ["286", "200", "300", "114"], correct: "286" },
  { q: "من هو أول من بنى الكعبة؟", answers: ["إبراهيم وإسماعيل", "آدم", "نوح", "محمد صلى الله عليه وسلم"], correct: "إبراهيم وإسماعيل" },
  { q: "ما هي الصلاة التي ليس لها ركوع؟", answers: ["العيد", "الوتر", "الكسوف", "الجنازة"], correct: "الجنازة" },
  { q: "ما هو أول مسجد بُني في الإسلام؟", answers: ["المسجد الحرام", "المسجد الأقصى", "مسجد قباء", "المسجد النبوي"], correct: "مسجد قباء" },
  { q: "كم مرة ورد اسم (محمد) في القرآن؟", answers: ["2", "3", "4", "5"], correct: "4" },
  { q: "ما هي السورة التي تُسمى بسورة النساء الصغرى؟", answers: ["المجادلة", "الطلاق", "التحريم", "الممتحنة"], correct: "الطلاق" },
  { q: "من هو الصحابي الملقب بسيف الله المسلول؟", answers: ["خالد بن الوليد", "عمر بن الخطاب", "علي بن أبي طالب", "الزبير بن العوام"], correct: "خالد بن الوليد" },
  { q: "ما هو الدعاء الذي يقال بين السجدتين؟", answers: ["سبحان ربي الأعلى", "رب اغفر لي", "ربنا آتنا في الدنيا حسنة", "اللهم اغفر لي ذنبي"], correct: "رب اغفر لي" },
  { q: "ما أول ما يحاسب عليه العبد يوم القيامة؟", answers: ["الصوم", "الزكاة", "الصلاة", "الحج"], correct: "الصلاة" },
  { q: "في أي ليلة أُسري بالنبي محمد صلى الله عليه وسلم؟", answers: ["ليلة القدر", "ليلة الجمعة", "ليلة 27 رجب", "ليلة 15 شعبان"], correct: "ليلة 27 رجب" },
  { q: "ما اسم الصحابي الذي نام في فراش النبي ليلة الهجرة؟", answers: ["عمر بن الخطاب", "أبو بكر الصديق", "علي بن أبي طالب", "عثمان بن عفان"], correct: "علي بن أبي طالب" },
  { q: "كم عدد التكبيرات في صلاة العيد؟", answers: ["5", "6", "7", "8"], correct: "7" },
  { q: "من هو مؤذن الرسول صلى الله عليه وسلم؟", answers: ["أبو هريرة", "بلال بن رباح", "عبد الله بن مسعود", "سلمان الفارسي"], correct: "بلال بن رباح" },
  { q: "ما هي الكلمة التي تُقال عند الركوع؟", answers: ["الله أكبر", "سبحان ربي العظيم", "سبحان ربي الأعلى", "الحمد لله"], correct: "سبحان ربي العظيم" },
  { q: "ما أول ما نزل من القرآن؟", answers: ["الفاتحة", "العلق", "البقرة", "المدثر"], correct: "العلق" },
  { q: "ما هو عدد أسماء الله الحسنى؟", answers: ["99", "100", "120", "114"], correct: "99" },
  { q: "من هو الصحابي الذي جمع القرآن في مصحف واحد؟", answers: ["عمر بن الخطاب", "عثمان بن عفان", "أبو بكر الصديق", "علي بن أبي طالب"], correct: "عثمان بن عفان" },
  { q: "ما هي أول غزوة في الإسلام؟", answers: ["أحد", "الخندق", "بدر", "حنين"], correct: "بدر" },
  { q: "ما هو الركن الرابع من أركان الإسلام؟", answers: ["الصلاة", "الزكاة", "الصوم", "الحج"], correct: "الصوم" },
  { q: "كم عدد الأشهر الحرم؟", answers: ["2", "3", "4", "5"], correct: "4" },
  { q: "ما هي السورة التي فيها بسملتين؟", answers: ["الفاتحة", "النساء", "النمل", "الرحمن"], correct: "النمل" },
  { q: "من هو الصحابي الذي لقب بالفاروق؟", answers: ["أبو بكر", "عمر بن الخطاب", "عثمان بن عفان", "علي بن أبي طالب"], correct: "عمر بن الخطاب" },
  { q: "كم عدد ركعات صلاة الفجر؟", answers: ["2", "3", "4", "5"], correct: "2" },
  { q: "من هو النبي الذي كلمه الله مباشرة؟", answers: ["عيسى", "موسى", "إبراهيم", "محمد"], correct: "موسى" },
  { q: "في أي عام وُلد النبي محمد صلى الله عليه وسلم؟", answers: ["عام الفيل", "عام الهجرة", "عام بدر", "عام حنين"], correct: "عام الفيل" },
  { q: "كم عدد السجدات في القرآن الكريم؟", answers: ["12", "14", "15", "16"], correct: "15" },
  { q: "من هو أول من أسلم من الصبيان؟", answers: ["علي بن أبي طالب", "الحسن", "الحسين", "عبد الله بن عباس"], correct: "علي بن أبي طالب" },
  { q: "ما اسم غار اختبأ فيه النبي مع أبو بكر؟", answers: ["غار حراء", "غار ثور", "غار أحد", "غار الطور"], correct: "غار ثور" },
  { q: "كم مرة حج النبي محمد صلى الله عليه وسلم؟", answers: ["مرة واحدة", "مرتين", "ثلاث مرات", "أربع مرات"], correct: "مرة واحدة" },
  { q: "من هو النبي الذي وُصف بأنه خليل الله؟", answers: ["موسى", "إبراهيم", "محمد", "نوح"], correct: "إبراهيم" },
  { q: "ما هي السورة التي تعادل ثلث القرآن؟", answers: ["الفاتحة", "الإخلاص", "الكوثر", "الرحمن"], correct: "الإخلاص" },
  { q: "من هي أول شهيدة في الإسلام؟", answers: ["أسماء بنت أبي بكر", "سمية بنت خياط", "خديجة بنت خويلد", "حفصة بنت عمر"], correct: "سمية بنت خياط" },
  { q: "كم عدد تكبيرات صلاة الجنازة؟", answers: ["3", "4", "5", "6"], correct: "4" },
  { q: "ما هي أطول آية في القرآن؟", answers: ["آية الكرسي", "آية الدين", "آية المباهلة", "آية النور"], correct: "آية الدين" },
  { q: "من هو الصحابي الذي هاجر مع النبي صلى الله عليه وسلم؟", answers: ["عمر بن الخطاب", "عثمان بن عفان", "أبو بكر الصديق", "علي بن أبي طالب"], correct: "أبو بكر الصديق" },
  { q: "ما اسم السورة التي بدأت بكلمة (اقتربت)؟", answers: ["الرحمن", "القمر", "الحاقة", "الزلزلة"], correct: "القمر" },
];

function Question() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [time, setTime] = useState(60);
  const [quizEnded, setQuizEnded] = useState(false);

  useEffect(() => {
    if (quizEnded) return;
    const timerInterval = setInterval(() => {
      setTime(prev => {
        if (prev <= 1) {
          clearInterval(timerInterval);
          setQuizEnded(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerInterval);
  }, [quizEnded]);

  const handleConfirm = () => {
    const currentQuestion = questions[index];
    if (!selectedAnswer) {
      setFeedback("اختر إجابة أولاً");
      return;
    }
    if (selectedAnswer === currentQuestion.correct) {
      setScore(prev => prev + 10);
      setFeedback("إجابة صحيحة");
    } else {
      setScore(prev => prev - 5);
      setFeedback(`إجابة خاطئة، الإجابة الصحيحة: ${currentQuestion.correct}`);
    }

    setTimeout(() => {
      setFeedback("");
      setSelectedAnswer("");
      if (index + 1 < questions.length) {
        setIndex(index + 1);
      } else {
        setQuizEnded(true);
      }
    }, 1300);
  };

  if (quizEnded) {
    return (
      <div className={styles.Allcontiner}>
        <h3>انتهى الاختبار!</h3>
        <h3>مجموع نقاطك: {score}</h3>
      </div>
    );
  }

  const currentQuestion = questions[index];

  return (
    <div className={styles.Allcontiner}>
      <div className="d-flex justify-content-center mb-3">
        <span className="timer fs-2 mx-5">
          TIME: <span className="text-success">{time}</span>
        </span>
        <span className="score fs-2 mx-5">
          POINT: <span className="text-success">{score}</span>
        </span>
      </div>

      {feedback && <div className="feedback_answer alert alert-info">{feedback}</div>}

      <h3 className="question">{currentQuestion.q}</h3>

      <div className="answer mt-3">
        {currentQuestion.answers.map((ans, i) => (
          <label key={i} style={{ display: "block" }} className="questionn">
            {ans}
            <input
              type="radio"
              name="answer"
              value={ans}
              checked={selectedAnswer === ans}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              style={{ marginLeft: "50px" }}
            />
          </label>
        ))}
        <button className="btn btn-success w-100 mt-3" onClick={handleConfirm}>
          تأكيد الإجابة
        </button>
      </div>
    </div>
  );
}

export default Question;
