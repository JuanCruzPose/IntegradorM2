import "./App.css";
import { Route,Routes, useLocation ,useNavigate} from "react-router-dom";
import axios from "axios";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useState,useEffect } from "react";
import About from "./View/About/About";
import Detail from "./View/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./View/Favorites/favorites";


function App() {
  // hooks
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const [access,setAccess] = useState(false)
  const Navigate = useNavigate();

  useEffect(() => {
    !access && Navigate("/");
  }, [access]);

  //variables para login fake
  const email = "juan@gmail.com";
  const password = "1contra"


  //event handlers
  const onSearch = (id) => {
  
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name && !characters.some((char) => char.id === data.id)){
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No es valido!");
        }
      }
    );
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const login = (userData) =>{
    if (userData.password === password && userData.email === email) {
      setAccess(true);
      Navigate("/home");
    }

  }

  return (
    <div className="App" >
     {location.pathname !== "/" && (
        <Nav onSearch={onSearch} />
      )}
       
    <Routes>
      <Route path="/" element={<Form login = {login}/>} />
      <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}
      />
      <Route path="/about" element= {<About />}/>
      <Route path="/Favorites" element= {<Favorites />}/>

      <Route path="/detail/:id" element= {<Detail />}/>

    </Routes>
      
    </div>
  );
}

export default App;
