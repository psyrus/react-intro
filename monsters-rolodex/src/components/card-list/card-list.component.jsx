import { Component } from "react";
import "./card-list.styles.css"
import "./card.styles.css"
class CardList extends Component {

    render() {
        console.log("Render from cardlist")
        console.log(this.props)
        return (
            <div className="card-list">
                {
                    this.props.content.map((item) => (
                        <div className="card-container" key={item.id}>
                            <img alt={`monster ${item.name}`} src={`https://robohash.org/${item.id}?set=set2&size=180x180`}/>
                            <h2>{item.name}</h2>
                            <p>{item.email}</p>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default CardList;