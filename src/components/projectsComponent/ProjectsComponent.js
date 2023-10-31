"use client";
import localFont from "next/font/local";
import React, { useState } from "react";
import data from "@/components/data";
import CardComponent from "../cardComponent/CardComponent";
import "./projectscomponent.css";
const poppinsBlack = localFont({
  src: "../../fonts/Poppins-Black.ttf",
});
const poppins = localFont({
  src: "../../fonts/Poppins-SemiBold.ttf",
  src: "../../fonts/Poppins-Medium.ttf",
  src: "../../fonts/Poppins-Light.ttf",
});

export default function ProjectsComponent() {
  let [array, setArray] = useState([...data].splice(0, 3));
  let [cond, setCond] = useState(false);
  function handleViewmore(e) {
    if (cond) {
      setArray([...data].splice(0, 3));
    } else {
      setArray([...data]);
    }
    console.log(data);
    setCond((prev) => !prev);
  }
  const cardElements = array.map((elem) => {
    return <CardComponent key={elem.id} props={elem} />;
  });
  return (
    <section
      id="Projects"
      className={`${poppins.className} total-projects-component-container`}
    >
      <h4>Projects</h4>
      <h2 className={poppinsBlack.className}>
        Each Project is a Unique Peice of Development 🧩
      </h2>
      <div className="total-projects-cards-container">{cardElements}</div>
      <div onClick={handleViewmore} className="view-more-button-projects">
        View - {cond ? "less" : "more"}
      </div>
    </section>
  );
}
