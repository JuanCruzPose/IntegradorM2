import { Link } from "react-router-dom";
import style from "./Card.module.css"
import {connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../Redux/actions";
import { useState , useEffect} from "react";

 function Card(props) {
   const {character, onClose,addFavorite,removeFavorite,favorites} = props;
   const [fav,setFav] = useState(false)


    useEffect(() => {
     favorites.forEach((fav) => {
        if (fav.id === character.id) {
           setFav(true);
        }
     });
  }, [favorites]);





   const handleFavorites = () => {
     if (fav){ 
      setFav(false);
      removeFavorite(character.id)
    } else {
      setFav(true);
      addFavorite(character)
    }
   }

 

 
   return (
     <div className={style.card}>
       <div className={style.card2}>
       <div className={style.boton}>
       <button onClick={() => onClose(character.id)}>X</button>
       {fav ? (
      <button onClick={handleFavorites}>❤️</button>
   ) : (
      <button onClick={handleFavorites}>🤍</button>
   )}
       </div>
      
       <div className={style.textocard}>
        <Link to={`/detail/${character.id}`} >
       <h2>Name:{character.name}</h2>
       </Link>
       <img className={style.characterImage} src={character.image} alt={character.name} />
       <h2>Species:{character.species}</h2>
       <h2>Gender:{character.gender}</h2>
       </div>
       </div>
     </div>
   );
 }

 const mapDispatchToProps = (dispatch) => {
    return {
      addFavorite: (character)=> {dispatch(addFavorite(character))},
      removeFavorite: (id)=> {dispatch(removeFavorite(id))}
    }
    
    
  }
  const mapStateToProps = (state)=> {
    return {
      favorites: state.myFavorites
    }
  
  }
  
 export default connect (mapStateToProps,mapDispatchToProps) (Card);