import { useState } from "react";
import style from "./SearchBar.module.css"
export default function SearchBar(props) {
   const {onSearch} = props;

   const [id,setid] = useState("")

   const handleChange = (event) => {
    setid(event.target.value);

   }
 
   return (
     <div className= {style.searchbar}>
       <input className={style.input} type="search" onChange={handleChange} />
       <button className={style.button} onClick={() => onSearch(id)}>Agregar</button>
     </div>
   );
 }