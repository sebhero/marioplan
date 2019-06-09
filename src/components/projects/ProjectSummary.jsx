import React from "react";

/**
 *displays project information
 *
 * @param {{project:import('../../store/reducers/projectReducer').Project}} props
 */
export default function ProjectSummary({ project }) {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted by the sebhero</p>
        <p className="grey-text">3rd july, 15:00</p>
      </div>
    </div>
  );
}
