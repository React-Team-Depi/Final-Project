import React from "react";
import styles from "./home.module.css";

function Home() {
  return (
    <div>
      <div className={`container my-4 py-4 rounded-3 ${styles["main-body-wrapper"]}`}>

        <div className="px-4">
          <div className="row">

            <div className="col-12 col-md-8">
              <div className={`mb-4 ${styles["main-topics-card"]}`}>
                <h6 className={styles["main-topics-card-title"]}>
                  <a href="#">المواضيع الرئيسية</a>
                </h6>
                <hr />
              </div>

              <div className="row">
                <a
                  href="articles.html?topic=al3badat"
                  className={`col-4 col-sm-2 d-flex flex-column justify-content-end align-items-center ${styles["topic-link"]}`}
                >
                  <div className={styles["diamond"]}>
                    {/* topic 1 */}
                    <img src="/assets/image/images (1).jpeg" alt="topic1" />
                  </div>
                  <p>العبادات</p>
                </a>

                <a
                  href="articles.html?topic=almunasbat"
                  className={`col-4 col-sm-2 d-flex flex-column justify-content-end align-items-center ${styles["topic-link"]}`}
                >
                  <div className={styles["diamond"]}>
                    {/* topic 2 */}
                    <img src="/assets/image/images (2).jpeg" alt="topic2" />
                  </div>
                  <p>المناسبات</p>
                </a>

                <a
                  href="articles.html?topic=alquran"
                  className={`col-4 col-sm-2 d-flex flex-column justify-content-end align-items-center ${styles["topic-link"]}`}
                >
                  <div className={styles["diamond"]}>
                    {/* topic 3 */}
                    <img src="/assets/image/images (3).jpeg" alt="topic3" />
                  </div>
                  <p>القرآن</p>
                </a>

                <a
                  href="articles.html?topic=alsalah"
                  className={`col-4 col-sm-2 d-flex flex-column justify-content-end align-items-center ${styles["topic-link"]}`}
                >
                  <div className={styles["diamond"]}>
                    {/* topic 4 */}
                    <img src="/assets/image/download (1).jpeg" alt="topic4" />
                  </div>
                  <p>الصلاة</p>
                </a>

                <a
                  href="articles.html?topic=al3elmlnafe3"
                  className={`col-4 col-sm-2 d-flex flex-column justify-content-end align-items-center ${styles["topic-link"]}`}
                >
                  <div className={styles["diamond"]}>
                    {/* topic 5 */}
                    <img src="/assets/image/home-cover.png" alt="topic5" />
                  </div>
                  <p>العلم النافع</p>
                </a>

                <a
                  href="articles.html?topic=al3qaedahasna"
                  className={`col-4 col-sm-2 d-flex flex-column justify-content-end align-items-center ${styles["topic-link"]}`}
                >
                  <div className={styles["diamond"]}>
                    {/* topic 6 */}
                    <img src="/assets/image/teacher.png" alt="topic6" />
                  </div>
                  <p>العقيدة</p>
                </a>
              </div>
            </div>

            {/* RIGHT SIDE IMAGES */}
            <div className="col-12 col-md-4 d-flex flex-column align-items-center">

              {/* hourglass */}
              <img
                src="/assets/image/images (10).jpeg"
                alt="hourglass"
                width="300"
                height="300"
              />

              {/* icons */}
              <div className="d-flex gap-3 my-3">
                <img src="/assets/image/images (11).jpeg" alt="facebook" width="20" />
                <img src="/assets/image/download.jpeg" alt="twitter" width="15" />
              </div>

              {/* application */}
              <img
                src="/assets/image/download (2).jpeg"
                alt="application"
                width="300"
                height="300"
              />
            </div>
          </div>
        </div>

        {/* LEARNING SECTION */}
        <div className="row text-center mt-5">
          <div className="col">
            <h4>مسارات التعلّم</h4>
            <hr />
          </div>

          <div className="d-flex justify-content-center gap-4 my-4">

            {/* learning paths */}
            <img
              src="/assets/image/images (4).jpeg"
              alt="learning1"
              className={styles["learning-img"]}
            />
            <img
              src="/assets/image/images (5).jpeg"
              alt="learning2"
              className={styles["learning-img"]}
            />
            <img
              src="/assets/image/images (6).jpeg"
              alt="learning3"
              className={styles["learning-img"]}
            />
          </div>
        </div>

        {/* bottom icons */}
        <div className="d-flex justify-content-around mt-5">

          <img
            src="/assets/image/images (7).jpeg"
            alt="diploma"
            height="120"
          />

          <img
            src="/assets/image/images (8).jpeg"
            alt="ebook"
            height="120"
          />

          <img
            src="/assets/image/images (9).jpeg"
            alt="online"
            height="120"
          />

        </div>

      </div>
    </div>
  );
}

export default Home;
