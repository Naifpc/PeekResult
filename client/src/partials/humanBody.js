import React from "react";
import { useEffect, useState } from "react";

function HumanBody({value}) {
  const [imageSrc, setImageSrc] = useState(
    `${process.env.PUBLIC_URL}/body.svg`
  );

  useEffect(() => {
    if (value === "front") {
      setImageSrc(`${process.env.PUBLIC_URL}/body.svg`);
    } else if (value === "back") {
      setImageSrc(`${process.env.PUBLIC_URL}/body-back.svg`);
    } else if (value === "height") {
      setImageSrc(`${process.env.PUBLIC_URL}/body-length.svg`);
    } else if (value === "neck") {
      setImageSrc(`${process.env.PUBLIC_URL}/body-neck.svg`);
    } else if (value === "waist") {
      setImageSrc(`${process.env.PUBLIC_URL}/body-waist.svg`);
    }
  }, [value]);

  return (
    <>
      <img src={imageSrc} alt="human body diagram front" />
    </>
  );
}

export default HumanBody;
