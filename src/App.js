import React from 'react';
import {Search} from "./components/Search"

function App() {
  return (
    <div>
      <h1>Daftar Mahasiswa</h1>
     <Search 
     label="Cari Mahasiswa " 
     placeholder="nama"/>
     <h1>Daftar Domisili</h1>
     <Search 
     label="Cari Mahasiswa "
     placeholder="domisili"/>
    </div>
  );
}

export default App;
