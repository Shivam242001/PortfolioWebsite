import "./topbar.scss";
import {Assignment} from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          {/* <a href="#intro" className="logo">
            genius.
          </a> */}
          {/* <div className="itemContainer">
            <Person className="icon" />
            <span>+44 924 12 74</span>
          </div> */}
          <div className="itemContainer">
            <Assignment className="icon" />
            <span>Check out my <a className="resume" href ="https://drive.google.com/file/d/1z2oDuRrtFxoc8qccuXiemexeC5DdO-YP/view?usp=sharing">resume</a></span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
