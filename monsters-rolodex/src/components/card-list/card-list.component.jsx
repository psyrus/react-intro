import { Component } from "react";
import "./card-list.styles.css"

import Card from "../card/card.component";
class CardList extends Component {

    render() {
        console.log("Render from cardlist")
        console.log(this.props)
        return (
            <div className="card-list">
                {
                    this.props.content.map((item) => (
                        <Card item={item} key={item.id} />
                    ))
                }
            </div>
        )
    }
}

export default CardList;