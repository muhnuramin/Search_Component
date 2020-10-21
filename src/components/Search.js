import React from 'react';

// props=properti
export function Search(props){
    function ButtonClick(){
        alert('Tombol di klik')
    }
    function inputOnChange(event){
        console.log(event.target.value)
    }

    return(
        <div>
            <label>{props.label}</label>
            <input onChange={inputOnChange} type="text" placeholder={props.placeholder}></input>
            <button onClick={ButtonClick}
            >Mulai Mencari</button>
        </div>
    );

}
