import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../components/sign-up-form/Sign-Up-Form";
import {
  auth,
  signInGoogleWithPopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

const Signin = () => {
  const loogGoogleUser = async () => {
    const { user } = await signInGoogleWithPopup();
    createUserDocumentFromAuth(user);
  };
  useEffect(() => {
    async function _getRedirectResult() {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }
    _getRedirectResult();
  }, []);
  return (
    <div>
      <h1>Sign -in page</h1>
      <button onClick={loogGoogleUser}> Sign-In to google</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign-In with google redract
      </button>
      <SignUpForm />
    </div>
  );
};
export default Signin;
