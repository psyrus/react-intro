import { Component } from "react";
import './card.styles.css'

class Card extends Component {
    render() {
        const { item } = this.props;
        return (
            <div className="card-container" key={item.id}>
                <img alt={`monster ${item.name}`} src={`https://robohash.org/${item.id}?set=set2&size=180x180`} />
                <h2>{item.name}</h2>
                <p>{item.email}</p>
            </div>
        )
    }
}

export default Card;