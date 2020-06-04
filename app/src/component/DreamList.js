import { h } from "preact";
import { useState, useEffect, useContext } from "preact/hooks";
import { Link } from "@reach/router";

import { Store } from "../state/store";
import { fetchData } from "../state/creators";

const DreamList = () => {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    fetchData(state, dispatch);
  }, []);

  return (
    <ul>
      {state.dreams.map((item) => (
        <li key={item.id}>
          <Link to={`/dream/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DreamList;
