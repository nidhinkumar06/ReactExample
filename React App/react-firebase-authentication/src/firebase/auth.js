import { auth } from './firebase';

//signup
export const doCreateWithEmailAndPassword = (email, password) => {
  auth.createUserWithEmailAndPassword(email, password);
};

//signin
export const doSignInWithEmailAndPassword = (email, password) => {
  auth.doSignInWithEmailAndPassword(email, password);
};

//signout
export const signOut = () => auth.signOut();

//password reset
export const doPasswordReset = (email) => {
  auth.sendPasswordResetEmail(email);
};

//password change
export const doPasswordChange = (password) => {
  auth.currentUser.updatePassword(password);
};
