export const actionCreators = {
    addToList: data => ({ type: "ADD_TO_LIST", payload: data }),
    deSelectItem: data => ({ type: "DESELECT_ITEM", payload: data }),
    removeItem: data => ({ type: "REMOVE_ITEM", payload: data }),
    selectedItem: data => ({ type: "SELECTED_ITEMS", payload: data })
  };