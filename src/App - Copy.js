import logo from "./logo.svg";
import "./App.css";
import FormInput from "./Components/FormInput";
import { useRef, useState } from "react";

function App() {
  // const [userName, setUserName] = useState();
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    errorMessage: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character",
      pattern: "^[a-zA-Z0-9]{3,16}$",
      label: "Username",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      errorMessage: "Please enter valid email",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      errorMessage: "This field is required",
      label: "Birthday",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "text",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 specific character",
      pattern: "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$",
      label: "Password",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "text",
      placeholder: "Confirm Password",
      errorMessage: "Password don't match",
      pattern: values.password,
      label: "Confirm Password",
      required: true,
    },
  ];

  // const usernameRef = useRef();
  // console.log(usernameRef);
  // console.log("re-rendered");

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = new FormData(e.target);
    // console.log(Object.fromEntries(data.entries()));
    console.log(values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
        {/* <FormInput placeholder="Username" name="username" refer={usernameRef} />
        <FormInput placeholder="Email" name="email" />
        <FormInput placeholder="FullName" name="fullname" />
        <FormInput placeholder="Other" name="other" /> */}
      </form>
    </div>
  );
}

export default App;
