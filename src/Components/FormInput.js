import React, { useState } from "react";
import "./forminput.css";

function FormInput(props) {
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="formInput">
      {/* <label>Username</label> */}
      {/* <input
        type="text"
        placeholder={props.placeholder}
        onChange={(e) => props.setUserName(e.target.value)}
      /> */}
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmpassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
}

export default FormInput;
