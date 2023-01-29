import styles from "./index.module.css";
import logoImg from "../../images/logo.png";
import userImg from "../../images/user.png";
import avatarImg from "../../images/avatar.png";

import React, { useState, useEffect } from "react";
import {
  // Routes,
  // Route,
  // Link,
  useLocation,
  // useNavigate,
} from "react-router-dom";

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const [opacity, setOpacity] = useState(1);

  const location = useLocation();

  // const scrollDown = () => {
  //   setOpacity(0);
  //   document.documentElement.scrollTop = 150;
  // };

  useEffect(() => {
    const scroll = () => {
      let y = document.documentElement.scrollTop || document.body.scrollTop;
      if (y > 140) {
        setScroll(true);
      } else {
        setScroll(false);
        setOpacity(1 - (y * y) / (140 * 140));
      }
    };
    document.addEventListener("scroll", scroll);

    const resize = () => {
      console.log(window.screen.width);
    };
    window.addEventListener("resize", resize);
  }, []);

  return (
    <div className={styles.headerWrap}>
      <div className={styles.bg}>
        <img
          src={avatarImg}
          alt=""
          className={styles.avatar}
          style={{ opacity: opacity }}
        />

        {!scroll && (
          <div className={styles.tabs}>
            <div
              className={styles.tab1}
              style={location.pathname === "/" ? { color: "#CAF982" } : {}}
            >
              RESUME
            </div>
            <div
              className={styles.tab1}
              style={location.pathname === "/posts" ? { color: "#CAF982" } : {}}
            >
              POSTS
            </div>
            <div
              className={styles.tab1}
              style={location.pathname === "/demos" ? { color: "#CAF982" } : {}}
            >
              DEMOS
            </div>
          </div>
        )}
      </div>
      {scroll && (
        <div className={styles.fixHeader}>
          <div
            className={styles.tabStart}
            style={location.pathname === "/" ? { color: "#CAF982" } : {}}
          >
            RESUME
          </div>
          <div
            className={styles.tab}
            style={location.pathname === "/posts" ? { color: "#CAF982" } : {}}
          >
            POSTS
          </div>
          <div
            className={styles.tab}
            style={location.pathname === "/demos" ? { color: "#CAF982" } : {}}
          >
            DEMOS
          </div>
        </div>
      )}
      <div className={styles.fixed}>
        <img src={logoImg} alt="" className={styles.logo} />
        <img src={userImg} alt="" className={styles.user} />
      </div>
    </div>
  );
}
