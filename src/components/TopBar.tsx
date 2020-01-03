import React from "react";

const TopBar = ({ styles } : any) => {
  const topBarStyle = {
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: styles.topBarHeight,
    backgroundColor: "rgb(46, 175, 240)",
    borderBottom: "1px solid #d8d8d8",
    fontWeight: "bold",
    padding: "0px 20px",
    boxSizing: "border-box"
  } as React.CSSProperties;

  return (
    <div style={topBarStyle}>
      <span>{`😺️`}</span>
      App
      <span>{`⚙️`}</span>
    </div>
  );
};

export default TopBar;