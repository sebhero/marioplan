import React from "react";
import ProjectSummary from "./ProjectSummary";

/**
 *
 *
 * @export
 * @param {import('../../store/reducers/projectReducer').ProjectReducerState} projects
 * @returns
 */
export default function ProjectList({ projects }) {
  return (
    <div className="project-list section">
      {projects &&
        projects.map(project => {
          return <ProjectSummary project={project} key={project.id} />;
        })}
    </div>
  );
}
