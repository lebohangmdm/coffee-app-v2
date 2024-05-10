import { Button, Grid, TextField } from "@mui/material";
import { isValidEmail } from "../utils/helpers";
import { Link, redirect, useActionData, useNavigation } from "react-router-dom";
import { register } from "../services/apiAuth";
import { Form } from "react-router-dom";

const Register = () => {
  const formErrors = useActionData();
  const navigation = useNavigation();
  const submitting = navigation.state === "submitting";

  const labelStyle = {
    color: "#3c1b08",
  };

  return (
    <section className="flex items-center justify-center h-screen">
      <div className="align-element">
        <div className=" ">
          <h3 className="text-lg font-semibold text-center text-brownish-2 mb-6 md:mb-8">
            Register
          </h3>

          <Form method="post" className=" max-w-[320px]">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="full Name"
                  name="fullName"
                  variant="outlined"
                  required
                  InputLabelProps={{ style: labelStyle }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#333" },
                      "&:hover fieldset": { borderColor: "#3c1b08" },
                      "&.Mui-focused fieldset": { borderColor: "#3c1b08" },
                    },
                  }}
                />
                {formErrors?.fullName && (
                  <p className="text-sm mt-2 text-red-500">
                    {formErrors.fullName}
                  </p>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  variant="outlined"
                  type="email"
                  required
                  InputLabelProps={{ style: labelStyle }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#333" },
                      "&:hover fieldset": { borderColor: "#3c1b08" },
                      "&.Mui-focused fieldset": { borderColor: "#3c1b08" },
                    },
                  }}
                />
                {formErrors?.email && (
                  <p className="text-sm mt-2 text-red-500">
                    {formErrors.email}
                  </p>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  variant="outlined"
                  type="password"
                  required
                  InputLabelProps={{ style: labelStyle }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#333" },
                      "&:hover fieldset": { borderColor: "#3c1b08" },
                      "&.Mui-focused fieldset": { borderColor: "#3c1b08" },
                    },
                  }}
                />
                {formErrors?.password && (
                  <p className="text-sm mt-2 text-red-500">
                    {formErrors.password}
                  </p>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Confirm Password"
                  name="confirmPassword"
                  variant="outlined"
                  type="password"
                  required
                  InputLabelProps={{ style: labelStyle }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#333" },
                      "&:hover fieldset": { borderColor: "#3c1b08" },
                      "&.Mui-focused fieldset": { borderColor: "#3c1b08" },
                    },
                  }}
                />
                {formErrors?.confirmPassword && (
                  <p className="text-sm mt-2 text-red-500">
                    {formErrors.confirmPassword}
                  </p>
                )}
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={submitting}
                  className="  text-white bg-amber-900 hover:bg-brownish-1 transition-all duration-160"
                >
                  {submitting ? "Registering" : "Register"}
                </Button>
              </Grid>
              <Grid item xs={12}>
                <p className="text-sm text-brownish-2 text-center">
                  Already have an account?{" "}
                  <Link to={"/login"} className="underline underline-offset-2">
                    Login here
                  </Link>
                </p>
              </Grid>
            </Grid>
          </Form>
        </div>
      </div>
    </section>
  );
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const { fullName, email, password, confirmPassword } = data;

  const errors = {};

  console.log(email);
  // validate the fields
  console.log(fullName);

  if (!fullName.length || fullName.trim().length === 0) {
    errors.fullName = "Please provide a valid name";
  }

  if (!isValidEmail(email)) {
    errors.email = "Please provide a valid email";
  }

  if (password.length < 6) {
    errors.password = "Please ensure your password is at least 6 characters";
  }

  if (password !== confirmPassword) {
    errors.confirmPassword = "It appears your passwords don't match";
  }

  // return data if we have errors
  if (Object.keys(errors).length) {
    return errors;
  }

  await register({ fullName, email, password });

  return redirect("/login");
};

export default Register;
