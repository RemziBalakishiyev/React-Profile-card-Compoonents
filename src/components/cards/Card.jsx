import React from "react";
import backPhoto from "../../assets/backgroundPhoto.png";
import flexClasses from "../../styles/Flexbox.module.css";
import CardBody from "./CardBody";
function Card({ profileData }) {
  const {
    imageSrc,
    firstName,
    lastName,
    jobTitle,
    description,
    btnColor,
  } = profileData;
  return (
    <div className={`card`}>
      <div className={`${flexClasses.columnCenterFlex}`}>
        <img src={backPhoto} alt='' className='back-photo' />
        <img src={`/src/assets/${imageSrc}`} alt='' className='profile-photo' />
      </div>
      <div className={`${flexClasses.columnCenterFlex} card-body`}>
        <CardBody
          title={jobTitle}
          fullName={`${firstName} ${lastName}`}
          description={description}
          btnColor={btnColor}
        />
      </div>
    </div>
  );
}

export default Card;
