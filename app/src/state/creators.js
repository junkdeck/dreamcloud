import { navigate } from "@reach/router";
import actions from "./actions";

export const fetchData = (state, dispatch) => {
  dispatch({ type: actions.DATA_REQUEST });
  fetch("http://localhost:3000/dreams")
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error("Network error");
      }
    })
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
        error: err,
      });
    });
};

export const postData = (dream, state, dispatch) => {
  fetch("http://localhost:3000/dreams", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ dream }),
  })
    .then((res) => {
      return res.json();
    })
    .then(async (data) => {
      await dispatch({ type: actions.ADD_DREAM, dream });
      navigate(`/dream/${data[0].id}`);
    })
    .catch((err) => {
      console.error(err);
    });
};
