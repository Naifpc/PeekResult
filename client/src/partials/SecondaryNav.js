import React from "react";
import { Link } from "react-router-dom";
import AnimatedNav from "../animations/AnimatedNav";

export default function SecondaryNav({ prev }) {
  return (
    <AnimatedNav>
      <div className="container d-flex gap-2 align-items-center bg-body-secondary p-3 p-sm-3 p-md-3 p-lg-4 p-xl-5">
        <Link to={prev}>
          <i class="bi bi-chevron-right text-body"></i>
        </Link>
        <h5 className="m-0">خطة جديدة</h5>
      </div>
    </AnimatedNav>
  );
}
