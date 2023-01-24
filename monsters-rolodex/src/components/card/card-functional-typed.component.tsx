import { Monster } from "../../AppFunctionalTyped";
import './card.styles.css';

type CardProps = {
    item: Monster
}

const CardFunctionalTyped = ({ item }: CardProps) => {
    return (
        <div className="card-container" key={item.id}>
            <img alt={`monster ${item.name}`} src={`https://robohash.org/${item.id}?set=set2&size=180x180`} />
            <h2>{item.name}</h2>
            <p>{item.email}</p>
        </div>
    )
}
export default CardFunctionalTyped;