import React from "react";
import SearchBar from "../SearchBar/SearchBar"
import { Link,NavLink } from "react-router-dom";
const Nav = (props) =>{
  const {onSearch} = props;


   
 
  return (
     <div>
      <Link to = "/home" ><button>HOME</button></Link>
      <Link to= "/about" > <button>ABOUT</button></Link>
      <Link to="/favorites"> <button>FAVS</button></Link>
      <SearchBar onSearch = {onSearch}/>
     
     </div>
   );
 }
 export default Nav;