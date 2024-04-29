import { Button, Grid, TextField } from "@mui/material";
import { login } from "../services/apiAuth";
import {
  Form,
  Link,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";

const Login = () => {
  const formErrors = useActionData();
  const labelStyle = {
    color: "#3c1b08",
  };

  const navigation = useNavigation();
  const submitting = navigation.state === "submitting";

  return (
    <section className="pt-16 height-dvh">
      <div className="align-element">
        <div className="grid items-center justify-center ">
          <h3 className="text-lg font-semibold text-center text-brownish-2 mb-6 md:mb-8 lg:mb-10">
            Login
          </h3>

          <Form method="post" className=" max-w-[320px]">
            <Grid container spacing={4}>
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
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={submitting}
                  className="  text-white bg-amber-900 hover:bg-brownish-1 transition-all duration-160"
                >
                  {submitting ? "Logging" : "Login"}
                </Button>
              </Grid>
              <Grid item xs={12}>
                <p className="text-sm text-brownish-2 text-center">
                  Already have an account?{" "}
                  <Link
                    to={"/register"}
                    className="underline underline-offset-2"
                  >
                    Register here
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

  const email = formData.get("email");
  const password = formData.get("password");
  const errors = {};

  console.log(email);
  // validate the fields
  if (typeof email !== "string" || !email.includes("@")) {
    errors.email = "That doesn't look like an email address";
  }

  if (typeof password !== "string" || password.length < 6) {
    errors.password = "Password must be more than 5 characters";
  }

  // return data if we have errors
  if (Object.keys(errors).length) {
    return errors;
  }

  const user = await login({ email, password });
  console.log(user);

  return redirect("/menu");
};

export default Login;
