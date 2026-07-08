import { useMemo } from "react";

import { filterProducts } from "@/utils/filterProducts";

export const useFilters = (state) => {

    return useMemo(()=>{

        return filterProducts({

            products:state.allProducts,

            category:state.selectedCategory,

            brands:state.selectedBrands,

            minPrice:state.priceRange.min,

            maxPrice:state.priceRange.max

        })

    },[
        state.allProducts,
        state.selectedCategory,
        state.selectedBrands,
        state.priceRange
    ])

}