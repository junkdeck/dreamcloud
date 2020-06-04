import { h, render } from "preact";

import DreamsApp from "./src/DreamsApp";
import { StoreProvider } from "./src/state/store";

const RootApp = (props) => {
  return (
    <StoreProvider>
      <DreamsApp />
    </StoreProvider>
  );
};

render(<RootApp />, document.getElementById("root"));
