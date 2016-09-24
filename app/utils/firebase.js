var firebase  = require("firebase");
require('firebase/database');

var config = {
apiKey: process.env.FIREBASE_API_KEY,
authDomain: process.env.FIREBASE_AUTH_DOMAIN,
databaseURL: process.env.FIREBASE_DB_URL,
storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
};

firebase.initializeApp(config);

module.exports = firebase.database();
