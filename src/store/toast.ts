import produce from 'immer';



const initialState = {
  show: false,
  text: "",
};

export type Toast = typeof initialState;

export default (state = initialState, action: any) => produce(state, draft => {
  switch (action.type) {
    case "toast/show":
      draft.show = true;
      draft.text = action.payload;
      break;
    case "toast/hide":
      draft.show = false;
      break;
  }
});
