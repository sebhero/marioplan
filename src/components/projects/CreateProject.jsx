import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";

class CreateProject extends Component {
  /**
   * @memberof CreateProject
   * @property {string} title
   * @property {string} content
   */
  state = {
    title: "",
    content: ""
  };

  /**
   *
   * @param {(React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>)} e
   * @memberof CreateProject
   */
  handleChange = e => {
    this.setState({ [e.currentTarget.id]: e.currentTarget.value });
  };

  /**
   * @param {React.FormEvent<HTMLFormElement>} e;
   */
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
            <label htmlFor="content">Content</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-deth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateProject);
