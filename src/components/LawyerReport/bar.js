import React, { Component } from "react";
import "./bar.css";
import Axios from "axios";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Link } from "react-router-dom";

class bars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bar: [],
    };
  }
  //display all lawyers
  componentDidMount = () => {
    Axios.get("/lawyersReporter").then((response) => {
      this.setState({
        bar: response.data,
      });
    });
  };

  //delete selected record
  deleteDep(employee_ID) {
    if (window.confirm("are you sure")) {
      fetch("/lawyersReporter/" + employee_ID, {
        method: "delete",
        headers: {
          Accept: "Application/json",
          "Content-Type": "application/json",
        },
      });
      //remove record from browser immediatly
      const index = this.state.bar.findIndex((barr) => {
        return barr.employee_ID === employee_ID;
      });
      this.state.bar.splice(index, 1);
      this.setState({ bar: this.state.bar });
    }
  }
  render() {
    const { bar } = this.state;
    const columns = [
      {
        Header: "ID",
        accessor: "employee_ID",
        sortable: false,
        style: {
          textAlign: "center",
        },
        width: 120,
        maxWidth: 150,
        minWidth: 70,
      },
      {
        Header: "First Name",
        accessor: "firstName",
        sortable: false,
        width: 200,
      },
      {
        Header: "Last Name",
        accessor: "lastName",
        sortable: false,
        width: 200,
      },
      {
        Header: "Grading",
        accessor: "barGrading",
        sortable: true,
        width: 170,
        maxWidth: 150,
        style: {
          textAlign: "center",
        },
      },
      {
        Header: "Action",
        Cell: (props) => {
          return (
            <button
              className="del_butt"
              onClick={() => {
                //console.log("props", props);
                this.deleteDep(props.original.employee_ID);
              }}
            >
              Delete
            </button>
          );
        },
        width: 150,

        sortable: false,
        filterable: false,
        style: {
          textAlign: "center",
        },
      },
    ];
    return (
      <div className="all_ground">
        <div className="breezy">
          <h3>List of all lawyers and their hourly charge rate</h3>
          <ReactTable
            className="tableux"
            columns={columns}
            data={bar}
            defaultPageSize={15}
            noDataText={"click button above"}
            showPaginationTop={false}
            showPaginationBottom={true}
          ></ReactTable>
        </div>

        <Link className="link_pr" to="/addlawyer">
          Add Lawyer{" "}
        </Link>
      </div>
    );
  }
}

export default bars;
