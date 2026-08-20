import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const[error,setError]=useState("");
  function handleSubmit(event) {
  event.preventDefault();

    if(name.trim()==="")
    {
      setError("Invalid name")
      return;
    }
      
     if (email.trim() === "" || password.trim() === "" ) {
  setError("Email and password are required");
  return;
}
  if (!email.includes("@") || !email.includes(".")) {
  setError("Invalid email");
  return;
}
if(password!==confirmPassword)
{
  setError("password not match")
  return;
}
        setError("")
        console.log(name);
        console.log(email)
        console.log(password)
       

}

  return (
    <div>
    <h1>Register</h1>
    <form onSubmit={handleSubmit}>
      <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        /> 
         <input
          type="password"
          placeholder=" confirm Password"
          value={confirmPassword}
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
        />
        <p>{error}</p>
          <button type="submit">Register</button>
        </form>
      
    </div>
  );
}

export default Register;