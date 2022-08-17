import { Component } from "react";
import "./search-box.styles.css"

const SearchBoxFunctional = (props) => {
    return (
        <input
            className={`search-box-test ${props.className}`}
            type='search'
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    )
}

export default SearchBoxFunctional;