import logo from "./logo.svg";
import "./App.css";
import FormInput from "./Components/FormInput";
import { useRef, useState } from "react";

function App() {
  // const [userName, setUserName] = useState();
  const usernameRef = useRef();
  console.log(usernameRef);
  console.log("re-rendered");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <FormInput placeholder="Username" name="username" refer={usernameRef} />
        <FormInput placeholder="Email" name="email" />
        <FormInput placeholder="FullName" name="fullname" />
        <FormInput placeholder="Other" name="other" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
