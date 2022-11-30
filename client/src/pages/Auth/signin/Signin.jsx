import React from "react";
import GoogleButton from "react-google-button";
import { SignInContainer } from "./signin.styled";
import { UserAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Typography } from "@mui/material";

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/");
    }
  }, [user]);
  return (
    <>
      <SignInContainer>
        <Typography variant="h5">SignIn</Typography>

        <GoogleButton onClick={handleGoogleSignIn} />
      </SignInContainer>
    </>
  );
};

export default Signin;
