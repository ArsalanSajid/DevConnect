import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]=useState("");
  const[success,setSuccess]=useState("");
  function handleSubmit(event) {
    event.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
  setError("Email and password are required");
  return;
}
  if (!email.includes("@") || !email.includes(".")) {
  setError("Invalid email");
  return;
}
        setError("")
        setSuccess("login detail are valid")
    console.log(email);
    console.log(password);
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
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

        <button type="submit">Login</button>
        <p>{error}</p>
       
      </form>
    </div>
  );
}

export default Login;