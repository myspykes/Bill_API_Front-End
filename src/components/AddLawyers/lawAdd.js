import React, { Component } from "react";
import "./lawAdd.css";
import Axios from "axios";

class lawAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      barGrading: "",
      payload: [],
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const add_lawyer = this.state;
    Axios.post("/addlawyers", add_lawyer).then((response) => {
      this.setState({
        payload: response,
      });
    });
  };

  render() {
    const { firstName, lastName, barGrading } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div className="same_line">
            <label className="lab_fname">First Name : </label>
            <input
              className="inp_fname"
              autoComplete="off"
              type="text"
              name="firstName"
              value={firstName}
              onChange={this.changeHandler}
            ></input>
            <label className="lab_lname">Last Name : </label>
            <input
              className="inp_lname"
              autoComplete="off"
              type="text"
              name="lastName"
              value={lastName}
              onChange={this.changeHandler}
            ></input>
            <br />
            <br />
          </div>
          <label className="lab_num">Grading : </label>
          <input
            className="inp_num"
            type="Number"
            name="barGrading"
            value={barGrading}
            onChange={this.changeHandler}
          ></input>
          <br />
          <br />
          <br />

          <button className="but_submit" type="submit">
            submit
          </button>
        </form>
      </div>
    );
  }
}

export default lawAdd;
