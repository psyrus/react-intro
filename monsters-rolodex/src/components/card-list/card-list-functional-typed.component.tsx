import "./card-list.styles.css";

import { Monster } from "../../AppFunctionalTyped";
import CardFunctionalTyped from "../card/card-functional-typed.component";

type CardListProps = {
    monstersList: Monster[]
}

const CardListFunctionalTyped = ( { monstersList }:CardListProps ) => {
    console.log("Render from cardlist")
    console.log(monstersList)
    // Note: This return could be removed if it was the only thing in the code block (no console.log). Apparently it's like PWSH in the sense that it can implicitly return
    return (
        <div className="card-list">
            {
                monstersList.map((item) => (
                    <CardFunctionalTyped item={item} key={item.id} />
                ))
            }
        </div>
    )
}

export default CardListFunctionalTyped;