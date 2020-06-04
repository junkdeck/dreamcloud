import { h } from "preact";
import { Router } from "@reach/router";

import Header from "./component/Header";
import DreamsList from "./view/list";
import NewDream from "./view/new";
import ShowDream from "./view/show";

const DreamsApp = () => {
  return (
    <div className="wrapper">
      <Header />
      <Router>
        <DreamsList path="/" />
        <NewDream path="/new" />
        <ShowDream path="/dream/:id" />
      </Router>
    </div>
  );
};

export default DreamsApp;
