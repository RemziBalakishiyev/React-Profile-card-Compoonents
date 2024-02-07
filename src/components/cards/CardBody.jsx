import React from "react";
import fb from "../../assets/facebook.png";
import ln from "../../assets/linkedin.png";
import inst from "../../assets/instagram.png";
import "./Card.css";
import Button from "../Style/Button";
function CardBody({ fullName, title, description, btnColor }) {
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
    </>
  );
}

export default CardBody;
