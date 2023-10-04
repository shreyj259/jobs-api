import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import {
  CustomInput,
  CustomLabel,
  FormHeading,
  PrimaryButton,
} from "../MuiComponents";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      <Grid item xs={3}>
        <Box
          sx={{
            width: "330px",
            backgroundColor: "#ffffff",
            my: 10,
            borderRadius: "8px",
            p: 3,
          }}
        >
          <FormHeading>Register Here</FormHeading>

          <CustomLabel>Name</CustomLabel>
          <CustomInput />

          <CustomLabel>Email</CustomLabel>
          <CustomInput />

          <CustomLabel>Password</CustomLabel>
          <CustomInput />

          <PrimaryButton variant="contained">Register</PrimaryButton>

          <CustomLabel>
            Already Have an Account?{" "}
            <Link className="primary-color-text" to="/login">
              Login here
            </Link>{" "}
          </CustomLabel>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Register;
