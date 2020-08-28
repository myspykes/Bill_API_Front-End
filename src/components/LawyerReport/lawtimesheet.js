import React, { Component } from "react";
import "./lawtimesheet.css";
import Axios from "axios";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Link } from "react-router-dom";

class lawtimesheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sheet: [],
    };
  }
  //company work time
  componentDidMount = () => {
    Axios.get("/reportsforalltIimeSheet").then((response) => {
      this.setState({
        sheet: response.data,
      });
    });
  };

  render() {
    const { sheet } = this.state;
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
        Header: "ID",
        accessor: "barGrading",
        sortable: false,
        style: {
          textAlign: "center",
        },
        width: 150,
        maxWidth: 200,
        minWidth: 70,
      },
      {
        Header: "Project Name",
        accessor: "project_Name",
        sortable: true,
        width: 170,
        maxWidth: 200,
      },
      {
        Header: "Date",
        accessor: "p_Date",
        sortable: false,
        width: 300,
        style: {
          textAlign: "center",
        },
      },
      {
        Header: "Start Time",
        accessor: "p_Start",
        sortable: true,
        width: 170,
        maxWidth: 200,
        style: {
          textAlign: "center",
        },
      },
      {
        Header: "End Time",
        accessor: "p_End",
        sortable: false,
        width: 170,
        style: {
          textAlign: "center",
        },
      },
    ];

    return (
      <>
        <div className="all_render">
          <div className="dj_feezy">
            <h2 className="time_headings">
              <br />
              Lawyers Timetable
            </h2>

            <ReactTable
              className="gambo"
              columns={columns}
              data={sheet}
              defaultPageSize={15}
              noDataText={"click button above"}
              //showPagination={false}
              showPaginationTop={false}
              showPaginationBottom={true}
            ></ReactTable>
          </div>

          <Link className="link_pr" to="/timeinput">
            Clock-In{" "}
          </Link>
        </div>
      </>
    );
  }
}

export default lawtimesheet;
