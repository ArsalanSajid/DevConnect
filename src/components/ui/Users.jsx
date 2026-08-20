import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

  useEffect(() => {
    async function getUsers() {
        try{
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      
      
      if (!response.ok) {
  throw new Error("Failed to fetch users");
     }   

      const data = await response.json();
    

      setUsers(data);
      setLoading(false);
    }
    catch(error)
    {
        setError("failed to load user")
        setLoading(false)
    }
    }

    getUsers();
  }, []);

  return (
    <div>
        <h1>users</h1>
   {error ? (
  <p>{error}</p>
) : loading ? (
  <p>Loading...</p>
) : (
  users.map((user) => (
    <p key={user.id}>{user.name}</p>
  ))
)}
    </div>
  );
}

export default Users;