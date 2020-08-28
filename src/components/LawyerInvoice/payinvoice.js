import React, { Component } from "react";
import "./payinvoice.css";
import Axios from "axios";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Link } from "react-router-dom";

class payinvoce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project_Name: "",
      invoice: [],
    };
  }
  changeHandlerName = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitCompany = (e) => {
    e.preventDefault();
    const find_company = this.state;
    //console.log("addinfo", find_company);
    Axios.post("/sumReport", find_company).then((response) => {
      this.setState({
        invoice: response.data[1],
      });
    });
  };

  render() {
    const { invoice } = this.state;
    const { project_Name } = this.state;
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
      <>
        <div className="all_body">
          <h3>
            <br />
            View Invonce for Company
            <br />
          </h3>
          <form onSubmit={this.submitCompany}>
            <label className="lab_cname">Company Name : </label>
            <input
              className="inp_company"
              autoComplete="off"
              type="text"
              name="project_Name"
              value={project_Name}
              onChange={this.changeHandlerName}
            ></input>
            <br />
            <br />
            <button type="submit">submit</button>
          </form>
        </div>
        <div className="dj_steezy">
          <ReactTable
            columns={columns}
            data={invoice}
            defaultPageSize={7}
            noDataText={"click button above"}
            //showPagination={false}
            showPaginationTop={false}
            showPaginationBottom={true}
          />
        </div>
        <Link className="link_pr" to="/companyinvoice/range">
          Weekly invoice{" "}
        </Link>
      </>
    );
  }
}

export default payinvoce;
