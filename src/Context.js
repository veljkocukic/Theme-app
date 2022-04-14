import React, { createContext, useState } from "react";

export let DataContext = createContext();


export let MainProvider = (props) => {
    let [themes, setThemes] = useState({
        light: {
            primary: "#42a5f5",
            secondary: "#ab47bc",
            error: "#d32f2f",
            avatar: "https://gravatar.com/avatar/5b629e1c2749c7a883b5a6913408fa7d?s=400&d=robohash&r=x",
            intro: "Text text text text text text text text text text text text text text text text text.",
        },
        main: {
            primary: "#90caf9",
            secondary: "#ce93d8",
            error: "#f44336",
            avatar: "https://gravatar.com/avatar/5b629e1c2749c7a883b5a6913408fa7d?s=400&d=retro&r=x",
            intro: "Text text text text text text text text text text text."
        },
        dark: {
            primary: "#e3f2fd",
            secondary: "#f3e5f5",
            error: "#e57373",
            avatar: "https://gravatar.com/avatar/5b629e1c2749c7a883b5a6913408fa7d?s=400&d=identicon&r=x",
            intro: "Text text text text text text text text text text text text text text."
        }
    })
    const [initialValues, setInitalValues] = useState(themes.light)


    return (
        <DataContext.Provider
            value={{ themes, setThemes, initialValues, setInitalValues }}
        >
            {props.children}
        </DataContext.Provider>
    );
};