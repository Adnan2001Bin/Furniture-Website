import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllFilteredProducts } from "@/store/shop/products-slice";
import ProductFilter from "@/components/Shopping-View/filter";
import ShoppingProductTile from "@/components/Shopping-View/product-tile";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { sortOptions } from "@/Config";
import { ArrowUpDownIcon } from "lucide-react";

function ShoppingListing() {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.shopProducts);

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState(null);

  // Restore filters from sessionStorage on load
  useEffect(() => {
    const savedFilters = JSON.parse(sessionStorage.getItem("filters")) || {};
    setFilters(savedFilters);
  }, []);

  // Fetch filtered products on initial load
  useEffect(() => {
    dispatch(fetchAllFilteredProducts());
  }, [dispatch]);

  // Handle sorting
  function handleSort(value) {
    setSort(value);
  }

  // Handle filter changes (both categories and subcategories)
  function handleFilter(sectionId, option) {
    let updatedFilters = { ...filters };

    if (sectionId === "category") {
      const isUnchecking = updatedFilters[sectionId]?.includes(option);

      // Toggle category selection
      updatedFilters[sectionId] = isUnchecking
        ? updatedFilters[sectionId].filter((id) => id !== option)
        : [...(updatedFilters[sectionId] || []), option];

      // Remove related subcategories if unchecking
      if (isUnchecking) {
        const subCategoryKey = `subCategory${option.charAt(0).toUpperCase() + option.slice(1)}`;
        delete updatedFilters[subCategoryKey];
      }
    } else {
      // Toggle subcategory selection
      const subCategoryList = updatedFilters[sectionId] || [];
      const isUncheckingSub = subCategoryList.includes(option);

      updatedFilters[sectionId] = isUncheckingSub
        ? subCategoryList.filter((id) => id !== option)
        : [...subCategoryList, option];
    }

    setFilters(updatedFilters);
    sessionStorage.setItem("filters", JSON.stringify(updatedFilters));
  }

  console.log(filters, "filters")

  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 p-4 md:p-6">
      <ProductFilter filters={filters} handleFilter={handleFilter} />

      <div className="bg-background w-full rounded-lg shadow-sm">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-lg font-extrabold">All Products</h2>

          <div className="flex items-center gap-3">
            <span className="text-muted-foreground">
              {productList?.length || 0} Products
            </span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <ArrowUpDownIcon className="h-4 w-4" />
                  <span>Sort by</span>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuRadioGroup value={sort} onValueChange={handleSort}>
                  {sortOptions.map((sortItem) => (
                    <DropdownMenuRadioItem
                      value={sortItem.id}
                      key={sortItem.id}
                    >
                      {sortItem.label}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {productList && productList.length > 0
            ? productList.map((productItem) => (
                <ShoppingProductTile key={productItem.id} product={productItem} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default ShoppingListing;
