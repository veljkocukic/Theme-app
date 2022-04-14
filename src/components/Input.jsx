import React from "react";

const TextInput = (props) => {
  let cName = "input-wrap ";
  if (props.form.errors && props.form.errors[props.field.name])
    cName += "error";
  return (
    <>
      <div className={cName}>
        <div className="component-input">
          <input
            value={props.field.value}
            name={props.field.name}
            type="text"
            placeholder={props.placeholder}
            onChange={props.field.onChange}
          />
        </div>
      </div>
      {props.form.errors && props.form.errors[props.field.name] && (
        <p className="error-msg">{props.form.errors[props.field.name]}</p>
      )}
    </>
  );
};

export default TextInput;
