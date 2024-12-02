import React from "react";
import "./Layout.css";

function JobCard({ title, company, experience, location }) {
  return (
    <div className="job-card">
      <h3>{title}</h3>
      <p>{company}</p>
      {/* <span>&#128188;</span> */}
      <p><span role="img" aria-label="suitcase">&#128188;</span> {experience}</p>
      <span>{location}</span>
      <button className="apply-button">Apply</button>
    </div>
  );
}

export default JobCard;
