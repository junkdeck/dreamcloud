export const getDreamById = (state) => (id) =>
  state.dreams.find((dream) => dream.id == id);
