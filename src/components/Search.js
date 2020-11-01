import React from 'react';
import '../App.css';

// props=properti
export function Search(props){
    //value,setValue=Cuma penamaan
    const [value, setValue] = React.useState("");
    const [sugestion,setSugestion]=React.useState([]);

    React.useEffect(
        function(){
            const filter=props.nama.filter(function(nama){
            return nama.includes(value);
        });
        setSugestion(filter);
        },
        [value,props.nama]
    )
    
    function ButtonClick(){
        // const value=document.getElementById('search').value=Akses Dom Langsung
        alert(value)
    }
    function ButtonClear(){
        setValue('')
    }
    function inputOnChange(event){
        setValue(event.target.value)

        
    }


    return(
        <div className="Container">
            <label>
            <div>{props.label}</div>
            <div className="Pembungkus">
            <input id="search" 
            onChange={inputOnChange} 
            type="text" 
            placeholder={props.placeholder} 
            value={value}></input>
            {value.length >0 &&<button className="Clear" onClick={ButtonClear}>&times;</button>}
            </div>
            <button className="Klik"onClick={ButtonClick}>Cari</button>
            
            </label>
            

            
            <ul>
                {sugestion.map(function(nama){//map perulangan pada jsx
                    return <li>{nama}</li>
                })}
            </ul>
        </div>
    );

}
