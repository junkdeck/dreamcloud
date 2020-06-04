import { h } from "preact";
import { Link } from "@reach/router";

const Header = (props) => {
  const links = [
    { path: "/", title: "dreams" },
    { path: "/new", title: "new dream" },
  ];
  return (
    <div className="header center-text">
      <h1>dreamcloud</h1>
      <p className="subheader">&mdash;taking my own notes&mdash;</p>
      <div className="mt05">
        {links.map((link) => (
          <Link to={link.path}>{link.title}</Link>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Header;
