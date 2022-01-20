import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Student", "Developer", "Chess Enthusiast"],
    });
  }, []);

  return (
    <div className="home" id="home">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/self1.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Shivam Nanda</h1>
          <h3>
             <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#skills">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
