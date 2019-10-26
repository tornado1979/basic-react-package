import React from "react";

//import './index.css';

const MyReactApp = props => {
  const { width='200px', height='200px', color='gold', bgColor, content='hello..' } = props;
  return (
    <div className="border"
      style = {{
        width,
        height,
        backgroundColor: bgColor || "green",
		             color,
      }}
    >
      {content}
    </div>
  );
};

export default MyReactApp;