import config from './../configs/firebase.config'

// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';


firebase.initializeApp(config.firebase);

const SignInModal = ({ styles, switchLoginModalView }: any) => {


    // Configure FirebaseUI.
    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
        signInSuccessUrl: '/',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ]
    };

    const modalContainerStyle = {
        position: 'fixed',
        textAlign: 'center',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 2
    } as React.CSSProperties;

    const modalContentStyle = {
        backgroundColor: '#fefefe',
        margin: '15% auto', /* 15% from the top and centered */
        padding: '20px',
        border: '1px solid #888',
        minWidth: styles.showSidebar ? '300px' : '80%%',
        width: !styles.showSidebar ?  '80%' : '20%' , /* Could be more or less, depending on screen size */
        animationName: 'animatetop',
        animationDuration: '1.5s'
    } as React.CSSProperties;

    const closeBtnStyle = {
        backgroundColor: '#fefefe',
        float: 'right',
        border: '1px solid',
        borderRadius: '10px'
    } as React.CSSProperties;

    return (
        <div style = {modalContainerStyle}>
            <div style={modalContentStyle}>
            <button style = {closeBtnStyle} onClick = {switchLoginModalView}>X</button>
                <h1>Mira Games</h1>
                <p>Please sign-in:</p>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
        </div>
    );
}



export default SignInModal;