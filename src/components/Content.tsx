  
import React from "react";

const Content = ({ styles } : any) => {
  const topPadding = !styles.showSidebar ? 20 : styles.headerWidth > 50 ? "370px" : 250;
  const { showSidebar } = styles;

  const dummyPost = {
    title: `Here's a blog post title`,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  };

  const posts = Array(20).fill(dummyPost);

  const contentStyle = {
    paddingTop: topPadding,
    paddingRight: 20,
    paddingBottom: showSidebar ? 20 : styles.footerMenuHeight + 20,
    paddingLeft: showSidebar ? 50 + 20 : 20,
    backgroundColor: styles.bgColor()
  } as React.CSSProperties;

  const socialBtnSyle = {
    fontWeight: "bold",
    float: "right",
    paddingRight : 20
  } as React.CSSProperties

  return (
    <div className = "contentConatainer" style={contentStyle}>
      {posts.map((post, i) => {
        return (
          <div key={i} style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 0 }}>{post.title}</h2>
            <p>{post.summary}</p>
            <span className = 'socialBtn' style = {socialBtnSyle}>&emsp;Like</span> 
            <span className = 'socialBtn' style = {socialBtnSyle}>&emsp;Share</span>
            <span className = 'socialBtn' style = {socialBtnSyle}>&emsp;Comment</span>
          </div>
        );
      })}
    </div>
  );
};

export default Content;