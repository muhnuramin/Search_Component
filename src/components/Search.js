import React from 'react';

// props=properti
export function Search(props){
    return(
        <div>
            <label>{props.label}</label>
            <input type="text" placeholder={props.placeholder}></input>
            <button>Mulai Mencari</button>
        </div>
    );

}
