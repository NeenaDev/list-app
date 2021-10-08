
  export const initialState = {
    list: [
      {
        id: 66,
        name: 'Bananas',
        category: 'Fruit',
        deliveryMethod: 'Air',
      },
      {
        id: 16,
        name: 'Whole Grain Bread',
        category: 'Grains',
        deliveryMethod: 'Air',
      },
      {
        id: 100,
        name: 'Lettuce',
        category: 'Vegitable',
        deliveryMethod: 'Ground',
      },
      {
        id: 10,
        name: 'Roasted Turkey',
        category: 'Deli',
        deliveryMethod: 'Ground',
      },
    ],
    selectedItem: [],
  };
  
  const removeItem = (array, action) => {
    return array.filter((item, index) => index !== action.payload);
  };

  const removeFromList = (array, action) => {
    return array.filter((item) => item.id !== action.payload);
  };
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_LIST":
        return {
          ...state,
          selectedItem: [
            ...state.selectedItem,
            action.payload,
          ]
        };
      case "DESELECT_ITEM":
      return {
        ...state,
        selectedItem: removeFromList(state.selectedItem, action),
      };
      case "REMOVE_ITEM":
        return {
          ...state,
          list: removeItem(state.list, action),
          selectedItem: removeFromList(state.selectedItem, action),
        };
      case "SELECTED_ITEMS": {
        return {
          ...state,
          selectedItem: action.payload
        };
      }
      default:
        return state;
    }
  };
  