import { useState } from "react";

function Navbar() {
  const [search, setSearch] = useState("");

  return (
    <nav>
      <h1>DevConnect</h1>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />

      <button>Notifications</button>
      <button>Profile</button>
      <button>Settings</button>
    </nav>
  );
}

export default Navbar;