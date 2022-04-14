import React, { useContext, useState } from "react";
import { Formik, Field, Form } from "formik";
import { DataContext } from "../Context";
import Select from "./Select";
import TextInput from "./Input";
import {
  isValidHex,
  isValidLink,
  isValidLength,
} from "../utils/validationUtils";

const ThemeForm = (props) => {
  const [currentTheme, setCurrentTheme] = useState("light");
  const { themes, initialValues, setInitalValues, setThemes } =
    useContext(DataContext);
  let options = [];
  for (let a in themes) options.push(a);

  const inputChange = (e) => {
    setInitalValues(themes[e.target.value]);
    setCurrentTheme(e.target.value);
  };

  const handleSubmit = (values) => {
    setThemes((prev) => {
      return { ...prev, [currentTheme]: values };
    });
    setInitalValues(values);
  };

  const handleNew = (e, values) => {
    e.preventDefault();
    let a = prompt("Chose the name of the new theme:");
    setThemes((prev) => {
      return { ...prev, [a]: values };
    });
    setInitalValues(values);
    setCurrentTheme(a);
    alert("Theme " + a + " successfuly saved.");
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      onSubmit={handleSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <Field
              name="select"
              options={options}
              onChange={inputChange}
              defaultValue={currentTheme}
              component={Select}
            />
            <Field
              name="primary"
              placeholder="Primary"
              component={TextInput}
              validate={isValidHex}
            />
            <Field
              name="secondary"
              placeholder="Secondary"
              component={TextInput}
              validate={isValidHex}
            />
            <Field
              name="error"
              placeholder="Error"
              component={TextInput}
              validate={isValidHex}
            />
            <Field
              name="avatar"
              placeholder="Avatar"
              component={TextInput}
              validate={isValidLink}
            />
            <Field
              name="intro"
              placeholder="Intro"
              component={TextInput}
              validate={isValidLength}
            />
            <div className="buttons">
              <button type="submit">Submit</button>
              <button onClick={(e) => handleNew(e, formik.values)}>
                Add new
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ThemeForm;
