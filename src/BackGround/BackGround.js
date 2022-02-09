import "./BackGround.css";
import { AiFillStar } from "react-icons/ai";
import { useState, useEffect } from "react";
import { BsFillMoonFill } from "react-icons/bs";

const BackGround = () => {
  const [stars, setStars] = useState([]);
  useEffect(() => {
    const sizes = ["2vh", "2.5vh", "3vh", "3.5vh", "1vh", "1.5vh"];
    const loop = () => {
      const myStars = [];
      for (let i = 0; i < 300; i++) {
        myStars.push(
          <AiFillStar
            key={i}
            id={i}
            color="#e1e1e1"
            size={sizes[Math.floor(Math.random() * 6)]}
            style={{ margin: `${Math.floor(Math.random() * 13)}vh` }}
            className={`stars stars-${Math.floor(Math.random() * 4)}`}
          />
        );
      }
      setStars(myStars);
    };
    loop();
  }, []);

  return (
    <div id="background">
      <BsFillMoonFill id="moon" />
      {stars.map((star) => star)}
    </div>
  );
};

export default BackGround;
