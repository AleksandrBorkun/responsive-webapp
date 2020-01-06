import React, { Component } from "react";
import TopBar from "./components/TopBar";
import FooterMenu from "./components/FooterMenu";
import Content from "./components/Content";
import HeaderMenu from "./components/HeaderMenu";
import Carousel from "./components/Carousel";
import SignInModal from './components/SignInModal';

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0,
      account: {},
      isLoginModalOn: false,
    };
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
    const fbAccounts = JSON.parse(window.localStorage.getItem('firebaseui::rememberedAccounts') || '');
    if(fbAccounts){
      this.setState({account: fbAccounts[0]});
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

    this.setState({ windowWidth, windowHeight });
  }

  handleLogin(text: string){
    if(text.toLowerCase() === 'profile'){
      this.switchLoginModalView();
    }
  }

  switchLoginModalView(){
    this.setState({isLoginModalOn: !this.state.isLoginModalOn})
  }

  render() {
    const { windowWidth } = this.state;

    const styles = {
      white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      black: (opacity = 1) => `rgba(46, 78, 240, ${opacity})`,
      bgColor: (opacity = 1) => `rgb(241, 245, 254, ${opacity})`,
      topBarHeight: 40,
      footerMenuHeight: 50,
      showFooterMenuText: windowWidth > 500,
      showSidebar: windowWidth > 768,
      headerWidth: windowWidth < 1100 ? 50 : windowWidth,
      sidebarCollapsed: windowWidth < 1100,
      windowWidth: windowWidth
    };

    const menuItems = styles.showSidebar
      ? [
          { icon: `😀`, text: "Catalog" },
          { icon: `😉`, text: "Posts" },
          { icon: `😎`, text: "Reviews" },
          { icon: `😺️`, text: "Profile" },
          { icon: `⚙`, text: "Settings" }
        ]
      : [
          { icon: `😀`, text: "Item 1" },
          { icon: `😉`, text: "Item 2" },
          { icon: `😎`, text: "Item 3" },
        ];

    return (
      <div
        style={{
          backgroundColor: styles.black(0.05),
          minHeight: "100vh",
          position: "relative"
        }}
      >
        {styles.showSidebar ? (
          <HeaderMenu menuItems={menuItems} styles={styles} handleLogin={ this.handleLogin.bind(this)}/>
        ) : (
          <TopBar styles={styles} />
        )}
        {this.state.isLoginModalOn ? <SignInModal styles={styles} switchLoginModalView = { this.switchLoginModalView.bind(this)}/> : ""}
        <Carousel styles={styles}/>
        <Content styles={styles} />

        {!styles.showSidebar && (
          <FooterMenu menuItems={menuItems} styles={styles} />
        )}
      </div>
    );
  }
}

export default App;