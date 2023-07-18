// export const SET_CATEGORY_FILTER = "SET_CATEGORY_FILTER";
// export const SET_PRICE_FILTER = "SET_PRICE_FILTER";
// export const SET_BRAND_FILTER = "SET_BRAND_FILTER";

// export const setCategoryFilter = (category) => ({
//   type: SET_CATEGORY_FILTER,
//   payload: category,
// });

// export const setPriceFilter = (price) => ({
//   type: SET_PRICE_FILTER,
//   payload: price,
// });

// export const setBrandFilter = (brand) => ({
//   type: SET_BRAND_FILTER,
//   payload: brand,
// });

export const SET_FILTER = "SET_FILTER";
export const SET_SORT_ORDER = "SET_SORT_ORDER";

export const setFilter = (name, value) => ({
  type: SET_FILTER,
  payload: { name, value },
});

export const setSortOrder = (order) => ({
  type: SET_SORT_ORDER,
  payload: order,
});
