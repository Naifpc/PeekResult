import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { NavLink, Outlet, Link } from "react-router-dom";
import AnimatedPage from "../animations/AnimatedPage";

function AboutTrainee() {
  let { id } = useParams(); // get id from url
  const [trainerObject, setTrainerObject] = useState({});
  const imageUrl = `url(http://localhost:9000/${trainerObject.trainerData?.avatar.replace(
    "\\",
    "/"
  )})`;

  useEffect(() => {
    axios.get(`http://localhost:9000/trainers/byId/${id}`).then((response) => {
      //query data by ID
      setTrainerObject(response.data);
    });
  }, []);

  return (
    <AnimatedPage>
      <>
        <div class="container p-3 p-sm-3 p-md-3 p-lg-4 p-xl-5  "></div>
      </>
    </AnimatedPage>
  );
}

export default AboutTrainee;
