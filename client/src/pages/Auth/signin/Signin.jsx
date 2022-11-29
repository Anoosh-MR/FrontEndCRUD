import React from "react";
import GoogleButton from "react-google-button";
import { SignInContainer } from "./signin.styled";
import { UserAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const { googleSignIn } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <SignInContainer>
        <GoogleButton onClick={handleGoogleSignIn} />
      </SignInContainer>
    </>
  );
};

export default Signin;
