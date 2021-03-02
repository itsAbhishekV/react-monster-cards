import React from "react";
import { Card } from "../card-components/card";
import "./card-list.css";

export const CardList = (props) => {

    return (
        <div className="card-list">
            {props.monsters.map(monsters => 
                <Card monsters = {monsters} />
                )}
        </div>
)
}