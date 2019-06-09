import React from "react";

/**
 * @typedef {object} RouteProps
 * @property {{params:{id:string}}} match
 * @param {RouteProps} props
 */
export default function ProjectDetails(props) {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project TItle {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In numquam,
            ex totam iusto nulla aperiam ratione ipsam, libero nisi ducimus
            dignissimos, nam reiciendis. Qui sed quasi dolorum dolor? Facilis,
            doloribus.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted the Sebhero</div>
          <div>8 july 17:00</div>
        </div>
      </div>
    </div>
  );
}
