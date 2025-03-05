import React from "react";
import { useEffect, useState } from "react";

function HumanBody() {
  const [imageSrc, setImageSrc] = useState(
    `${process.env.PUBLIC_URL}/body.svg`
  );

  return (
    <>
      <img src={imageSrc} alt="human body diagram front" />
    </>
  );
}

export default HumanBody;
