import "./Nav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {useState} from "react"
const Nav = () => {

    const [isActive , setIsActive] = useState(false)


  const handleScroll = (e) => {
    console.log(e.target);
    const item = e.target.getAttribute("symbol");
    if (item === "home") window.scrollTo(0, 0);
    else {
      const mySection = document.getElementById(item);
      window.scrollTo(0, mySection.offsetTop - 60);
    }
  };


  const handleNav = () => {
    isActive===false ? setIsActive(true) : setIsActive(false)
  }

  return (
    <div id="nav" onMouseLeave={()=>setIsActive(false)}>
      <div id="logo">
        <h3>Logo</h3>
      </div>
      <ul className={isActive ? "active" : ""}  onClick={()=>setIsActive(false)}>
        <li symbol="home" onClick={(e) => handleScroll(e)}>
          Home
        </li>
        <li symbol="about" onClick={(e) => handleScroll(e)}>
          About
        </li>
        <li symbol="works" onClick={(e) => handleScroll(e)}>
          Works
        </li>
      </ul>
      <GiHamburgerMenu id="ham" onClick={handleNav} />
    </div>
  );
};

export default Nav;
