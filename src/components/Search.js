import React from 'react';

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
        <div style={{fontFamily:"sans-serif",fontSize:14}}>
            <label>
            <div style={{marginBottom:5}}>{props.label}</div>
            <div
            style={{
                border:"solid 1px #aaa",
                borderRadius:3,
                padding:"5px 10px",
                width:"200px",
                dispaly:"inline-block"
            }}
            >
            <input id="search" 
            onChange={inputOnChange} 
            type="text" 
            placeholder={props.placeholder} 
            value={value}
            style={{
                border:"none",
                outline:"none"
            }}
            ></input>
            {value.length >0 &&<button onClick={ButtonClear}
            style={{
                background:"transparent",
                border:"none",
                outline:"none",
                fontSize:17,
                cursor:"pointer"
            }}
            >&times;</button>}

            </div>
            </label>
            <button style={{
                background:"Blue",
                border:"none",
                dispaly:"inline",
                padding:10,
                marginTop:10
            }} onClick={ButtonClick}>Cari</button>

            
            <ul>
                {sugestion.map(function(nama){//map perulangan pada jsx
                    return <li>{nama}</li>
                })}
            </ul>


            </div>

            
           
        
    );

}
