import { Button, Grid, TextField } from "@mui/material";

const Login = () => {
  const labelStyle = {
    color: "#3c1b08",
  };

  return (
    <section className="pt-16">
      <div className="align-element">
        <div className="grid items-center justify-center ">
          <h3 className="text-lg font-semibold text-center text-brownish-2 mb-6 md:mb-8">
            Register
          </h3>

          <form onSubmit={() => {}} className=" max-w-[320px]">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
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
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  className="  text-white bg-amber-900 hover:bg-brownish-1 transition-all duration-160"
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={12}>
                <p className="text-sm text-brownish-2 text-center">
                  Already have an account?{" "}
                  <a href="/login" className="underline underline-offset-2">
                    Register here
                  </a>
                </p>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
