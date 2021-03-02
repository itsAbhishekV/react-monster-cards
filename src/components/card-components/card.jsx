import React from 'react';
import './card.css';


export const Card = (props) => {
    return (
        <div className = "card">
            <img alt = "monster" src = {`https://robohash.org/${ props.monsters.id }?set=set2&size=120x120`} />
            <h2> { props.monsters.name } </h2>
            <h5> { props.monsters.phone } </h5>
            <h5> { props.monsters.email } </h5>
        </div>
    )
}