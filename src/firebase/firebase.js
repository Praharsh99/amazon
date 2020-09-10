import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDYsLe2U8KX2feQkc4_K6dhV1LoKKtToac",
  authDomain: "fir-95c6b.firebaseapp.com",
  databaseURL: "https://fir-95c6b.firebaseio.com",
  projectId: "fir-95c6b",
  storageBucket: "fir-95c6b.appspot.com",
  messagingSenderId: "498891999531",
  appId: "1:498891999531:web:ccf76e42329c364de49d6e",
  measurementId: "G-HZDVW3MPB7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const createAccountWithEmailAndPassword = async (
  email,
  password,
  displayName
) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    await firebase.auth().currentUser.updateProfile({
      displayName,
      photoURL: "https://img.icons8.com/color/48/000000/hulk.png",
    });

    sendVerificationEmail();

    auth.signOut();

    return {
      status: "success",
    };
  } catch (err) {
    return {
      status: "error",
      message: err.message,
    };
  }
};

export const sendVerificationEmail = () => {
  var user = firebase.auth().currentUser;

  user.sendEmailVerification();
};

export const signInUser = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);

    var user = firebase.auth().currentUser;

    if (user.emailVerified) {
      return {
        status: "success",
      };
    } else {
      auth.signOut();

      return {
        status: "error",
        message: "Please verify your email to continue!",
      };
    }
  } catch (err) {
    return {
      status: "error",
      message: err.message,
    };
  }
};

export { db, auth, signInWithGoogle };
