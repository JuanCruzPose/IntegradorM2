const validation = (userData, errors, setErrors) => {
  //email
  if (!userData.email) 
  setErrors({ ...errors, email: "Completa este campo" });
  else if (userData.email.length > 35)
    setErrors({ ...errors, email: "no puede superar los 35 caracteres" });
  else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email))
    setErrors({ ...errors, email: "email invalido" });
  else {
    setErrors({ ...errors, email: "" });
  }

  //password
  if (userData.password.length < 6 || userData.password.length > 10)
   setErrors({ errors, password: "Longitud invalidad" });
  else if (!/\d/.test(userData.password))
    setErrors({ ...errors, password: "Debe contener al menos un numero" });
  else {
    setErrors({ errors, password: "" });
  }
};

export default validation;
