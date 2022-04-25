import "./styles.css";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cnic, setCnic] = useState("");
  const [username, setUsername] = useState("");
  const [fullName, setFullname] = useState("");
  const [CNIC, setCNIC] = useState("");
  const [fullEmail, setFullemail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (cnic.length !== 13) {
      return alert("CNIC must be equal to 13");
    } else {
      setFullname(name);
      setFullemail(email);
      setCNIC(cnic);
    }
    setCnic("");
    setEmail("");
    setName("");
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          required
          placeholder="CNIC"
          value={cnic}
          onChange={(e) => setCnic(e.target.value)}
        />
        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setUsername(email.split("@")[0]);
          }}
        />
        <input type="submit" value="Validate" />
      </form>

      <h1>Username is: {username}</h1>
      <h1>Name is: {fullName}</h1>
      <h1>Email is: {fullEmail}</h1>
      <h1>CNIC is: {CNIC}</h1>
    </div>
  );
}
