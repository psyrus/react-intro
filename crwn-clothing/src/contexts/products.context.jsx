import { createContext, useEffect, useState } from "react";
import PRODUCTS from "../shop-data.json"

export const ProductsContext = createContext({
    setProducts: () => null,
    products: [],
});

// I don't know what the parent object to the "children" property is
export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = { products };

    // useEffect(() => {
    console.log("Effect from Products Provider");
    console.log(value);


    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    // });
}