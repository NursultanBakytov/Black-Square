import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const fire = firebase.initializeApp({
  apiKey: 'AIzaSyBvvn2sK1S7F93fYH1CLJGyAcSyP7I9oF0',
  authDomain: 'blacksquare-99045.firebaseapp.com',
  projectId: 'blacksquare-99045',
  storageBucket: 'blacksquare-99045.appspot.com',
  messagingSenderId: '47870260249',
  appId: '1:47870260249:web:b458479cfd26c8026f2688',
});

// const db = firebase.firestore();
// const storage = firebase.storage();
export {auth, fire as default};
