import { Component } from "react";
import './card.styles.css'

// Doing this the auto-destructured way as an example even though I don't really like it. Replaces props with the object reference to convert props to map the properties within to the names within the object.
const CardFunctional = ({ item }) => {
    return (
        <div className="card-container" key={item.id}>
            <img alt={`monster ${item.name}`} src={`https://robohash.org/${item.id}?set=set2&size=180x180`} />
            <h2>{item.name}</h2>
            <p>{item.email}</p>
        </div>
    )
}
export default CardFunctional;