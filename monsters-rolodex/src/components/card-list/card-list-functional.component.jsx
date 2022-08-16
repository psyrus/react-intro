import { Component } from "react";
import "./card-list.styles.css"

import CardFunctional from "../card/card-functional.component";
import Card from "../card/card.component";

const CardListFunctional = (props) => {
    console.log("Render from cardlist")
    console.log(props)
    // Note: This return could be removed if it was the only thing in the code block (no console.log). Apparently it's like PWSH in the sense that it can implicitly return
    return (
        <div className="card-list">
            {
                props.content.map((item) => (
                    <Card item={item} key={item.id} />
                ))
            }
        </div>
    )
}

export default CardListFunctional;