import React, { useEffect, useState, Fragment } from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";
import { filterOptions } from "@/Config";

function ProductFilter({ filters, handleFilter }) {
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Sync selected categories with filters
  useEffect(() => {
    if (filters && filters.category) {
      setSelectedCategories(filters.category);
    }
  }, [filters]);

  return (
    <div className="bg-background rounded-lg shadow-sm">
      <div className="p-4 border-b">
        <h2 className="text-lg font-extrabold">Filters</h2>
      </div>
      <div className="p-4 space-y-4">
        {/* Render Categories */}
        {filterOptions.category.map((category) => (
          <Fragment key={category.id}>
            <div>
              <h3 className="text-base font-bold">{category.label}</h3>
              <div className="grid gap-2 mt-2">
                <Label className="flex font-medium items-center gap-2">
                  <Checkbox
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={() => {
                      handleFilter("category", category.id);
                    }}
                  />
                  {category.label}
                </Label>
              </div>
            </div>
            <Separator />
          </Fragment>
        ))}

        {/* Render Subcategories based on selected categories */}
        {selectedCategories.map((categoryId) => {
          const subCategoryKey = `subCategory${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}`;
          const subCategories = filterOptions[subCategoryKey];

          return (
            subCategories && (
              <Fragment key={categoryId}>
                <h3 className="text-base font-bold">Subcategories for {categoryId}</h3>
                <div className="grid gap-2 mt-2">
                  {subCategories.map((subCategory) => (
                    <Label key={subCategory.id} className="flex font-medium items-center gap-2">
                      <Checkbox
                        checked={
                          filters[subCategoryKey]?.includes(subCategory.id) || false
                        }
                        onCheckedChange={() =>
                          handleFilter(subCategoryKey, subCategory.id)
                        }
                      />
                      {subCategory.label}
                    </Label>
                  ))}
                </div>
                <Separator />
              </Fragment>
            )
          );
        })}
      </div>
    </div>
  );
}

export default ProductFilter;
