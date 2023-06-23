import { useState } from "react";
import validation from "./validation";

const Form = ({login}) => {
    const [userData,setUserdata] = useState({
        email: "",
        password: "",
    })

    const [errors,setErrors] = useState({
        email: "",
        password: "",
    })

     const HandleImputChange = (event) =>{
        event.preventDefault();
        setUserdata({
            ...userData,[event.target.name]: event.target.value
        })
        validation({...userData,[event.target.name]: event.target.value},errors,setErrors)


     }
      const HandleSubmit = (event) =>{
        event.preventDefault()
        login(userData);

      }




    return(
        <form type = "submit">
            <div>
                <label>Email</label>
                <input 
                placeholder="wubalubadubdub@asdf.com" 
                name="email" 
                value={userData.email}
                onChange={HandleImputChange}
                
                />
                <p>{errors.email}</p>
            </div>
            <div>
                <label>Password</label>
                <input 
                type="password" 
                name="password"
                value={userData.password} 
                onChange={HandleImputChange} 
                />
                <p>{errors.password}</p>
            </div>
            <button onClick={HandleSubmit}>LOGIN</button>

            </form>
    )
}

export default Form;