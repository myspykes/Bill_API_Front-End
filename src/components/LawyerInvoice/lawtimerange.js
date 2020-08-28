import React, { Component } from "react";
import "./lawtimerange.css";
import Axios from "axios";
import ReactTable from "react-table";
import "react-table/react-table.css";

class lawtimerange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project_Name: "",
      startRange: "",
      endRange: "",
      ranger: [],
    };
  }

  changeHandlerTime = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandlerRanger = (e) => {
    e.preventDefault();
    console.log(this.state);
    const time_range = this.state;

    Axios.post("/rangesumReport", time_range).then((response) => {
      this.setState({
        ranger: response.data[3],
      });
    });
  };

  render() {
    const { ranger } = this.state;

    const { project_Name, startRange, endRange } = this.state;

    const columns = [
      {
        Header: "ID",
        accessor: "employeeID",
        sortable: false,
        style: {
          textAlign: "center",
        },
        width: 120,
        maxWidth: 150,
        minWidth: 70,
      },
      {
        Header: "Number of Hours",
        accessor: "hours",
        sortable: false,
        width: 200,
        style: {
          textAlign: "center",
        },
      },
      {
        Header: "Unit Price",
        accessor: "barGrading",
        sortable: false,
        width: 200,
        style: {
          textAlign: "center",
        },
      },
      {
        Header: "Cost",
        accessor: "cost",
        sortable: true,
        width: 170,
        maxWidth: 150,
        style: {
          textAlign: "center",
        },
      },
    ];

    return (
      <div className="dj_yeezy">
        <h2 className="header_text">Company Invoice With Raange</h2>
        <br />
        <form onSubmit={this.submitHandlerRanger}>
          <div>
            <label className="lab_pnamey">Project Name : </label>
            <input
              className="inp_pnamey"
              autoComplete="off"
              type="text"
              name="project_Name"
              value={project_Name}
              onChange={this.changeHandlerTime}
            ></input>
            <br />
            <br />
            <div className="same_line">
              <label className="lab_srange">Project Name : </label>
              <input
                className="inp_srange"
                type="date"
                name="startRange"
                placeholder="yyyy-mm-dd"
                value={startRange}
                onChange={this.changeHandlerTime}
              ></input>
              <label className="lab_erange">Project Date : </label>
              <input
                className="inp_erange"
                type="date"
                name="endRange"
                placeholder="yyyy-mm-dd"
                value={endRange}
                onChange={this.changeHandlerTime}
              ></input>
              <button className="sub_range" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
        <br />
        <ReactTable
          className="tableaux"
          columns={columns}
          data={ranger}
          defaultPageSize={12}
          showPaginationBottom={true}
          showPaginationTop={false}
        />
      </div>
    );
  }
}

export default lawtimerange;
