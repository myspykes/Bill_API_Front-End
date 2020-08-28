import React, { Component } from "react";
import "./timeinput.css";
import Axios from "axios";

class timeinput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeID: "",
      project_Name: "",
      p_Date: "",
      p_Start: "",
      p_End: "",
      clocktime: [],
    };
  }
  changeHandlerTime = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandlerTime = (e) => {
    e.preventDefault();
    //console.log(this.state);
    const add_time = this.state;
    console.log("addtime", add_time);
    Axios.post("/inputlawyers", add_time).then((response) => {
      this.setState({
        clocktime: response,
      });
    });
  };

  render() {
    const { employeeID, project_Name, p_Date, p_Start, p_End } = this.state;
    return (
      <div className="back_bone">
        <h2>Add timesheet Record</h2>
        <br />
        <form onSubmit={this.submitHandlerTime}>
          <div>
            <div className="same_plane ">
              <label className="lab_empID">Employee ID : </label>
              <input
                className="inp_empID"
                type="number"
                name="employeeID"
                value={employeeID}
                onChange={this.changeHandlerTime}
              ></input>
              <label className="lab_pName">Project Name : </label>
              <input
                className="inp_pName"
                autoComplete="off"
                type="text"
                name="project_Name"
                value={project_Name}
                onChange={this.changeHandlerTime}
              ></input>
            </div>
            <br />
            <br />
            <label className="lab_pdate">Project Date : </label>
            <input
              className="inp_pdate"
              type="date"
              name="p_Date"
              placeholder="yyyy-mm-dd"
              value={p_Date}
              onChange={this.changeHandlerTime}
            ></input>
            <br />
            <br />
            <br />
            <div className="same_line01">
              <label className="lab_pstart">Start Time : </label>
              <input
                className="inp_pstart"
                type="time"
                name="p_Start"
                value={p_Start}
                onChange={this.changeHandlerTime}
              ></input>

              <label className="lab_pend">End Time : </label>
              <input
                className="inp_pend"
                type="time"
                name="p_End"
                value={p_End}
                onChange={this.changeHandlerTime}
              ></input>
              <br />
            </div>
          </div>
          <button className="but_submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default timeinput;
