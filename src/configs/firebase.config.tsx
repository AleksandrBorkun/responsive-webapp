const config = {
  firebase: {
    apiKey: process.env.REACT_APP_FB_API_KEY,
    authDomain: "miragame.firebaseapp.com",
    databaseURL: "https://miragame.firebaseio.com",
    projectId: "miragame",
    storageBucket: "miragame.appspot.com",
    messagingSenderId: process.env.REACT_APP_FB_SENDER_ID,
    appId: process.env.REACT_APP_FB_APP_ID,
    measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID
  }
};


export default config;