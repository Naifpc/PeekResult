import React, { useMemo } from "react";
import { Trainer } from "../partials/cards";
import axios from "axios";
import { useEffect, useState } from "react";
import Filter from "../partials/filter";
import { useParams } from "react-router-dom";
import Search from "../partials/search";
import AnimatedPage from "../animations/AnimatedPage";
function Home() {
  const [listOfTrainers, setListOfTrainers] = useState([]);
  const [query, setQuery] = useState("");
  const [listOfFields, setListOfFields] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/fields").then((response) => {
      setListOfFields(response.data);
    });
  }, []);

  let { id } = useParams(); // get id from url

  useEffect(() => {
    fetchData();
  }, [id]); //[id] to re run every time id changes

  const fetchData = async () => {
    if (!id) {
      axios.get(`http://localhost:9000/trainers/findAll`).then((response) => {
        //return all trainers if no id on url
        setListOfTrainers(response.data);
      });
    } else {
      axios
        .get(`http://localhost:9000/trainers/byFieldID/${id}`)
        .then((response) => {
          setListOfTrainers(response.data); //return all trainers with same field id
        });
    }
  };

  const filteredTrainers = useMemo(() => {
    return listOfTrainers.filter((item) => {
      return item.username.toLowerCase().includes(query.toLowerCase());
    });
  }, [listOfTrainers, query]); // useMemo to only run when query or listOfItemsChange

  return (
    <AnimatedPage>
      <div class="container p-2 p-sm-2 p-md-3 p-lg-4 p-xl-5  ">
        <h4 className="mb-4">المدربين</h4>

        <Search query={query} setQuery={setQuery} placeholder={"اسم المدرب"} />
        <div class="m-4"></div>

        <Filter listOfFields={listOfFields} />
        <div class="m-4"></div>

        <div className="container">
          <div className="row">
            {filteredTrainers.map((value, key) => {
              return (
                <Trainer
                  experience={value.experience}
                  name={value.username}
                  field={value.field}
                  image={value.imagePath}
                  id={value.id}
                  avatar={value.avatar.replace("\\", "/")}
                  key={key}
                />
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Home;
