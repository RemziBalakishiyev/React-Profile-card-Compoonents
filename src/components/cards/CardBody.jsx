import React, { useState } from "react";
import fb from "../../assets/facebook.png";
import ln from "../../assets/linkedin.png";
import inst from "../../assets/instagram.png";
import "./Card.css";
import Button from "../Style/Button";
import StageContainer from "./StageContainer";
const COLORS = [
  "#FF5722", // red
  "primary",
  "secondary",
  "#e9c46a",
  "#ff006e",
];
function CardBody({ fullName, title, description }) {
  const [index, setindex] = useState(0);

  let btnColor = COLORS[index];
  setTimeout(() => {
    if (index == COLORS.length - 1) {
      setindex(0);
    }
    setindex((prevIndex) => prevIndex + 1);
  }, 2000);

  return (
    <>
      <h1 className='title'>{fullName}</h1>
      <span className='job'>{title}</span>
      <p>{description}</p>
      <ul>
        <li>
          <img src={fb} alt='' />
        </li>
        <li>
          <img src={ln} alt='' />
        </li>
        <li>
          <img src={inst} alt='' />
        </li>
      </ul>
      <Button type='button' color={btnColor}>
        Buy me a coffe
      </Button>
      <StageContainer></StageContainer>
    </>
  );
}

export default CardBody;
