import React, { Component } from "react";

class SignUp extends Component {
  /**
   * @property {string} email
   * @property {string} password
   * @property {string} firstName
   * @property {string} lastName
   */
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  /**
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  handleChange = e => {
    this.setState({ [e.currentTarget.id]: e.currentTarget.value });
  };

  /**
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastname">Lastname</label>
            <input type="text" id="lastname" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstname">Firstname</label>
            <input type="text" id="firstname" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-deth-0">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
