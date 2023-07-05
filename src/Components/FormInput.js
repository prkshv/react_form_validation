import React from "react";

function FormInput(props) {
  return (
    <div className="formInput">
      {/* <label>Username</label> */}
      {/* <input
        type="text"
        placeholder={props.placeholder}
        onChange={(e) => props.setUserName(e.target.value)}
      /> */}
      <input type="text" placeholder={props.placeholder} name={props.name} />
    </div>
  );
}

export default FormInput;
