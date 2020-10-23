import React from 'react';
import {Search} from "./components/Search"
// import {Info} from "./components/Info"

export default function App() {
  return (
    <div>
      {/* <Info /> */}
      <h1>Daftar Mahasiswa</h1>
     <Search 
     label="Cari Mahasiswa " 
     placeholder="nama"
     nama={["Amin","Anton","Anis","Anggun"]}/>

     <h1>Daftar Domisili</h1>
     <Search 
     label="Cari Mahasiswa "
     placeholder="domisili"
     nama={["Mentaras","Malang","Magetan","Mojokerto"]}/>
    </div>
  );
}


