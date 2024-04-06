// import { TextField, Button } from "@material-ui/core";
import { TextField, Button } from "@mui/material";

const Contact = () => {
  return (
    <section className="pt-16">
      <div className="align-element">
        <div className="flex flex-col  gap-8 md:flex-row lg:gap-14">
          <div className="md:w-[50%]">
            <h3 className="text-2xl font-semibold mb-2 text-brownish-1">
              About Us
            </h3>
            <p className="text-lg font-semibold mb-3">
              Have any questions about Kofe?
            </p>

            <div className="space-y-3">
              <p className="text-sm">
                You can contact us on our customer service line where we will be
                happy to assist you during weekdays from 08:00 – 17:00 on:
              </p>
              <p className="text-sm">Telephone - 0861 40 40 41</p>
              <p className="text-sm">
                Email -{" "}
                <a
                  href="mailto:customerservice@Kofe.co.za"
                  className="underline underline-offset-2"
                >
                  customerservice@Kofe.co.za
                </a>
              </p>
            </div>
          </div>

          <div className="md:w-[50%]">
            <h3 className="text-2xl font-semibold mb-4 text-brownish-1">
              Send us an email
            </h3>
            <form className="space-y-4 ">
              <TextField
                fullWidth
                label="Full Name"
                variant="outlined"
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#333" },
                    "&:hover fieldset": { borderColor: "#3c1b08" },
                    "&.Mui-focused fieldset": { borderColor: "#3c1b08" },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#333" },
                    "&:hover fieldset": { borderColor: "#3c1b08" },
                    "&.Mui-focused fieldset": { borderColor: "#3c1b08" },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Phone Number"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#333" },
                    "&:hover fieldset": { borderColor: "#3c1b08" },
                    "&.Mui-focused fieldset": { borderColor: "#3c1b08" },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Comment"
                variant="outlined"
                multiline
                rows={4}
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#333" },
                    "&:hover fieldset": { borderColor: "#3c1b08" },
                    "&.Mui-focused fieldset": { borderColor: "#3c1b08" },
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                className=" bg-black px-4"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
