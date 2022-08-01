import { Fragment } from "react";
import Header from "./main-navigation";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
