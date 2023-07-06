import "./App.css";
import FormInput from "./Components/FormInput";
import { useState } from "react";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
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
      </form>
    </div>
  );
}

export default App;
