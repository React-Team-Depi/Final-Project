import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <header className={styles["main-header"]}>
      <div className={styles.logo}>
        <Link to="/">
          <img
            src="assets/img/file_0000000012ac6243985d293aaa8aade3 copy.png"
            alt="logo"
          />
        </Link>
      </div>

      <nav className={styles["top-nav"]}>
        <Link to="/">الرئيسية</Link>
        <Link to="/teachers">المعلمين</Link>
        <Link to="/calender">المواعيد</Link>
        <Link to="/timer">تحدي الوقت</Link>
        <Link to="/new-muslim">المسلم الجديد</Link>
        <Link to="/video">
          <i className="fa-solid fa-video"></i>
        </Link>
      </nav>

      <div className={styles.auth}>
        <Link to="/login" className={styles["btn-outline"]}>
          الدخول
        </Link>
        <Link to="/signup" className={styles["btn-solid"]}>
          التسجيل
        </Link>
      </div>

      <button id="menuToggle" className={styles.hamburger}>
        ☰
      </button>

      <div id="mobileMenu" className={styles["mobile-menu"]}>
        <Link to="/">الرئيسية</Link>
        <Link to="/teachers">المعلمين</Link>
        <Link to="/calender">المواعيد</Link>
        <Link to="/timer">تحدي الوقت</Link>
        <Link to="/new-muslim">المسلم الجديد</Link>
        <Link to="/video">
          <i className="fa-solid fa-video"></i>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
