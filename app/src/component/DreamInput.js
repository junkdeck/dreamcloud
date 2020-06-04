import { h } from "preact";
import { useState, useContext } from "preact/hooks";

import { Store } from "../state/store";

import { postData } from "../state/creators";

const initialInput = {
  title: "",
  body: "",
};

const DreamInput = () => {
  const [input, setInput] = useState(initialInput);
  const { state, dispatch } = useContext(Store);

  const clearInput = () => {
    setInput(initialInput);
  };

  const handleInput = (key) => (e) => {
    setInput({ ...input, [key]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting dream...");

    clearInput();

    postData(input, state, dispatch);
  };

  const isInputValid = () =>
    input.title &&
    input.body &&
    input.title.length > 0 &&
    input.body.length > 0;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">title</label>
      <input
        id="title"
        name="title"
        type="input"
        value={input.title}
        onChange={handleInput("title")}
      />
      <label htmlFor="dream">dream</label>
      <textarea
        id="dream"
        name="dream"
        onChange={handleInput("body")}
        value={input.body}
        rows={4}
      ></textarea>
      <input type="submit" disabled={!isInputValid()} value="remember" />
    </form>
  );
};

export default DreamInput;
