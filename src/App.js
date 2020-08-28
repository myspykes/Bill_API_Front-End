import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Toolbar from "./components/backcover/Toolbar/Toolbar";
import SideDrawer from "./components/backcover/SideDrawer/SideDrawer";
import BackDrop from "./components/backcover/Backdrop/Backdrop";
import Bar from "./components/LawyerReport/bar";
import LawTimeSheet from "./components/LawyerReport/lawtimesheet";
import LawAdd from "./components/AddLawyers/lawAdd";
import TimeInput from "./components/TimeInsert/timeinput";
import PayInvoice from "./components/LawyerInvoice/payinvoice";
import LawTimeRange from "./components/LawyerInvoice/lawtimerange";

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop click={this.backDropClickHandler} />;
    }
    //WRONG URL
    const PageNotFound = () => (
      <div>
        404!!! Page Not Found - <Link to="/">Return to Home Page</Link>
      </div>
    );

    return (
      <div style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
        <main style={{ marginTop: "64px" }}>
          <Switch>
            <Route component={Bar} exact path="/" />
            <Route component={LawTimeSheet} exact path="/clock-in" />

            <Route component={LawAdd} path="/addlawyer" />
            <Route component={TimeInput} path="/timeinput" />
            <Route component={PayInvoice} exact path="/companyinvoice" />
            <Route component={LawTimeRange} path="/companyinvoice/range" />
            <Route component={PageNotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
