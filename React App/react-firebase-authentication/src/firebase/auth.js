import { auth } from './firebase';

//signup
export const doCreateUserWithEmailAndPassword = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

//signin
export const doSignInWithEmailAndPassword = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

//signout
export const doSignOut = () => auth.signOut();

//password reset
export const doPasswordReset = (email) => {
  return auth.sendPasswordResetEmail(email);
};

//password change
export const doPasswordChange = (password) => {
  return auth.currentUser.updatePassword(password);
};
