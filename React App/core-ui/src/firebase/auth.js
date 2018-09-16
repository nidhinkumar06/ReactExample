import { auth } from './firebase';

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
