import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  // setCategoryFilter,
  // setPriceFilter,
  // setBrandFilter,
  setFilter,
  setSortOrder,
} from "../actions";
import { selectFilteredProducts } from "../selectors";
import "../styles/ProductList.css";
import { useSelect } from "../hooks/useSelect";

// const categories = ["Electronics", "Books"];
// const prices = [50, 100, 200];
// const brands = ["Brand A", "Brand B", "Brand C"];

function ProductList() {
  const dispatch = useDispatch();

  const { selectStructure, selectOptions } = useSelect();

  const products = useSelector(selectFilteredProducts);
  const filter = useSelector((state) => state.filter);

  // const handleCategoryChange = (event) => {
  //   dispatch(setCategoryFilter(event.target.value));
  // };

  // const handlePriceChange = (event) => {
  //   dispatch(setPriceFilter(event.target.value));
  // };

  // const handleBrandChange = (event) => {
  //   dispatch(setBrandFilter(event.target.value));
  // };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    dispatch(setFilter(name, value));
  };

  return (
    <>
      {/* <div>
        <select name="category" value={filter.category} onChange={handleFilterChange}>
          <option value="">All categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select name="price" value={filter.price} onChange={handleFilterChange}>
          <option value="">All prices</option>
          {prices.map((price) => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </select>

        <select name="brand" value={filter.brand} onChange={handleFilterChange}>
          <option value="">All brands</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div> */}

      <div>
        {selectStructure.map((selectItem) => (
          <select
            name={selectItem.name}
            value={filter[selectItem.name] || selectOptions[selectItem.name]}
            onChange={handleFilterChange}
            key={selectItem.name}
          >
            <option value="">All {selectItem.label}</option>
            {selectItem.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.optionLabel}
              </option>
            ))}
          </select>
        ))}
      </div>

      <div className="product-list-container">
        {products.map((product) => (
          <div key={product.id} className="product-container">
            <p>{product.name}</p>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <p>{product.brand}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
