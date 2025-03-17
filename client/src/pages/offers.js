import React from "react";
import { offer as Offer } from "../partials/cards";
import AnimatedPage from "../animations/AnimatedPage"

function offers() {
  
  return (
    <AnimatedPage>
    <div class="container p-1 p-sm-2 p-md-3 p-lg-4 p-xl-5  " >
      <h4 className="mb-4">العروض</h4>
      <Offer />
      <Offer />
      <Offer />
      <Offer />
    </div>
    </AnimatedPage>
  );
}

export default offers;
