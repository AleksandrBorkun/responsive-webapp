  
import React from "react";
import {
  FacebookShareButton,
  PinterestShareButton,
  InstapaperShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  FacebookIcon,
  PinterestIcon,
  InstapaperIcon,
  WhatsappIcon,
  LinkedinIcon
} from "react-share";


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
    float: 'left',
    paddingRight : 25,
  } as React.CSSProperties

  const socialBtnsContainer = {
    backgroundColor: styles.bgColor(),
    position: 'absolute',
    border: '1px solid',
    width: '170px',
    height: '75px',
    borderRadius: '5px',
    marginTop: '5px'
  }  as React.CSSProperties

  return (
    <div className = "contentConatainer" style={contentStyle}>
      {posts.map((post, i) => {
        return (
          <div key={i} style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 0 }}>{post.title}</h2>
            <p>{post.summary}</p>
            <span className = {`hidden socialBtn ${i}`} onClick = {()=>{
                  let el = document.getElementsByClassName(`hidden socialBtn ${i}`)[0];
                  if(el){
                    el.className = `socialBtn ${i}`
                  }else{
                    el =  document.getElementsByClassName(`socialBtn ${i}`)[0];
                    if(el) {el.className = `hidden socialBtn ${i}`}
                  }
                }
              } style = {socialBtnSyle}>&emsp;Share
              <div style = {socialBtnsContainer} className = 'shareBtn'>
                <FacebookShareButton url = 'https://aleksandrborkun.github.io/responsive-webapp/' quote={`test ${i}`}>
                  <FacebookIcon round size={32}/>  
                </FacebookShareButton>
                <PinterestShareButton url = 'https://aleksandrborkun.github.io/responsive-webapp/' media = 'https://aleksandrborkun.github.io/responsive-webapp/' description='test'>
                  <PinterestIcon round size={32}/>  
                </PinterestShareButton>  
                <InstapaperShareButton url = 'https://aleksandrborkun.github.io/responsive-webapp/'>
                  <InstapaperIcon round size={32}/>  
                </InstapaperShareButton>  
                <WhatsappShareButton url = 'https://aleksandrborkun.github.io/responsive-webapp/'>
                  <WhatsappIcon round size={32}/>  
                </WhatsappShareButton>
                <LinkedinShareButton url = 'https://aleksandrborkun.github.io/responsive-webapp/'>
                  <LinkedinIcon size={32} round/>
                </LinkedinShareButton>
                <input placeholder='saldkfas' onClick = {() => {
                  console.log('link copied!')
                  alert('link copied!')
                }}/>
              </div>            
            </span>
            <span className = 'socialBtn' style = {socialBtnSyle}>&emsp;Like
              {i ? <button style = {{backgroundColor: styles.bgColor(), borderRadius: '100%'}}>{i}</button> : ''}
            </span> 
          </div>
        );
      })}
    </div>
  );
};

export default Content;