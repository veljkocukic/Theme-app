import React from "react";

const Select = (props) => {
  return (
    <div className="input-wrap">
      <div className="component-input">
        <select onChange={props.onChange} value={props.defaultValue}>
          {props.options.map((item, key) => {
            return <option key={key}>{item}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default Select;
