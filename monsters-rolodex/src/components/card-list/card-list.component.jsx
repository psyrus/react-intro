import { Component } from "react";

class CardList extends Component {

    render() {
        console.log("Render from cardlist")
        console.log(this.props)
        return (
            <div>
                {
                    this.props.content.map((item) => (
                        <h1 key={item.id}>{item.name}</h1>
                    ))
                }
            </div>
        )
    }
}

export default CardList;