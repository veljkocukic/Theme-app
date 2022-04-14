import React from "react";

const Theme = (props) => {
  const { primary, secondary, error, avatar, intro } = props.values;

  return (
    <div className="theme">
      <div className="theme-wrapper">
        <div className="img-colors">
          <div>
            <p>Avatar:</p>
            <img src={avatar} alt="img" />
          </div>

          <div className="colors">
            <div className="color-wrap">
              <p>Primary</p>
              <div className="color" style={{ backgroundColor: primary }}></div>
            </div>
            <div className="color-wrap">
              <p>Secondary</p>
              <div
                className="color"
                style={{ backgroundColor: secondary }}
              ></div>
            </div>
            <div className="color-wrap">
              <p>Error</p>
              <div className="color" style={{ backgroundColor: error }}></div>
            </div>
          </div>
        </div>
        <div className="text">
          <p>{intro}</p>
        </div>
        <div className="code">
          <pre>
            <code>
              {`{\nprimary: ${primary},\nsecondary: ${secondary},\nerror: ${error},\navatar: ${avatar},\nintro: ${intro},\n}`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Theme;
