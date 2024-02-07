import React from "react";
import flexClasses from "../../styles/Flexbox.module.css";
import Card from "../cards/Card.jsx";

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
  const styleProfileCards = {
    marginInline: "20px",
    gap: "10px",
  };
  return (
    <section className={flexClasses.rowCenterFlex} style={styleProfileCards}>
      {PROFILES.map((profile) => (
        <Card profileData={profile} key={profile.id} />
      ))}
    </section>
  );
}

export default Main;
