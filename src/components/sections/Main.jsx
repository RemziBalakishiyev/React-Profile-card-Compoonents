import React, { useState } from "react";
import flexClasses from "../../styles/Flexbox.module.css";
import Card from "../cards/Card.jsx";
import buttonClass from "../Style/Button.module.css";

const PROFILES = [
  {
    id: Math.random().toString(36).substr(2, 9),
    firstName: "Bruce",
    lastName: "Wayne",
    jobTitle: "CEO & Founder of Wayne Enterprises",
    imageSrc: "groupTwo.png",
    description: `Born as the son of a wealthy industrialist, Bruce Wayne was raised to be ',a hero' by his parents Thomas and Martha Wayne`,
    btnColor: "#81b29a",
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    firstName: "Walter",
    lastName: "White",
    jobTitle: "Ethical Reasoning and Analysis",
    imageSrc: "groupTwo.png",
    description:
      "Walter Hartwell White is a fictional character in the American drama television series Breaking Bad",
    btnColor: "primary",
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    firstName: "Jamie",
    lastName: "Lannister",
    jobTitle: "Full Satck developer",
    imageSrc: "groupTwo.png",
    description: `Jamie Lannister is a character in A Song of Ice and Fire, one of George R. R. Martin's A Song of Ice and Fire series and its associated media.`,
    btnColor: "secondary",
  },
];

function Main() {
  const [step, setstep] = useState(0);

  const styleProfileCards = {
    marginInline: "20px",
    gap: "10px",
  };

  const changeProfileData = () => {
    if (step < PROFILES.length - 1) {
      setstep((prevStep) => prevStep + 1);
      return;
    }
    setstep(0);
  };

  return (
    <section className={flexClasses.rowCenterFlex} style={styleProfileCards}>
      {/* {PROFILES.map((profile) => (
        <Card profileData={profile} key={profile.id} />
      ))} */}
      <Card profileData={PROFILES[step]} />

      <div>
        <button
          onClick={changeProfileData}
          className={`${buttonClass.button}  ${buttonClass["primary"]}`}
        >
          Right
        </button>
        <button
          className={`${buttonClass.button}  ${buttonClass["secondary"]}`}
        >
          Left
        </button>
      </div>
    </section>
  );
}

export default Main;
