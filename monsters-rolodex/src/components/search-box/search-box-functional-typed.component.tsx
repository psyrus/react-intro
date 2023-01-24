import { ChangeEvent } from "react";

import "./search-box.styles.css";

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBoxFunctionalTyped = (props: SearchBoxProps) => {
    return (
        <input
            className={`search-box-test ${props.className}`}
            type='search'
            placeholder={props.placeholder}
            onChange={props.onChangeHandler}
        />
    )
}

export default SearchBoxFunctionalTyped;