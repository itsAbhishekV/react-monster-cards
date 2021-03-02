import React from "react";

import './search.css';

export const Search = ( { placeholder, change } ) => {
    return (

        <div className = "search">
            <input type = "search" 
            placeholder = {placeholder} 
            onChange = {change}  />
        </div>

    )

}