import React from "react";

const FooterMenu = ({ menuItems, styles } : any) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
        width: "100%",
        height: styles.footerMenuHeight,
        backgroundImage: `linear-gradient(to right, rgb(46, 175, 240), ${styles.black()}`,
        color: styles.white(),
        position: "fixed",
        bottom: 0
      }}
    >
      {menuItems.map((item : any, i: number) => {
        return (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: 1
            }}
          >
            <span style={{ marginRight: 5, fontSize: 20 }}>{item.icon}</span>
            {styles.showFooterMenuText && item.text}
          </div>
        );
      })}
    </div>
  );
};

export default FooterMenu;