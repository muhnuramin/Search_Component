import React from 'react';

export function Info(){
    
    // if (false) {
    // return<h1>Kondisi tru</h1>
    // }else{
    // return<h3>Kondisi False</h3>
    // }

    //return false?<h1>Kondisi true</h1>:<h3>Kondisi false</h3>//if,else react
    let span;
   

    if(true){
        span=<span>Hay</span>;
    }
    return(
        <div>
            <h1>Hallo Gaes</h1>
            {span}
        </div>
    );
    
}