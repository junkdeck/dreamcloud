import actions from "./actions";

export const fetchData = (state, dispatch) => {
  dispatch({ type: actions.DATA_REQUEST });
  fetch("http://localhost:3000/dreams")
    .then((res) => res.json())
    .then((data) => {
      const sorted = data.sort((a, b) => {
        const x = parseInt(a.id, 10);
        const y = parseInt(b.id, 10);
        if (x < y) return -1;
        if (x > y) return 1;
        return 0;
      });
      dispatch({
        type: actions.DATA_SUCCESS,
        payload: sorted,
      });
    })
    .catch((err) => {
      dispatch({
        type: actions.DATA_ERROR,
        errors: err,
      });
    });
};

export const postData = (dream, state, dispatch) => {
  fetch("http://localhost:3000/dreams", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: dream }),
  })
    .then((data) => {
      dispatch({ type: actions.ADD_DREAM, dream });
    })
    .catch((err) => {
      console.error(err);
    });
};
