import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function updateName(e) {
    const { name, value } = e.target;

    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={contact.fName}
          onChange={updateName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
          onChange={updateName}
        />
        <input
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={updateName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
