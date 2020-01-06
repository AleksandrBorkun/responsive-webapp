import React from "react";

const HeaderMenu = ({ menuItems, styles} : any) => {
  const isPC =  styles.headerWidth > 1100
  const width = isPC ? (100/(menuItems.length + 2))/100 * styles.headerWidth : "auto";
  const sidebarStyle = {
    height: styles.headerWidth > 1100 ? "90px" : "100vh",
    width: styles.headerWidth,
    position: 'fixed',
    backgroundImage: isPC 
                      ? `linear-gradient(to left, ${styles.black(0.8)}, ${styles.black()}`
                      : `linear-gradient(to top, ${styles.black(0.8)}, ${styles.black()}`,
    paddingTop: 40,
    borderRadius: isPC ? '0 0 30px 10px' : 'none'
  } as React.CSSProperties;

  const menuItemStyle = {
    display: "flex",
    justifyContent: styles.sidebarCollapsed ? "center" : "flex-start",
    alignItems: "center",
    padding: `4px ${styles.sidebarCollapsed ? 0 : 10}px`,
    color: styles.white(0.9),
    float: isPC ? "left" : "none",
    width: width,
  } as React.CSSProperties;

  const iconStyle = {
    fontSize: 26,
    marginRight: styles.sidebarCollapsed ? 0 : 10
  };

  const logoStyle = {
    textAlign: "center",
    paddingLeft: isPC ? 20 : 0,
    color: styles.white(),
    fontSize: 34,
    marginBottom: 60,
    fontWeight: "bold",
    width: width,
    float: isPC ? "left" : "none",
  } as React.CSSProperties;

  return (
    <div style={sidebarStyle}>
      <div style={logoStyle} >{styles.sidebarCollapsed ? "M" : "MG"}</div>
      {menuItems.map( (item : any, i : number)=> (
        <div key = {i} style={menuItemStyle} className = 'headerMenuBtn'>
          <span style={iconStyle}>{item.icon}</span>
          {!styles.sidebarCollapsed && item.text}
        </div>
      ))}
    </div>
  );
};

export default HeaderMenu;