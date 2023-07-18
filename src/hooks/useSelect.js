import { useMemo } from "react";

export const useSelect = () => {
  const selectStructure = useMemo(
    () => [
      {
        inputType: "select",
        name: "category",
        label: "Category",
        options: [
          { value: "Electronics", optionLabel: "Electronics" },
          { value: "Books", optionLabel: "Books" },
          { value: "Video", optionLabel: "Video" },
        ],
      },
      {
        inputType: "select",
        name: "price",
        label: "Price",
        options: [
          { value: "50", optionLabel: "50" },
          { value: "100", optionLabel: "100" },
          { value: "200", optionLabel: "200" },
        ],
      },
      {
        inputType: "select",
        name: "brand",
        label: "Brand",
        options: [
          { value: "Brand A", optionLabel: "Brand A" },
          { value: "Brand B", optionLabel: "Brand B" },
          { value: "Brand C", optionLabel: "Brand C" },
        ],
      },
      {
        inputType: "select",
        name: "sort",
        label: "Sort By",
        options: [
          { value: "asc", optionLabel: "Ascending" },
          { value: "desc", optionLabel: "Descending" },
        ],
      },
    ],
    []
  );

  const selectOptions = {
    category: "",
    price: "",
    brand: "",
    sort: "",
  };

  return { selectStructure, selectOptions };
};
