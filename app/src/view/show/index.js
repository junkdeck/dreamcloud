import { h } from "preact";
import { useContext } from "preact/hooks";

import { Store } from "src/state/store";
import { getDreamById } from "src/state/selector";

const ShowDream = ({ id }) => {
  const { state, dispatch } = useContext(Store);

  const dream = getDreamById(state)(id);

  return (
    <div>
      <h2>{dream.title}</h2>

      <div>{dream.content}</div>
    </div>
  );
};

export default ShowDream;
