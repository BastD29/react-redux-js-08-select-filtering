import {
  //   SET_CATEGORY_FILTER,
  //   SET_PRICE_FILTER,
  //   SET_BRAND_FILTER,
  SET_FILTER,
  SET_SORT_ORDER,
} from "../actions";

const initialState = {
  // prettier-ignore
  products: [
    { id: 1, name: 'Product A', category: 'Electronics', price: 100, brand: 'Brand A' },
    { id: 2, name: 'Product B', category: 'Video', price: 200, brand: 'Brand B' },
    { id: 3, name: 'Product C', category: 'Books', price: 50, brand: 'Brand C' },
    { id: 4, name: 'Product D', category: 'Electronics', price: 200, brand: 'Brand A' },
    { id: 5, name: 'Product E', category: 'Video', price: 100, brand: 'Brand B' },
    { id: 6, name: 'Product F', category: 'Books', price: 50, brand: 'Brand C' },
    { id: 7, name: 'Product G', category: 'Electronics', price: 100, brand: 'Brand X' },
    { id: 8, name: 'Product H', category: 'Video', price: 200, brand: 'Brand B' },
    { id: 9, name: 'Product I', category: 'Books', price: 50, brand: 'Brand C' },
    
  ],
  filter: {
    category: "",
    price: "",
    brand: "",
    sort: "asc",
  },
};

// export const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_CATEGORY_FILTER:
//       return {
//         ...state,
//         filter: {
//           ...state.filter,
//           category: action.payload,
//         },
//       };
//     case SET_PRICE_FILTER:
//       return {
//         ...state,
//         filter: {
//           ...state.filter,
//           price: action.payload,
//         },
//       };
//     case SET_BRAND_FILTER:
//       return {
//         ...state,
//         filter: {
//           ...state.filter,
//           brand: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          [action.payload.name]: action.payload.value,
        },
      };
    case SET_SORT_ORDER:
      return {
        ...state,
        filter: {
          ...state.filter,
          sort: action.payload,
        },
      };
    default:
      return state;
  }
};
