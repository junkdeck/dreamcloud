import { h } from "preact";
import { useContext } from "preact/hooks";

import DreamList from "src/component/DreamList";

import { Store } from "src/state/store";

const View = () => {
  const { state } = useContext(Store);

  return (
    <div>
      <DreamList />

      {state.error && (
        <div className="error w100 text-center">{state.error.message}</div>
      )}
    </div>
  );
};

export default View;
