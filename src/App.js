import React, { useContext } from "react"
import './App.css';
import { DataContext } from "./Context";
import Theme from "./components/Theme";
import ThemeForm from "./components/ThemeForm";
function App() {
  const { initialValues } = useContext(DataContext);

  return (
    <div className="main-wrapper">
      <div className='main-field' >
        <h1>Theme app</h1>
        <ThemeForm />
      </div>
      {initialValues && <Theme values={initialValues} />}
    </div>
  );
}

export default App;
