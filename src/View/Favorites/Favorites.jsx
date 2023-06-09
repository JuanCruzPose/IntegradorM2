import {connect} from "react-redux";
import Cards from "../../components/Cards/Cards";
import { useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../Redux/actions";
import { useState } from "react";

const Favorites = (props) => {
  const dispatch = useDispatch();
  const [aux,setAux] = useState(false)

  
  const handleOrder = (event)=>{
    dispatch(orderCards(event.target.value))
    setAux = true;
   }

   const handleFilter = (event) =>{
    dispatch(filterCards(event.target.value))

   }



    return(
        <div>
          <select onChange={handleOrder}>
            <option value="A">ASCENDENTE</option>
            <option value="D">DESCENDENTE</option>
          </select>
          <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value= "unknown">unknown</option>
          </select>

        
            <Cards characters={props.favorites}  />
         </div>
     )
   }
const mapStateToProps = (state) => {
    return {
      favorites: state.myFavorites,
    };
  };

export default connect (mapStateToProps,null)(Favorites);