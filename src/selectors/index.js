// export const selectFilteredProducts = (state) => {
//   const { category, price, brand } = state.filter;
//   return state.products.filter(
//     (product) =>
//       (category ? product.category === category : true) &&
//       (price ? product.price == price : true) &&
//       (brand ? product.brand === brand : true)
//   );
// };

export const selectFilteredProducts = (state) => {
  const { category, price, brand, sort } = state.filter;

  let filteredProducts = state.products.filter(
    (product) =>
      (category ? product.category === category : true) &&
      (price ? product.price <= price : true) &&
      (brand ? product.brand === brand : true)
  );

  if (sort) {
    filteredProducts = [...filteredProducts].sort((a, b) => {
      const compare = a.name.localeCompare(b.name);
      return sort === "asc" ? compare : -compare;
    });
  }

  return filteredProducts;
};
