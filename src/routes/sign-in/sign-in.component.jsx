import {
  signInWithGooglePopup,
  createUserProfileDocFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUserPopup = async () => {
    const { user } = await signInWithGooglePopup();
    createUserProfileDocFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUserPopup}>Sign In With Google Popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
