import cloneDeep from 'lodash.clonedeep';

const initialState = {
  theme: 'dark',
};

const basicReducer = (state = initialState, { type, payload }) => {
  let newState;
  switch (type) {
    case 'TOGGLE_THEME':
      newState = cloneDeep(state);

      newState.theme = state.theme === 'light' ? 'dark' : 'light';

      return newState;

    default:
      return state;
  }
};

export default basicReducer;
